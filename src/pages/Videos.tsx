import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const VIDEO_IDS = ["tPgi2gEP75I", "Fq5MD2a96ZI", "peHiblQQXeY", "Fgc79pQzAgA"];

const Videos = () => {
  const { t } = useLanguage();
  const { videos } = t;
  const videoItems = videos.items.map((item, i) => ({ ...item, id: VIDEO_IDS[i] }));

  return (
    <>
      <PageHero title={videos.pageTitle} subtitle={videos.pageSubtitle} />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {videoItems.map((video, i) => (
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
            <h2 className="font-serif text-3xl font-bold mb-4">{videos.ctaTitle}</h2>
            <p className="text-primary-foreground/60 text-lg mb-8">{videos.ctaText}</p>
            <a
              href="https://www.youtube.com/@olalachess"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {videos.visitYoutube}
            </a>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Videos;
