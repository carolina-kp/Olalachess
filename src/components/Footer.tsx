import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/training", label: t.nav.training },
    { to: "/events", label: t.nav.events },
    { to: "/videos", label: t.nav.videos },
    { to: "/contact", label: t.nav.contact },
  ];

  const connectLinks = [
    { href: "https://www.facebook.com/groups/olalachess", label: t.footer.facebookGroup },
    { href: "https://www.facebook.com/koganart", label: t.footer.facebookPage },
    { href: "https://en.wikipedia.org/wiki/Arthur_Kogan", label: t.footer.wikipedia },
    { href: "mailto:koganart@hotmail.com", label: t.footer.email },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">♞</span>
              <span className="font-serif font-bold text-lg tracking-wider text-primary-foreground">
                OLALACHESS
              </span>
            </div>
            <p className="font-serif italic text-primary-foreground/50">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">
              {t.footer.navigate}
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">
              {t.footer.connect}
            </h4>
            <div className="space-y-2">
              {connectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-primary-foreground/30 text-sm">
        {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
      </div>
    </footer>
  );
};

export default Footer;
