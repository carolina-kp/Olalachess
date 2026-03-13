import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const METHOD_ICONS: LucideIcon[] = [Mail, Phone, MapPin];
const METHOD_HREFS = [
  "mailto:koganart@hotmail.com",
  "https://wa.me/34635943271",
  null,
] as (string | null)[];

const SOCIAL_HREFS = [
  "https://www.facebook.com/groups/olalachess",
  "https://www.facebook.com/koganart",
  "https://en.wikipedia.org/wiki/Arthur_Kogan",
  "https://www.youtube.com/@olalachess",
];

const Contact = () => {
  const { t } = useLanguage();
  const { contact } = t;

  const methods = contact.methods.map((m, i) => ({
    ...m,
    icon: METHOD_ICONS[i],
    href: METHOD_HREFS[i],
  }));

  const socialLinks = contact.socialLinks.map((label, i) => ({
    label,
    href: SOCIAL_HREFS[i],
  }));

  return (
    <>
      <PageHero title={contact.pageTitle} subtitle={contact.pageSubtitle} />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionReveal>
                <h2 className="font-serif text-3xl font-bold mb-8">{contact.methodsTitle}</h2>
              </SectionReveal>
              <div className="space-y-6">
                {methods.map((method, i) => (
                  <SectionReveal key={i} delay={i * 0.1}>
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
                <h2 className="font-serif text-3xl font-bold mb-8">{contact.socialTitle}</h2>
              </SectionReveal>
              <div className="space-y-4">
                {socialLinks.map((link, i) => (
                  <SectionReveal key={i} delay={i * 0.1}>
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
                {contact.quote}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
