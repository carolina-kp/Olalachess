import { MapPin, Calendar, Award, Star, Trophy, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const INFO_ICONS: LucideIcon[] = [MapPin, Calendar, Award, Star];

const About = () => {
  const { t } = useLanguage();
  const { about } = t;

  const infoCards = about.infoCards.map((card, i) => ({ ...card, icon: INFO_ICONS[i] }));

  return (
    <>
      <PageHero title={about.pageTitle} subtitle={about.pageSubtitle} />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main bio */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <p>{about.p1}</p>
                  <p>{about.p2}</p>
                  <p>{about.p3}</p>

                  <h3 className="font-serif text-2xl font-bold text-foreground pt-4">
                    {about.chessStyleTitle}
                  </h3>
                  <p>{about.chessStyleText}</p>

                  <h3 className="font-serif text-2xl font-bold text-foreground pt-4">
                    {about.favoriteOpeningsTitle}
                  </h3>
                  <p>{about.favoriteOpeningsText}</p>

                  <h3 className="font-serif text-2xl font-bold text-foreground pt-4">
                    {about.chessHeroesTitle}
                  </h3>
                  <p>{about.chessHeroesText}</p>

                  <h3 className="font-serif text-2xl font-bold text-foreground pt-4">
                    {about.gmTitleTitle}
                  </h3>
                  <ul className="space-y-2">
                    {about.gmNorms.map((norm) => (
                      <li key={norm} className="flex items-start gap-2">
                        <Award className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>{norm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <SectionReveal>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/gm-kogan.jpg"
                    alt="GM Arthur Kogan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SectionReveal>

              {infoCards.map((card, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <card.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{card.label}</p>
                      <p className="font-medium">{card.value}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}

              <SectionReveal delay={0.4}>
                <div className="bg-foreground text-primary-foreground rounded-2xl p-6">
                  <p className="font-serif italic text-primary-foreground/80">
                    {about.quote}
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>

          {/* Results */}
          <SectionReveal>
            <div className="mt-24">
              <h2 className="font-serif text-3xl font-bold mb-8">{about.majorResultsTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {about.results.map((result) => (
                  <div key={result} className="flex items-start gap-3 p-4 rounded-xl border border-border">
                    <Trophy className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Family note */}
          <SectionReveal>
            <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-4">
                <Heart className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">{about.familyText}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default About;
