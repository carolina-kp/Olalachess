import { Sparkles, Heart, Target, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { useLanguage } from "../../contexts/LanguageContext";

const PILLAR_ICONS: LucideIcon[] = [Sparkles, Heart, Target, Lightbulb];

const Philosophy = () => {
  const { t } = useLanguage();
  const pillars = t.philosophy.pillars.map((p, i) => ({ ...p, icon: PILLAR_ICONS[i] }));

  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 8) + i % 8) % 2 === 0 ? "bg-primary-foreground" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold">
              {t.philosophy.heading}
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <pillar.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-primary-foreground/60">{pillar.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
