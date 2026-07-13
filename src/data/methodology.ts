import type { TranslationKey } from "@/lib/i18n";

export interface MethodologyDimension {
  num: string;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  /** Illustrative scoring weight, shown on the full methodology page. */
  weight: number;
}

export const METHODOLOGY_DIMENSIONS: MethodologyDimension[] = [
  { num: "01", titleKey: "methodology.d1.title", bodyKey: "methodology.d1.body", weight: 40 },
  { num: "02", titleKey: "methodology.d2.title", bodyKey: "methodology.d2.body", weight: 30 },
  { num: "03", titleKey: "methodology.d3.title", bodyKey: "methodology.d3.body", weight: 20 },
  { num: "-", titleKey: "methodology.d4.title", bodyKey: "methodology.d4.body", weight: 10 },
];
