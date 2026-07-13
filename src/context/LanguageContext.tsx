"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
  /**
   * The active language, resolved server-side from the URL segment
   * (`/` → "zh", `/en` → "en"). The URL is the single source of truth
   * for language — see src/app/[lang]/layout.tsx and next.config.ts.
   */
  initialLang: Lang;
}

export function LanguageProvider({ children, initialLang }: LanguageProviderProps) {
  function t(key: TranslationKey): string {
    return translations[initialLang][key] as string;
  }

  return (
    <LanguageContext.Provider value={{ lang: initialLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
