import { Link } from "react-router-dom";
import { Mic, Search, Swords, BookOpen, Trophy, Users, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";

const services = [
  { icon: Mic, title: "Live Lectures", description: "Interactive online sessions covering openings, middlegame strategy, and endgame technique. Real-time Q&A and personalized guidance." },
  { icon: Search, title: "Game Analysis", description: "Deep analysis of your games to identify patterns, mistakes, and areas for improvement. Learn to think like a Grandmaster." },
  { icon: Swords, title: "Play Training", description: "Practical training games with guided feedback to sharpen your tactical and strategic skills in a supportive environment." },
  { icon: BookOpen, title: "Opening Courses", description: "Structured courses on key openings with comprehensive theory, practical examples, and model games for every level." },
  { icon: Trophy, title: "Annotated Games", description: "Study master games with detailed annotations revealing the thinking behind every move. Learn from the greatest players in history." },
  { icon: Users, title: "Student Features", description: "Highlighting student achievements and progress within the OlalaChess community. Celebrating growth and success together." },
];

const whyMe = [
  "Personal approach tailored to each student",
  "Fix weaknesses one by one with targeted exercises",
  "Teaching harmony and coordination on the board",
  "Russian chess school methods and traditions",
  "Classical game analysis with modern insights",
  "Passion for helping players at every level",
  "Collaborations with chess magazines and publications",
];

const Services = () => (
  <>
    <PageHero title="Services" subtitle="Everything you need to improve your chess" />

    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Why Choose Me
              </span>
              <h2 className="font-serif text-4xl font-bold mt-3 mb-6">
                A Grandmaster's Personal Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 40 years of chess experience and a deep passion for teaching,
                I bring a unique combination of high-level playing strength and genuine
                care for every student's progress.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              {whyMe.map((item) => (
                <div key={item} className="flex items-start gap-3">
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
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to start?</h2>
          <p className="text-primary-foreground/60 text-lg mb-8">
            Get in touch and let's discuss how I can help you reach your chess goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </Link>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Services;
