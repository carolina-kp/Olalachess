import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
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
              "Make all your pieces smile"
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Navigate</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/training", label: "Training" },
                { to: "/events", label: "Events" },
                { to: "/videos", label: "Videos" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
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
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Connect</h4>
            <div className="space-y-2">
              {[
                { href: "https://www.facebook.com/groups/olalachess", label: "Facebook Group" },
                { href: "https://www.facebook.com/koganart", label: "Facebook Page" },
                { href: "https://en.wikipedia.org/wiki/Arthur_Kogan", label: "Wikipedia" },
                { href: "mailto:koganart@hotmail.com", label: "Email" },
              ].map((link) => (
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
        © {new Date().getFullYear()} OlalaChess — GM Arthur Kogan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
