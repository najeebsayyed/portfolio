import { FaArrowUp, FaGithub, FaLinkedinIn, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import Container from "../ui/Container";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Terminal", href: "#terminal" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/najeebsayyed",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/in/najeebsayyed",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/najeebsayyed_",
    label: "Twitter X",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:najeebsayyed777@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-slate-950/90 text-text">
      <Container>
        <div className="py-12 sm:py-14">
          {/* Top Row */}
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Brand Logo */}
            <div className="text-center lg:text-left">
              <button
                onClick={scrollToTop}
                className="group flex flex-col items-center justify-center lg:items-start transition-opacity hover:opacity-90"
              >
                <h3 className="text-xl font-bold text-text flex items-center gap-2">
                  <span className="text-primary font-mono">&lt;/&gt;</span> Najeeb Sayyed
                </h3>
                <p className="mt-1 text-xs text-muted">AI & Full-Stack Developer &bull; GetCollab Intern</p>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-muted transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary active:scale-95 shadow-md"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-border/60" />

          {/* Bottom Row */}
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Najeeb Sayyed. Crafted with React 19, TypeScript, Framer Motion & Tailwind CSS.
            </p>

            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary active:scale-95 shadow-md"
              aria-label="Back to top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
