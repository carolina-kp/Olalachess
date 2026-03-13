import { Globe, Users, Star, Award } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";

const teams = [
  { icon: Globe, title: "Italian Olympic Men's Team", description: "Head coach for the Italian men's team at Chess Olympiads, bringing strategic depth and preparation at the highest level." },
  { icon: Globe, title: "Italian Women's Team", description: "Coaching and preparing the Italian women's team for international competitions with tailored strategies." },
  { icon: Users, title: "Dutch National Women's Team", description: "Working with the Dutch national women's team on opening preparation, middlegame strategy, and competitive mindset." },
  { icon: Star, title: "Top Player Training", description: "Personal coaching for top-rated players seeking to break through to the next level of competitive chess." },
];

const students = [
  { name: "Alberto David", achievement: "Grandmaster, multiple Italian champion" },
  { name: "Marina Brunello", achievement: "Woman Grandmaster, Italian champion" },
  { name: "Sabrina Vega", achievement: "Woman Grandmaster, Spanish champion" },
  { name: "Olga Zimina", achievement: "International Master, top Russian player" },
  { name: "Various Italian team members", achievement: "Serie A competitors" },
  { name: "Multiple FM/IM title holders", achievement: "Achieved titles during coaching period" },
  { name: "Junior players", achievement: "National championship medalists" },
  { name: "Adult improvers", achievement: "Gained 200+ rating points" },
  { name: "Online students worldwide", achievement: "Active OlalaChess community members" },
];

const Training = () => (
  <>
    <PageHero title="Training" subtitle="Team coaching and player development" />

    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Team Work</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, i) => (
            <SectionReveal key={team.title} delay={i * 0.1}>
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
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Notable Students</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, i) => (
            <SectionReveal key={student.name} delay={i * 0.05}>
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
            "The most rewarding part of coaching is seeing a student's eyes light up when
            they understand a concept for the first time. That moment of discovery — that's
            what chess is all about."
          </p>
          <p className="mt-6 text-primary-foreground/40">— GM Arthur Kogan</p>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Training;
