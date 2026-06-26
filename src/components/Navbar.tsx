import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import resumePdf from "../assets/resume/resume.pdf";

const navLinks = [
  //   { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
          {/* Logo */}
          <a href="#home" className="group">
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Najeeb
              <span className="text-emerald-400">.</span>
            </h1>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-emerald-400"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden lg:block">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "mt-3 max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#08111F]/95 p-5 backdrop-blur-xl">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 transition hover:text-emerald-400"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={resumePdf}
                className="mt-2 rounded-xl bg-emerald-400 px-4 py-3 text-center font-semibold text-slate-900"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
