import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/gm-kogan-about.jpg"
                  alt="GM Arthur Kogan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-foreground text-primary-foreground rounded-2xl p-6">
                <p className="font-serif font-bold text-2xl">40+</p>
                <p className="text-primary-foreground/60 text-sm">{t.aboutPreview.yearsLabel}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                {t.aboutPreview.label}
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-3 mb-8">
                {t.aboutPreview.title}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>{t.aboutPreview.p1}</p>
                <p>{t.aboutPreview.p2}</p>
                <p>{t.aboutPreview.p3}</p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all"
              >
                {t.aboutPreview.fullBio} <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
