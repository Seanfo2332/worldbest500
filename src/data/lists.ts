import type { TranslationKey } from "@/lib/i18n";

export interface SubListEntry {
  num: string;
  enKey: TranslationKey;
  cnKey: TranslationKey;
  descKey: TranslationKey;
  /**
   * Domains (from ranking2025Preview) illustrating this sub-list. Per the
   * team briefing, a company can appear across multiple Curated Six lists
   * simultaneously, so overlap between entries here is intentional, not
   * a data error.
   */
  exampleDomains: string[];
}

export const CURATED_SIX: SubListEntry[] = [
  {
    num: "01",
    enKey: "lists.c1.en",
    cnKey: "lists.c1.cn",
    descKey: "lists.c1.desc",
    exampleDomains: ["apple.com", "aramco.com", "jpmorganchase.com"],
  },
  {
    num: "02",
    enKey: "lists.c2.en",
    cnKey: "lists.c2.cn",
    descKey: "lists.c2.desc",
    exampleDomains: ["novonordisk.com", "microsoft.com", "nestle.com"],
  },
  {
    num: "03",
    enKey: "lists.c3.en",
    cnKey: "lists.c3.cn",
    descKey: "lists.c3.desc",
    exampleDomains: ["nvidia.com", "tencent.com", "abc.xyz"],
  },
  {
    num: "04",
    enKey: "lists.c4.en",
    cnKey: "lists.c4.cn",
    descKey: "lists.c4.desc",
    exampleDomains: ["nvidia.com", "tsmc.com", "apple.com"],
  },
  {
    num: "05",
    enKey: "lists.c5.en",
    cnKey: "lists.c5.cn",
    descKey: "lists.c5.desc",
    exampleDomains: ["toyota.com", "lvmh.com", "samsung.com"],
  },
  {
    num: "06",
    enKey: "lists.c6.en",
    cnKey: "lists.c6.cn",
    descKey: "lists.c6.desc",
    exampleDomains: ["tencent.com"],
  },
];

export const INDIVIDUAL_THREE: SubListEntry[] = [
  { num: "I", enKey: "lists.i1.en", cnKey: "lists.i1.cn", descKey: "lists.i1.desc", exampleDomains: [] },
  { num: "II", enKey: "lists.i2.en", cnKey: "lists.i2.cn", descKey: "lists.i2.desc", exampleDomains: [] },
  { num: "III", enKey: "lists.i3.en", cnKey: "lists.i3.cn", descKey: "lists.i3.desc", exampleDomains: [] },
];
