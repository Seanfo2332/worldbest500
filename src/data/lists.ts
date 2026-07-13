import type { TranslationKey } from "@/lib/i18n";

export interface SubListEntry {
  num: string;
  enKey: TranslationKey;
  cnKey: TranslationKey;
}

export const CURATED_SIX: SubListEntry[] = [
  { num: "01", enKey: "lists.c1.en", cnKey: "lists.c1.cn" },
  { num: "02", enKey: "lists.c2.en", cnKey: "lists.c2.cn" },
  { num: "03", enKey: "lists.c3.en", cnKey: "lists.c3.cn" },
  { num: "04", enKey: "lists.c4.en", cnKey: "lists.c4.cn" },
  { num: "05", enKey: "lists.c5.en", cnKey: "lists.c5.cn" },
  { num: "06", enKey: "lists.c6.en", cnKey: "lists.c6.cn" },
];

export const INDIVIDUAL_THREE: SubListEntry[] = [
  { num: "I", enKey: "lists.i1.en", cnKey: "lists.i1.cn" },
  { num: "II", enKey: "lists.i2.en", cnKey: "lists.i2.cn" },
  { num: "III", enKey: "lists.i3.en", cnKey: "lists.i3.cn" },
];
