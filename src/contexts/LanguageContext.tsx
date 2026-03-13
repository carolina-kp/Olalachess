import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import en from "../locales/en";
import es from "../locales/es";
import he from "../locales/he";
import ru from "../locales/ru";
import type { Translations } from "../locales/en";

export type Lang = "en" | "es" | "he" | "ru";

const locales: Record<Lang, Translations> = { en, es, he, ru };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
  isRTL: false,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = locales[lang];
  const isRTL = lang === "he";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
