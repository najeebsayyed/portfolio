import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import { NAV_LINKS } from "../../constants/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50  py-4">
        <Container>
          <div
            className={`flex h-16 items-center justify-between rounded-2xl border px-2 transition-all duration-300 ${
              scrolled
                ? "border-slate-800/80 bg-slate-950/80 shadow-2xl backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}

            <a
              href="#hero"
              className="flex items-center gap-2 text-xl font-bold tracking-tight"
            >
              <span className="text-blue-500">&lt;/&gt;</span>

              <span className="text-white">Najeeb</span>
            </a>

            {/* Desktop */}

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right */}

            <div className="hidden items-center gap-5 lg:flex">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaXTwitter size={20} />
              </a>
              <a href="#contact">
                <Button onClick={() => setMobileOpen(false)}>Connect</Button>
              </a>
            </div>

            {/* Mobile */}

            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-slate-300 transition hover:text-white lg:hidden"
            >
              {mobileOpen ? (
                <HiOutlineX size={28} />
              ) : (
                <HiOutlineMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[300px] bg-slate-950 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);

              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="text-lg font-bold text-text transition-colors hover:text-primary"
          >
            Najeeb
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="text-muted transition-colors hover:text-text"
            aria-label="Close menu"
          >
            <HiOutlineX size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-6 flex gap-5">
            <a
              href="https://linkedin.com/in/najeebsayyed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/najeebsayyed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://x.com/najeebsayyed_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaXTwitter size={22} />
            </a>
          </div>
          <a href="#contact">
            <Button
              onClick={() => setMobileOpen(false)}
              className="mt-8 w-full"
            >
              Connect
            </Button>
          </a>
        </nav>
      </aside>
    </>
  );
}
