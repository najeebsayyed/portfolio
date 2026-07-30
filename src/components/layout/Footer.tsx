import { FaArrowUp, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import Container from "../ui/Container";

const links = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
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
    icon: <FaEnvelope />,
    href: "mailto:najeebsayyed@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-14">
          {/* Top */}

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Logo */}

            <div className="text-center lg:text-left">
              <button
                onClick={scrollToTop}
                className="group flex items-center justify-center gap-3 lg:justify-start"
              >
                <div>
                  <h3 className="text-xl font-bold text-text">Najeeb Sayyed</h3>

                  <p className="text-sm text-muted">AI Developer</p>
                </div>
              </button>
            </div>

            {/* Navigation */}

            <nav className="flex flex-wrap items-center justify-center gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social */}

            <div className="flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}

          <div className="my-10 h-px bg-border" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Najeeb Sayyed. Crafted with React,
              TypeScript & Tailwind CSS.
            </p>

            <button
              onClick={scrollToTop}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
