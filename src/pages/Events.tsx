import { Calendar, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();
  const { events } = t;

  return (
    <>
      <PageHero title={events.pageTitle} subtitle={events.pageSubtitle} />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-muted-foreground">
                {events.noticeBefore}{" "}
                <a
                  href="https://www.facebook.com/groups/olalachess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {events.noticeLinkText}
                </a>{" "}
                {events.noticeAfter}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-serif text-3xl font-bold mb-12">{events.pastEventsTitle}</h2>
          </SectionReveal>

          <div className="space-y-8">
            {events.items.map((event, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
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
};

export default Events;
