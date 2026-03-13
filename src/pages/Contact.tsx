import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";

const contactMethods = [
  { icon: Mail, title: "Email", value: "koganart@hotmail.com", href: "mailto:koganart@hotmail.com" },
  { icon: Phone, title: "WhatsApp", value: "+34 635 943 271", href: "https://wa.me/34635943271" },
  { icon: MapPin, title: "Location", value: "Tarragona, Spain", href: null },
];

const socialLinks = [
  { label: "OlalaChess Facebook Group", href: "https://www.facebook.com/groups/olalachess" },
  { label: "Arthur Kogan Facebook", href: "https://www.facebook.com/koganart" },
  { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Arthur_Kogan" },
  { label: "Think Like a Machine YouTube", href: "https://www.youtube.com/@olalachess" },
];

const Contact = () => (
  <>
    <PageHero title="Contact" subtitle="Get in touch" />

    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionReveal>
              <h2 className="font-serif text-3xl font-bold mb-8">Contact Methods</h2>
            </SectionReveal>
            <div className="space-y-6">
              {contactMethods.map((method, i) => (
                <SectionReveal key={method.title} delay={i * 0.1}>
                  {method.href ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <method.icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold">{method.title}</h3>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-6 rounded-2xl border border-border">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <method.icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold">{method.title}</h3>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                  )}
                </SectionReveal>
              ))}
            </div>
          </div>

          <div>
            <SectionReveal>
              <h2 className="font-serif text-3xl font-bold mb-8">Social Links</h2>
            </SectionReveal>
            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <SectionReveal key={link.label} delay={i * 0.1}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ExternalLink className="text-muted-foreground" size={18} />
                  </a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>

        <SectionReveal>
          <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
            <p className="font-serif italic text-muted-foreground text-lg">
              "I usually have a very busy schedule, but I always try to find time for
              passionate chess players who want to improve. Don't hesitate to reach out!"
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Contact;
