import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import profilePic from "../../assets/images/Profile_Pic.jpg";
import resume from "../../assets/resume/Najeeb-Sayyed_Resume.pdf";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-28 lg:min-h-screen lg:pt-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
              Available for opportunities
            </div>

            <h1 className="mt-4 text-5xl font-bold leading-tight text-text sm:text-5xl lg:text-5xl">
              Hi, I'm <span className="text-primary">Najeeb</span>
              <br />
              AI & Full Stack Developer
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              I build fast, scalable and modern web, mobile and AI applications
              using React, React Native, TypeScript, Node.js and Generative AI.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-1 lg:gap-4">
              <Button className="gap-2">
                View Projects
                <FaArrowRight size={14} />
              </Button>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 border border-border bg-surface text-text hover:bg-surface-hover">
                  <FaDownload size={15} />
                  Resume
                </Button>
              </a>
            </div>

            {/* Social */}

            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/najeebsayyed"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:bg-surface-hover"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://github.com/najeebsayyed"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:bg-surface-hover"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/najeebsayyed_"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:bg-surface-hover"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

              {/* Image */}

              <img
                src={profilePic}
                alt="Najeeb"
                className="relative h-72 w-72 rounded-full border-4 border-border object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]"
              />

              {/* Floating Card */}

              <div className="absolute -bottom-5 left-1/2 flex w-64 -translate-x-1/2 items-center justify-center rounded-2xl border border-border bg-surface px-6 py-4 shadow-xl backdrop-blur">
                <p className="text-center font-semibold text-text">
                  Building AI Products 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
