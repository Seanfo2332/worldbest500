"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import type { Lang } from "@/lib/i18n";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  initialLang: Lang;
}

export function Providers({ children, initialLang }: ProvidersProps) {
  return (
    <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
  );
}
