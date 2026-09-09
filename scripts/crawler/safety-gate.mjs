// Automated pre-publish safety check, run on every article for its recorded gate_score/
// similarity even though the current publish policy is always-auto-publish (see pipeline.mjs) --
// same "informational, not gating" status as mcn-singapore's current safety-gate.ts.
//
// Similarity tokenization is ported from wp-editor-hub's src/lib/crawler/safety-gate.ts (CJK
// character-bigram + Latin-word frequency), NOT Singapore's whitespace-word version -- Chinese
// has no whitespace word boundaries, so Singapore's English tokenizer would treat each Taiwan
// article's entire body as one giant "word" and produce meaningless similarity scores. wp-editor-
// hub's thresholds are reused as-is (calibrated there against real CJK crawl+rewrite pairs);
// Singapore's own thresholds are English-specific and don't transfer.
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || "" });

const AI_DETECTION_MODEL = "claude-sonnet-4-6";
const AI_DETECTION_MAX_SCORE = 90;
const MAX_SIMILARITY_TO_SOURCE = 0.85;
const MIN_SIMILARITY_TO_SOURCE = 0.03;

// Character bigrams are the standard technique for CJK text similarity without a full word
// segmenter -- they capture phrase-level overlap (shared names, places, terms) that whole-run
// word matching misses.
/** @param {string} text @returns {Record<string, number>} */
function cjkTokenFreq(text) {
  const freq = {};
  const bump = (t) => {
    freq[t] = (freq[t] || 0) + 1;
  };

  for (const run of text.match(/[一-龥]+/g) || []) {
    if (run.length === 1) {
      bump(run);
      continue;
    }
    for (let i = 0; i < run.length - 1; i++) bump(run.slice(i, i + 2));
  }
  for (const word of text.toLowerCase().match(/[a-z0-9]+/g) || []) bump(word);

  return freq;
}

/** @param {Record<string, number>} a @param {Record<string, number>} b @returns {number} */
export function cosineSim(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (const key of keys) {
    const va = a[key] || 0;
    const vb = b[key] || 0;
    dot += va * vb;
    magA += va * va;
    magB += vb * vb;
  }
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

/** @param {string} content @returns {Promise<number>} */
async function detectAiScore(content) {
  const plainText = content.trim();
  if (plainText.length < 100) return 0;

  const message = await anthropic.messages.create({
    model: AI_DETECTION_MODEL,
    max_tokens: 256,
    system: `你是一位 AI 內容偵測專家。針對給定的繁體中文文字，評估其為 AI 生成內容的可能性，給出 0-100 分。注意句構是否過於一致、轉折語是否公式化（例如「此外」、「值得注意的是」、「總而言之」）、是否有空泛的填充語句、段落結構是否過於工整、語氣是否過度保留、用語是否重複。

只回傳一個合法的 JSON 物件，不含任何額外文字：{"score": 42}`,
    messages: [{ role: "user", content: plainText.slice(0, 6000) }],
  });

  const textBlock = message.content.find((block) => block.type === "text");
  const raw = textBlock?.text?.trim() ?? "{}";
  try {
    const parsed = JSON.parse(raw);
    return Math.min(100, Math.max(0, parsed.score ?? 0));
  } catch {
    return 0;
  }
}

/**
 * @param {string[]} rewrittenBody
 * @param {string} sourceBody
 * @param {{ metaTitle: string, metaDescription: string }} seoMeta
 */
export async function runSafetyGate(rewrittenBody, sourceBody, seoMeta) {
  const plainRewrite = rewrittenBody.join(" ");
  const similarity = cosineSim(cjkTokenFreq(plainRewrite), cjkTokenFreq(sourceBody));

  if (!seoMeta.metaTitle || !seoMeta.metaDescription) {
    const missing = [!seoMeta.metaTitle && "metaTitle", !seoMeta.metaDescription && "metaDescription"]
      .filter(Boolean)
      .join(", ");
    return {
      pass: false,
      reason: `Missing required SEO metadata (${missing}) after retries — held rather than published without it`,
      gateScore: null,
      similarity,
    };
  }

  if (similarity > MAX_SIMILARITY_TO_SOURCE) {
    return {
      pass: false,
      reason: `Too similar to source (${Math.round(similarity * 100)}% > ${MAX_SIMILARITY_TO_SOURCE * 100}% threshold) — likely a near-verbatim copy rather than a rewrite`,
      gateScore: null,
      similarity,
    };
  }
  if (similarity < MIN_SIMILARITY_TO_SOURCE) {
    return {
      pass: false,
      reason: `Too dissimilar from source (${Math.round(similarity * 100)}% < ${MIN_SIMILARITY_TO_SOURCE * 100}% threshold) — rewrite may have drifted off-topic`,
      gateScore: null,
      similarity,
    };
  }

  const gateScore = await detectAiScore(plainRewrite);
  if (gateScore >= AI_DETECTION_MAX_SCORE) {
    return {
      pass: false,
      reason: `AI-detection score ${gateScore} exceeds ${AI_DETECTION_MAX_SCORE} threshold`,
      gateScore,
      similarity,
    };
  }

  return { pass: true, gateScore, similarity };
}
