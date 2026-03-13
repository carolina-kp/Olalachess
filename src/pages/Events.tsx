import { Calendar, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";

const events = [
  {
    title: "La Profilaxis",
    date: "January – March 2022",
    format: "8 sessions, 90 min each",
    description: "A deep dive into prophylactic thinking — one of the most important concepts in chess strategy.",
    topics: ["Understanding prophylaxis", "Karpov's prophylactic method", "Practical exercises", "Applying to your own games"],
  },
  {
    title: "Estrategia y Estructuras",
    date: "March – April 2021",
    format: "6 sessions, 90 min each",
    description: "Mastering pawn structures and strategic planning in the middlegame.",
    topics: ["Isolated queen's pawn", "Hanging pawns", "Carlsbad structure", "French structure", "Strategic planning"],
  },
  {
    title: "Finales y Cálculo",
    date: "January 2021",
    format: "4 sessions, 90 min each",
    description: "Endgame technique combined with calculation training for practical improvement.",
    topics: ["Rook endgames", "Minor piece endgames", "Calculation methods", "Practical exercises"],
  },
  {
    title: "Online OlalaCamp",
    date: "August 2020",
    format: "5 days intensive",
    description: "An intensive online chess camp covering all phases of the game with daily sessions and homework.",
    topics: ["Opening preparation", "Middlegame strategy", "Endgame technique", "Practical play", "Game analysis"],
  },
];

const Events = () => (
  <>
    <PageHero title="Events" subtitle="Courses, camps, and workshops" />

    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
            <p className="text-muted-foreground">
              Contact me or join the{" "}
              <a
                href="https://www.facebook.com/groups/olalachess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Facebook group
              </a>{" "}
              for upcoming event announcements.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="font-serif text-3xl font-bold mb-12">Past Events</h2>
        </SectionReveal>

        <div className="space-y-8">
          {events.map((event, i) => (
            <SectionReveal key={event.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <h3 className="font-serif text-2xl font-bold mb-4">{event.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary" /> {event.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} className="text-primary" /> {event.format}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="space-y-1">
                  {event.topics.map((topic) => (
                    <p key={topic} className="text-muted-foreground text-sm">• {topic}</p>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Events;
