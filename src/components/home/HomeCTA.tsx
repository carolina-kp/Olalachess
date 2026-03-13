import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { useLanguage } from "../../contexts/LanguageContext";

const HomeCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute top-10 left-10 text-[12rem] leading-none opacity-[0.03] font-serif select-none">
        ♛
      </div>
      <div className="absolute bottom-10 right-10 text-[12rem] leading-none opacity-[0.03] font-serif select-none">
        ♞
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            {t.homeCta.heading}
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">
            {t.homeCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} /> {t.homeCta.contactMe}
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-primary-foreground/20 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              {t.homeCta.viewServices}
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default HomeCTA;
