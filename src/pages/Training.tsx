import { Globe, Users, Star, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const TEAM_ICONS: LucideIcon[] = [Globe, Globe, Users, Star];

const Training = () => {
  const { t } = useLanguage();
  const { training } = t;
  const teams = training.teams.map((team, i) => ({ ...team, icon: TEAM_ICONS[i] }));

  return (
    <>
      <PageHero title={training.pageTitle} subtitle={training.pageSubtitle} />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">
              {training.teamWorkTitle}
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <team.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{team.title}</h3>
                  <p className="text-muted-foreground">{team.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">
              {training.notableStudentsTitle}
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {training.students.map((student, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-border bg-card h-full">
                  <div className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-muted-foreground text-sm">{student.achievement}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <p className="font-serif italic text-2xl text-primary-foreground/80 leading-relaxed">
              {training.quote}
            </p>
            <p className="mt-6 text-primary-foreground/40">{training.quoteAuthor}</p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Training;
