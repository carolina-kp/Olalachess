import { Mail, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { useLanguage } from "../contexts/LanguageContext";

const SOCIAL_HREFS = [
  "https://www.facebook.com/groups/olalachess",
  "https://www.facebook.com/koganart",
  "https://en.wikipedia.org/wiki/Arthur_Kogan",
  "https://www.youtube.com/@olalachess",
];

const Contact = () => {
  const { t } = useLanguage();
  const { contact } = t;

  const socialLinks = contact.socialLinks.map((label, i) => ({
    label,
    href: SOCIAL_HREFS[i],
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:koganart@hotmail.com?subject=${subject}&body=${body}`;
  };

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

              <SectionReveal delay={0.1}>
                <a
                  href="mailto:koganart@hotmail.com"
                  className="flex items-center gap-4 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all mb-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <span className="font-medium">{contact.sendEmailBtn}</span>
                </a>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <a
                  href="https://wa.me/34635943271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl border border-green-500/40 bg-green-500/5 hover:border-green-500/60 hover:shadow-lg transition-all mb-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 text-2xl">
                    💬
                  </div>
                  <span className="font-medium text-green-600 dark:text-green-400">{contact.whatsappBtn}</span>
                </a>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <h2 className="font-serif text-3xl font-bold mb-6">{contact.formTitle}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    {contact.submitBtn}
                  </button>
                </form>
              </SectionReveal>
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
