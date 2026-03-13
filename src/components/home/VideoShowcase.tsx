import SectionReveal from "../SectionReveal";
import { useLanguage } from "../../contexts/LanguageContext";

const VIDEO_IDS = ["tPgi2gEP75I", "Fq5MD2a96ZI", "peHiblQQXeY", "Fgc79pQzAgA"];

const VideoShowcase = () => {
  const { t } = useLanguage();
  const videos = t.videos.items.map((item, i) => ({ ...item, id: VIDEO_IDS[i] }));

  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              {t.videoShowcase.label}
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-3">
              {t.videoShowcase.heading}
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <SectionReveal key={video.id} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden bg-card border border-border">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold">{video.title}</h3>
                  <p className="text-muted-foreground text-sm">OlalaChess</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
