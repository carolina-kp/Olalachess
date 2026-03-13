import { useEffect } from "react";
import SectionReveal from "../SectionReveal";

declare global {
  interface Window {
    FB?: { XFBML: { parse: () => void } };
  }
}

const FacebookFeed = () => {
  useEffect(() => {
    const existingScript = document.getElementById("facebook-jssdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => window.FB?.XFBML.parse();
    } else {
      window.FB?.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Community
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-3">
              Join the OlalaChess Community
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectionReveal>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-serif text-xl font-bold mb-4">OlalaChess Group</h3>
              <div
                className="fb-group"
                data-href="https://www.facebook.com/groups/olalachess"
                data-width="500"
                data-show-metadata="false"
              />
              <a
                href="https://www.facebook.com/groups/olalachess"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Join Group
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-serif text-xl font-bold mb-4">Arthur Kogan</h3>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/koganart"
                data-width="500"
                data-hide-cover="false"
                data-show-facepile="true"
              />
              <a
                href="https://www.facebook.com/koganart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Follow Page
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;
