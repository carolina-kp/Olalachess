import { Link } from "react-router-dom";
import { Mic, Search, Swords, BookOpen, Trophy, Users, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const SERVICE_ICONS: LucideIcon[] = [Mic, Search, Swords, BookOpen, Trophy, Users];

const Services = () => {
  const { t } = useLanguage();
  const { services } = t;
  const serviceItems = services.items.map((item, i) => ({ ...item, icon: SERVICE_ICONS[i] }));

  return (
    <>
      <PageHero title={services.pageTitle} subtitle={services.pageSubtitle} />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  {services.whyLabel}
                </span>
                <h2 className="font-serif text-4xl font-bold mt-3 mb-6">
                  {services.whyTitle}
                </h2>
                <p className="text-muted-foreground text-lg">{services.whyText}</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-4">
                {services.whyList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-serif text-4xl font-bold mb-6">{services.ctaTitle}</h2>
            <p className="text-primary-foreground/60 text-lg mb-8">{services.ctaText}</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {services.contactMe}
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Services;
