import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPaperPlane,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeeborqy");

  return (
    <Section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <FaWandMagicSparkles className="text-secondary" /> Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl"
          >
            <span className="text-primary">Let's Build </span>
            Something Amazing
            <span className="text-primary"> Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-muted"
          >
            Whether you have a project idea, a job opportunity, or simply want to connect, I'd love to hear from you.
          </motion.p>
        </div>

        {/* Responsive Content Grid */}
        <div className="mt-14 sm:mt-20 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Cards */}
          <div className="space-y-4 sm:space-y-5">
            <a
              href="mailto:najeebsayyed777@gmail.com"
              className="flex items-center gap-4 rounded-3xl border border-border bg-surface p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary active:scale-[0.98]"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaEnvelope size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-muted">Email</p>
                <h4 className="truncate text-sm sm:text-base font-semibold text-text">
                  najeebsayyed777@gmail.com
                </h4>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/najeebsayyed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-border bg-surface p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary active:scale-[0.98]"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaLinkedinIn size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-muted">LinkedIn</p>
                <h4 className="text-sm sm:text-base font-semibold text-text">Najeeb Sayyed</h4>
              </div>
            </a>

          </div>

          {/* Contact Form Card */}
          <div className="rounded-[28px] sm:rounded-[32px] border border-border bg-surface p-5 sm:p-8 shadow-xl">
            {state.succeeded ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-3xl text-green-500">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-text">
                  Message Sent!
                </h3>

                <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-muted">
                  Thank you for reaching out. I've received your message and will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-medium text-muted">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Najeeb Sayyed"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base sm:text-sm text-text outline-none transition-colors focus:border-primary placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-medium text-muted">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="najeeb@example.com"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base sm:text-sm text-text outline-none transition-colors focus:border-primary placeholder:text-slate-600"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1.5 text-xs text-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-medium text-muted">
                    Project Brief
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3.5 text-base sm:text-sm text-text outline-none transition-colors focus:border-primary placeholder:text-slate-600"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1.5 text-xs text-red-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full justify-center gap-2 py-3.5 shadow-lg shadow-primary/20"
                >
                  <FaPaperPlane size={14} />
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
