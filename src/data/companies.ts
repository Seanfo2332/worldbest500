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
    });
  }

  // TSMC (from cover stories) isn't in the ranking preview — add it with
  // its real, public headquarters location rather than a placeholder.
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
    });
  }

  return Array.from(byDomain.values());
}

export const companies: CompanyEntry[] = buildCompanyDirectory();

export interface IndustryEntry {
  nameCn: string;
  nameEn: string;
  companyCount: number;
}

function buildIndustryDirectory(): IndustryEntry[] {
  const byIndustry = new Map<string, IndustryEntry>();

  for (const company of companies) {
    const existing = byIndustry.get(company.industryEn);
    if (existing) {
      existing.companyCount += 1;
    } else {
      byIndustry.set(company.industryEn, {
        nameCn: company.industry,
        nameEn: company.industryEn,
        companyCount: 1,
      });
    }
  }

  return Array.from(byIndustry.values());
}

export const industries: IndustryEntry[] = buildIndustryDirectory();
