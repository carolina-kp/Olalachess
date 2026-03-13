import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "../SectionReveal";

const AboutPreview = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <SectionReveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/gm-kogan-about.jpg"
                alt="GM Arthur Kogan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-foreground text-primary-foreground rounded-2xl p-6">
              <p className="font-serif font-bold text-2xl">40+</p>
              <p className="text-primary-foreground/60 text-sm">Years of Chess</p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-3 mb-8">
              GM Arthur Kogan
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Arthur Kogan is a chess Grandmaster, born in Chernivtsi, Ukraine, and currently
                based in Tarragona, Spain. With over four decades of chess experience, he has
                developed a unique teaching philosophy centered around positive thinking and
                harmony on the board.
              </p>
              <p>
                His approach combines the best traditions of the Russian chess school with modern
                training techniques, helping players of all levels unlock their true potential.
              </p>
              <p>
                Arthur has coached national teams, top-rated players, and passionate amateurs
                alike, always bringing the same enthusiasm and dedication to every session.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all"
            >
              Full Chess Bio <ArrowRight size={18} />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default AboutPreview;
