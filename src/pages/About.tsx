import { MapPin, Calendar, Award, Star, Trophy, Heart } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";

const infoCards = [
  { icon: MapPin, label: "Born", value: "Chernivtsi, Ukraine / Tarragona, Spain" },
  { icon: Calendar, label: "Born", value: "January 29, 1974" },
  { icon: Award, label: "Title", value: "GM title 1998" },
  { icon: Star, label: "Peak Rating", value: "2592" },
];

const gmNorms = [
  "GM norm at Dos Hermanas, 1997",
  "GM norm at Madrid Open, 1998",
  "GM norm at Elgoibar, 1998",
];

const results = [
  "1st Catalonia Team Championship (multiple)",
  "1st Israeli Championship U20, 1992",
  "1st Dos Hermanas Open, 1997",
  "Represented Israel in Chess Olympiads",
  "1st Elgoibar International, 1998",
  "Top board Italian Serie A",
  "Coach Italian Olympic Team",
  "Coach Dutch National Women's Team",
  "1st Barbera del Valles Open",
  "1st Mondariz Open",
  "1st Montcada Open",
  "Victories over multiple 2600+ GMs",
];

const About = () => (
  <>
    <PageHero title="About" subtitle="The story behind OlalaChess" />

    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main bio */}
          <div className="lg:col-span-2">
            <SectionReveal>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Arthur Kogan is an Israeli-born chess Grandmaster who has dedicated his life to the
                  royal game. Born in Chernivtsi, Ukraine, in 1974, he learned chess at a young age
                  and quickly showed exceptional talent, becoming one of the strongest young players
                  in Israel.
                </p>
                <p>
                  Throughout his career, Arthur has competed at the highest levels of international
                  chess, representing Israel in multiple Chess Olympiads and winning numerous
                  international tournaments. His peak FIDE rating of 2592 places him among the
                  strongest players to have emerged from Israel.
                </p>
                <p>
                  Beyond his playing career, Arthur is passionate about teaching and sharing his
                  knowledge. He has coached national teams, including the Italian Olympic team and
                  the Dutch National Women's team, and works with players of all levels through
                  his OlalaChess platform.
                </p>

                <h3 className="font-serif text-2xl font-bold text-foreground pt-4">Chess Style</h3>
                <p>
                  Playing for harmony on the board is at the core of Arthur's style. He believes
                  that when all pieces coordinate beautifully, great results follow naturally.
                  His games often feature creative middlegame play and deep positional
                  understanding.
                </p>

                <h3 className="font-serif text-2xl font-bold text-foreground pt-4">Favorite Openings</h3>
                <p>
                  Sicilian Defense (especially the Sozin and Rossolimo variations), Ruy Lopez,
                  and various Anti-Sicilian systems. Arthur's opening repertoire reflects his
                  preference for rich, dynamic positions.
                </p>

                <h3 className="font-serif text-2xl font-bold text-foreground pt-4">Chess Heroes</h3>
                <p>
                  Alexander Alekhine, Bobby Fischer, Vasily Smyslov, Mikhail Tal, and Garry
                  Kasparov — a blend of creative geniuses and strategic titans who have inspired
                  Arthur's approach to the game.
                </p>

                <h3 className="font-serif text-2xl font-bold text-foreground pt-4">Grandmaster Title Journey</h3>
                <ul className="space-y-2">
                  {gmNorms.map((norm) => (
                    <li key={norm} className="flex items-start gap-2">
                      <Award className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>{norm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <SectionReveal>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/images/gm-kogan.jpg"
                  alt="GM Arthur Kogan"
                  className="w-full h-full object-cover"
                />
              </div>
            </SectionReveal>

            {infoCards.map((card, i) => (
              <SectionReveal key={card.value} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <card.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{card.label}</p>
                    <p className="font-medium">{card.value}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.4}>
              <div className="bg-foreground text-primary-foreground rounded-2xl p-6">
                <p className="font-serif italic text-primary-foreground/80">
                  "My job is my passion. I love chess and I love helping others discover the
                  beauty of this incredible game."
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Results */}
        <SectionReveal>
          <div className="mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8">Major Tournament Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((result) => (
                <div key={result} className="flex items-start gap-3 p-4 rounded-xl border border-border">
                  <Trophy className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Family note */}
        <SectionReveal>
          <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="flex items-start gap-4">
              <Heart className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-muted-foreground">
                Arthur lives in Tarragona, Spain, with his family. When not immersed in chess,
                he enjoys the Mediterranean lifestyle and spending time with his loved ones.
                His passion for teaching extends beyond the board — he believes in nurturing
                not just chess skills, but positive thinking and personal growth.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default About;
