import { FaCode, FaMobileAlt, FaRobot } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiFastify,
  SiSupabase,
  SiOpenaigym,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import Container from "../ui/Container";
import Section from "../ui/Section";

const features = [
  {
    number: "01",
    icon: <FaCode size={22} />,
    title: "Web Development",
    description:
      "Fast, responsive and scalable web applications built with React, TypeScript and modern technologies.",
  },
  {
    number: "02",
    icon: <FaMobileAlt size={22} />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences using React Native with clean UI and native performance.",
  },
  {
    number: "03",
    icon: <FaRobot size={22} />,
    title: "AI Products",
    description:
      "AI-powered applications using LLMs, automation and modern APIs to solve real-world problems.",
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} />,
    category: "Language",
  },
  {
    name: "React JS",
    icon: <SiReact size={32} />,
    category: "Frontend",
  },

  {
    name: "React Native",
    icon: <TbBrandReactNative size={32} />,
    category: "Mobile",
  },

  {
    name: "Fastify",
    icon: <SiFastify size={32} />,
    category: "Backend",
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={32} />,
    category: "Backend",
  },

  {
    name: "OpenAI & Gemini",
    icon: <SiOpenaigym size={32} />,
    category: "AI",
  },
];
export default function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-primary">
            About Me
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-text md:text-6xl">
            Building products that are
            <span className="text-primary"> fast,</span>
            <span className="text-primary"> scalable</span> and
            <span className="text-primary"> beautiful.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            I love building software that solves real problems. From modern
            websites to mobile apps and AI-powered products, I focus on creating
            experiences that are simple, performant and enjoyable to use.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-border bg-surface p-8 transition duration-300 hover:-translate-y-2 hover:border-primary"
            >
              <span className="text-5xl font-bold text-primary/20">
                {item.number}
              </span>

              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-text">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}

        {/* Technologies */}

        <div className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-primary">
              Tech Stack
            </span>

            <h3 className="mt-6 text-4xl font-bold text-text md:text-5xl">
              Technologies I Love Working With
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Modern technologies that help me build fast, scalable, beautiful
              and AI-powered digital experiences.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-border
          bg-surface
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-primary
          hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]
        "
              >
                {/* Background Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {tech.icon}
                  </div>

                  <h4 className="mt-5 text-lg font-semibold text-text">
                    {tech.name}
                  </h4>

                  <p className="mt-2 text-sm text-muted">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
