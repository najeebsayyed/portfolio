import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWandMagicSparkles,
  FaTerminal,
} from "react-icons/fa6";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import profilePic from "../../assets/images/Profile_Pic_gpt.png";
import resume from "../../assets/resume/Najeeb-Sayyed_Resume.pdf";

const roles = [
  "AI & Full-Stack Developer",
  "Generative AI Architect",
  "React & TypeScript Engineer",
  "Node.js & Supabase Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <Section id="hero" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-10 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] sm:blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-secondary/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 backdrop-blur-md px-4 py-2 text-xs font-semibold text-muted sm:text-sm shadow-md">
              <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse" />
              <span>Available for AI & Full-Stack Developer roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-text sm:text-5xl lg:text-6xl tracking-tight">
              Hi, I'm <span className="text-primary">Najeeb</span>
              <br />
              <div className="mt-1 min-h-[2.4em] sm:min-h-[1.3em] flex flex-wrap items-center">
                <span className="bg-gradient-to-r from-primary via-secondary to-purple-400 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="text-primary font-mono font-normal animate-pulse ml-0.5">|</span>
              </div>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
              I build fast, scalable, production-ready web and mobile products by combining modern React & TypeScript full-stack architectures with cutting-edge Generative AI integrations.
            </p>

            {/* Quick Metrics Badge */}
            <div className="mt-6 flex flex-wrap items-center gap-6 border-y border-border/60 py-4">
              <div>
                <span className="text-2xl font-bold text-text">Full-Stack</span>
                <p className="text-xs text-muted">Web & Mobile Apps</p>
              </div>
              <div className="h-8 w-px bg-border/80" />
              <div>
                <span className="text-2xl font-bold text-primary">Gemini & LLMs</span>
                <p className="text-xs text-muted">AI Integration</p>
              </div>
              <div className="h-8 w-px bg-border/80" />
              <div>
                <span className="text-2xl font-bold text-amber-400">GetCollab</span>
                <p className="text-xs text-muted">Software Developer Intern</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto gap-2 shadow-lg shadow-primary/30 py-3.5">
                  View Full-Stack Projects
                  <FaArrowRight size={14} />
                </Button>
              </a>

              <a href="#terminal" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto gap-2 border border-border bg-surface text-text hover:bg-surface-hover hover:border-primary/50 py-3.5">
                  <FaTerminal size={14} className="text-secondary" />
                  Interactive AI Terminal
                </Button>
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto gap-2 border border-border bg-surface text-text hover:bg-surface-hover hover:border-primary/50 py-3.5">
                  <FaDownload size={14} />
                  Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3 sm:gap-4">
              <a
                href="https://linkedin.com/in/najeebsayyed"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-border bg-surface text-muted transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary active:scale-95 shadow-md"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://github.com/najeebsayyed"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-border bg-surface text-muted transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary active:scale-95 shadow-md"
              >
                <FaGithub size={19} />
              </a>
              <a
                href="https://x.com/najeebsayyed_"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter X"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-border bg-surface text-muted transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary active:scale-95 shadow-md"
              >
                <FaXTwitter size={19} />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary via-secondary to-purple-500 opacity-30 blur-2xl animate-pulse" />

              {/* Avatar Image */}
              <img
                src={profilePic}
                alt="Najeeb Sayyed - AI & Full-Stack Developer"
                className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-[390px] lg:w-[390px] rounded-full border-4 border-border/80 object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Floating Status Card */}
              <div className="absolute -bottom-4 left-1/2 flex w-[240px] sm:w-72 -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-slate-950/95 px-4 sm:px-5 py-3.5 shadow-2xl backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <FaWandMagicSparkles size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-text truncate">AI & Full-Stack Developer</p>
                  <p className="text-[11px] text-muted truncate">GetCollab Intern &bull; Open for Hire</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
