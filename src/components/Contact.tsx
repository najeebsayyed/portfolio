import { useForm, ValidationError } from "@formspree/react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeeborqy");
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Have a project idea or want to discuss an opportunity? Feel free to
            reach out.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[350px_1fr]">
          {/* Left Side */}
          <div className="space-y-5">
            {/* Email */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-400/50">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400">
                  <FiMail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <p className="text-sm text-gray-400">
                    najeebsayyed777@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-400/50">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400">
                  <FiPhone size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>

                  <p className="text-sm text-gray-400">+91 77740 86280</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-400/50">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400">
                  <FiMapPin size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>

                  <p className="text-sm text-gray-400">
                    Aurangabad, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            {state.succeeded ? (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold text-emerald-400">
                  Message Sent!
                </h3>
                <p className="text-slate-300">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="rounded-xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none transition focus:border-emerald-400"
                  />{" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="rounded-xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none transition focus:border-emerald-400"
                  />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none transition focus:border-emerald-400"
                />
                <textarea
                  rows={7}
                  name="message"
                  placeholder="Your Message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none transition focus:border-emerald-400"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex items-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <FiSend />
                </button>
              </form>
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
