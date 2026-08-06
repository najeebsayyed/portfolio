import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaArrowUp, FaTerminal } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import { NAV_LINKS } from "../../constants/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";
import CommandPalette from "../ui/CommandPalette";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  // Framer Motion Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 350);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setMobileOpen(false);
        setCmdOpen(false);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Scroll Reading Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-purple-500 origin-left z-[100] shadow-[0_0_12px_rgba(59,130,246,0.8)]"
      />

      <header className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300">
        <Container>
          <div
            className={`flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-300 ${
              scrolled
                ? "border-slate-800/80 bg-slate-950/85 shadow-2xl backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-90 transition-opacity"
            >
              <span className="text-primary font-mono font-bold">&lt;/&gt;</span>
              <span className="text-white">Najeeb</span>
            </a>

            {/* Desktop Navigation Links */}
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

            {/* Right Command Palette Trigger & Social Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Cmd + K Button */}
              <button
                onClick={() => setCmdOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 hover:border-primary hover:text-white transition shadow-sm"
                title="Open Command Palette (Cmd + K)"
              >
                <FaTerminal size={12} className="text-primary" />
                <span className="font-mono text-[11px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">⌘K</span>
              </button>

              <a
                href="https://linkedin.com/in/najeebsayyed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl p-2 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
              >
                <FaLinkedin size={19} />
              </a>
              <a
                href="https://github.com/najeebsayyed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl p-2 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
              >
                <FaGithub size={19} />
              </a>
              <a
                href="https://x.com/najeebsayyed_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="rounded-xl p-2 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
              >
                <FaXTwitter size={19} />
              </a>
              <a href="#contact">
                <Button onClick={() => setMobileOpen(false)}>Connect</Button>
              </a>
            </div>

            {/* Mobile Hamburger Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setCmdOpen(true)}
                className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-primary"
              >
                ⌘K
              </button>
              <button
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="text-slate-300 transition hover:text-white p-2"
              >
                {mobileOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[300px] bg-slate-950 border-l border-slate-800 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              scrollToTop();
            }}
            className="text-lg font-bold text-text transition-colors hover:text-primary"
          >
            Najeeb Sayyed
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

          <div className="mt-6 flex items-center justify-around border-t border-slate-800 pt-6">
            <a
              href="https://linkedin.com/in/najeebsayyed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-primary p-2"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/najeebsayyed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-primary p-2"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://x.com/najeebsayyed_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-primary p-2"
            >
              <FaXTwitter size={22} />
            </a>
          </div>

          <a href="#contact">
            <Button
              onClick={() => setMobileOpen(false)}
              className="mt-8 w-full justify-center"
            >
              Connect
            </Button>
          </a>
        </nav>
      </aside>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/90 text-primary shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
          aria-label="Back to Top"
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </>
  );
}
