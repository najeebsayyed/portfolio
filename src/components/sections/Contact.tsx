import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-primary">
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-text md:text-5xl">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Whether you have a project, an opportunity, or simply want to
            connect, I'd love to hear from you.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}

          <div className="space-y-5">
            <a
              href="mailto:najeebsayyed777@gmail.com"
              className="flex items-center gap-5 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaEnvelope size={22} />
              </div>

              <div>
                <p className="text-sm text-muted">Email</p>

                <h4 className="font-semibold text-text">
                  najeebsayyed@gmail.com
                </h4>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/najeebsayyed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaLinkedinIn size={22} />
              </div>

              <div>
                <p className="text-sm text-muted">LinkedIn</p>

                <h4 className="font-semibold text-text">Connect with me</h4>
              </div>
            </a>

            <a
              href="https://github.com/najeebsayyed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaGithub size={22} />
              </div>

              <div>
                <p className="text-sm text-muted">GitHub</p>

                <h4 className="font-semibold text-text">
                  View my repositories
                </h4>
              </div>
            </a>
          </div>

          {/* Form */}

          <div className="rounded-[32px] border border-border bg-surface p-8">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-muted">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-text outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-muted">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-text outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-muted">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-text outline-none transition focus:border-primary"
                />
              </div>

              <Button className="w-full justify-center gap-2">
                <FaPaperPlane />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
