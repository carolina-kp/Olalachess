import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";

const videos = [
  {
    id: "tPgi2gEP75I",
    title: "Chess, Positive Thinking...",
    description: "An introduction to the OlalaChess philosophy — how positive thinking transforms your chess and your approach to the game.",
  },
  {
    id: "Fq5MD2a96ZI",
    title: "Think like a Machine",
    description: "Learn how to calculate like a computer while maintaining the human creativity that makes chess beautiful.",
  },
  {
    id: "peHiblQQXeY",
    title: "Olalachess español",
    description: "OlalaChess content for Spanish-speaking chess enthusiasts. Enjoy lessons and analysis in español.",
  },
  {
    id: "Fgc79pQzAgA",
    title: "Olalachess",
    description: "Welcome to the world of OlalaChess — discover what makes this approach to chess unique and effective.",
  },
];

const Videos = () => (
  <>
    <PageHero title="Videos" subtitle="Learn through watching" />

    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {videos.map((video, i) => (
            <SectionReveal key={video.id} delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <h3 className="font-serif text-2xl font-bold mb-4">{video.title}</h3>
                  <p className="text-muted-foreground text-lg">{video.description}</p>
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
          <h2 className="font-serif text-3xl font-bold mb-4">Think Like a Machine</h2>
          <p className="text-primary-foreground/60 text-lg mb-8">
            Explore the full collection of OlalaChess videos on YouTube — lessons, game
            analysis, and chess philosophy from GM Arthur Kogan.
          </p>
          <a
            href="https://www.youtube.com/@olalachess"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Visit YouTube Channel
          </a>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Videos;
