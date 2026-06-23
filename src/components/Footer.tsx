import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050D18]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Najeeb
              <span className="text-emerald-400">.</span>
            </h2>

            <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
              Mobile App Developer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3">
              <a
                href="#home"
                className="text-gray-400 transition hover:text-emerald-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 transition hover:text-emerald-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 transition hover:text-emerald-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-400 transition hover:text-emerald-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-gray-400 transition hover:text-emerald-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Connect With Me</h3>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/najeebsayyed"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <FiLinkedin size={22} />
              </a>
              <a
                href="https://github.com/najeebsayyed"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <FiGithub size={22} />
              </a>

              <a
                href="https://twitter.com/najeebsayyed_"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <FiTwitter size={22} />
              </a>
              <a
                href="mailto:najeebsayyed777@gmail.com"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <FiMail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} Najeeb Sayyed. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Back to Top
            <FiArrowUp
              size={16}
              className="transition group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
