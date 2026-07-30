import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm("xeeborqy");

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm text-primary">
            Contact
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-text md:text-6xl">
            <span className="text-primary">Let's Build </span>
            Something Amazing
            <span className="text-primary"> Together.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Whether you have a project, an opportunity, or simply want to
            connect, I'd love to hear from you.
          </p>
        </div>

        {/* Content */}

        <div className="mt-20 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Info */}

          <div className="space-y-5">
            <a
              href="mailto:najeebsayyed@gmail.com"
              className="flex items-center gap-4 rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaEnvelope size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted">Email</p>

                <h4 className="break-all font-semibold text-text">
                  najeebsayyed@gmail.com
                </h4>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/najeebsayyed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaLinkedinIn size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted">LinkedIn</p>

                <h4 className="font-semibold text-text">Connect with me</h4>
              </div>
            </a>

            <a
              href="https://github.com/najeebsayyed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaGithub size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted">GitHub</p>

                <h4 className="font-semibold text-text">
                  View my repositories
                </h4>
              </div>
            </a>
          </div>

          {/* Form */}

          <div className="rounded-[32px] border border-border bg-surface p-5 sm:p-8">
            {state.succeeded ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-4xl text-green-500">
                  ✓
                </div>

                <h3 className="mt-6 text-3xl font-bold text-text">
                  Message Sent!
                </h3>

                <p className="mt-4 max-w-md leading-7 text-muted">
                  Thank you for reaching out. I've received your message and
                  will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-4 text-text outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-muted">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-4 text-text outline-none transition-colors focus:border-primary"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-muted">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-4 text-text outline-none transition-colors focus:border-primary"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full justify-center gap-2"
                >
                  <FaPaperPlane />

                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
