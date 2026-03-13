import SectionReveal from "../SectionReveal";

const videos = [
  { id: "tPgi2gEP75I", title: "Chess, Positive Thinking...", channel: "OlalaChess" },
  { id: "Fq5MD2a96ZI", title: "Think like a Machine", channel: "OlalaChess" },
  { id: "peHiblQQXeY", title: "Olalachess español", channel: "OlalaChess" },
  { id: "Fgc79pQzAgA", title: "Olalachess", channel: "OlalaChess" },
];

const VideoShowcase = () => (
  <section className="py-24 lg:py-32 bg-muted/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Videos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-3">
            Watch & Learn
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
                <p className="text-muted-foreground text-sm">{video.channel}</p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VideoShowcase;
