import { useLanguage } from "../contexts/LanguageContext";
import type { Lang } from "../contexts/LanguageContext";

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "he", flag: "🇮🇱", label: "HE" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
            lang === code
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          <span>{flag}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
