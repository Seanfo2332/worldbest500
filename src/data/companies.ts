import { ranking2025Preview } from "./ranking";
import { coverStories } from "./cover-stories";

export interface CompanyEntry {
  nameCn: string;
  nameEn: string;
  domain: string;
  industry: string;
  industryEn: string;
  headquarters: string;
  headquartersEn: string;
  blurb: string;
  blurbEn: string;
}

/**
 * Merge + dedupe (by domain) companies that appear across the ranking
 * preview and cover-story datasets into a single directory. This keeps
 * the directory/industries pages in sync with the same source-of-truth
 * data used on the homepage, instead of hand-duplicating company facts.
 */
function buildCompanyDirectory(): CompanyEntry[] {
  const byDomain = new Map<string, CompanyEntry>();

  for (const entry of ranking2025Preview) {
    byDomain.set(entry.domain, {
      nameCn: entry.nameCn,
      nameEn: entry.nameEn,
      domain: entry.domain,
      industry: entry.industry,
      industryEn: entry.industryEn,
      headquarters: entry.headquarters,
      headquartersEn: entry.headquartersEn,
      blurb: entry.blurb,
      blurbEn: entry.blurbEn,
    });
  }

  // Any cover-story company not already covered by the ranking preview
  // (defensive fallback: currently all three overlap, but new cover
  // stories may not always have a matching ranking entry yet).
  const knownHeadquarters: Record<string, { cn: string; en: string }> = {
    "tsmc.com": { cn: "中国台湾", en: "Taiwan" },
  };

  for (const story of coverStories) {
    if (byDomain.has(story.domain)) continue;
    const hq = knownHeadquarters[story.domain];
    byDomain.set(story.domain, {
      nameCn: story.nameCn,
      nameEn: story.nameEn,
      domain: story.domain,
      industry: story.categoryCn,
      industryEn: story.categoryEn,
      headquarters: hq?.cn ?? "-",
      headquartersEn: hq?.en ?? "-",
      blurb: story.excerptCn,
      blurbEn: story.excerptEn,
    });
  }

  return Array.from(byDomain.values());
}

export const companies: CompanyEntry[] = buildCompanyDirectory();

export interface IndustryEntry {
  nameCn: string;
  nameEn: string;
  companyCount: number;
  description: string;
  descriptionEn: string;
}

/** One-line description per industry, keyed by the canonical English name. */
const INDUSTRY_DESCRIPTIONS: Record<string, { cn: string; en: string }> = {
  "Technology Hardware & Equipment": {
    cn: "设计并制造支撑数字经济运转的实体设备、芯片与基础设施的企业。",
    en: "Companies designing and manufacturing the physical devices, chips, and infrastructure that power the digital economy.",
  },
  "Software & Cloud Services": {
    cn: "提供企业软件、云计算与数字基础设施服务的企业。",
    en: "Providers of enterprise software, cloud computing, and digital infrastructure services.",
  },
  "Energy & Chemicals": {
    cn: "为全球工业与交通提供动力的石油、天然气与石化产品生产与加工企业。",
    en: "Producers and processors of oil, gas, and petrochemical products powering global industry and transport.",
  },
  "E-Commerce & Retail": {
    cn: "运营大规模线上与线下零售网络的企业，业务涵盖物流至最后一公里配送环节。",
    en: "Companies operating large-scale online and physical retail networks, from logistics to last-mile delivery.",
  },
  "Diversified Holdings": {
    cn: "在多个（往往互不关联的）行业中持有控股权益的投资控股企业。",
    en: "Investment holding companies with controlling stakes across multiple, often unrelated, industries.",
  },
  Semiconductors: {
    cn: "设计并制造几乎支撑所有现代电子设备运转芯片的企业。",
    en: "Designers and manufacturers of the chips that underpin virtually every modern electronic device.",
  },
  "Internet & Software Services": {
    cn: "凭借搜索、广告与云服务业务，贡献全球数字广告收入主要份额的平台型企业。",
    en: "Platform companies whose search, advertising, and cloud services generate the bulk of global digital ad revenue.",
  },
  "Luxury Goods & Retail": {
    cn: "以传承、工艺与品牌资产作为核心竞争力的时尚、珠宝与高端消费品牌。",
    en: "Fashion, jewelry, and premium consumer brands competing on heritage, craftsmanship, and brand equity.",
  },
  "Automotive & Mobility": {
    cn: "正在从燃油发动机向电动与混合动力平台转型的汽车制造企业。",
    en: "Vehicle manufacturers navigating the transition from combustion engines to electric and hybrid platforms.",
  },
  "Banking & Financial Services": {
    cn: "在全球范围内提供信贷、投资银行与资产管理服务的金融机构。",
    en: "Institutions providing lending, investment banking, and asset management services at global scale.",
  },
  "Internet & Entertainment": {
    cn: "以庞大用户规模运营社交平台、游戏与数字娱乐生态系统的企业。",
    en: "Companies operating social platforms, gaming, and digital entertainment ecosystems at massive user scale.",
  },
  "Pharmaceuticals & Healthcare": {
    cn: "致力于慢性病治疗药物研发，并在全球范围内扩大治疗可及性的制药与医疗健康企业。",
    en: "Drug developers and healthcare companies addressing chronic disease and expanding treatment access worldwide.",
  },
  "Consumer Goods": {
    cn: "通过全球零售网络分销日常食品、饮料与家居用品的制造企业。",
    en: "Manufacturers of everyday food, beverage, and household products distributed through global retail networks.",
  },
};

function buildIndustryDirectory(): IndustryEntry[] {
  const byIndustry = new Map<string, IndustryEntry>();

  for (const company of companies) {
    const existing = byIndustry.get(company.industryEn);
    if (existing) {
      existing.companyCount += 1;
    } else {
      const desc = INDUSTRY_DESCRIPTIONS[company.industryEn];
      byIndustry.set(company.industryEn, {
        nameCn: company.industry,
        nameEn: company.industryEn,
        companyCount: 1,
        description: desc?.cn ?? "",
        descriptionEn: desc?.en ?? "",
      });
    }
  }

  return Array.from(byIndustry.values());
}

export const industries: IndustryEntry[] = buildIndustryDirectory();
