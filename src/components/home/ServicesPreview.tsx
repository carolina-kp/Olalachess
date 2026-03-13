import { Link } from "react-router-dom";
import { Mic, Search, Swords, BookOpen, Trophy, Users, ArrowRight } from "lucide-react";
import SectionReveal from "../SectionReveal";

const services = [
  { icon: Mic, title: "Live Lectures", description: "Interactive online sessions covering openings, middlegame strategy, and endgame technique." },
  { icon: Search, title: "Game Analysis", description: "Deep analysis of your games to identify patterns, mistakes, and areas for improvement." },
  { icon: Swords, title: "Play Training", description: "Practical training games with guided feedback to sharpen your tactical and strategic skills." },
  { icon: BookOpen, title: "Opening Courses", description: "Structured courses on key openings with comprehensive theory and practical examples." },
  { icon: Trophy, title: "Annotated Games", description: "Study master games with detailed annotations revealing the thinking behind every move." },
  { icon: Users, title: "Student Features", description: "Highlighting student achievements and progress within the OlalaChess community." },
];

const ServicesPreview = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Services
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-3">
            How I Can Help You
          </h2>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <SectionReveal key={service.title} delay={i * 0.1}>
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

      <SectionReveal delay={0.3}>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all services <ArrowRight size={18} />
          </Link>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default ServicesPreview;
