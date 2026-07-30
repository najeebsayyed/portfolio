import { FaCode, FaMobileAlt, FaRobot } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFastify,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
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
    name: "React",
    icon: <SiReact size={30} />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} />,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={30} />,
    category: "Language",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={30} />,
    category: "Framework",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
    category: "Styling",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={30} />,
    category: "Mobile",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={30} />,
    category: "Backend",
  },
  {
    name: "Fastify",
    icon: <SiFastify size={30} />,
    category: "Backend",
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={30} />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={30} />,
    category: "Database",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={30} />,
    category: "Backend",
  },
  {
    name: "Git",
    icon: <SiGit size={30} />,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={30} />,
    category: "Tools",
  },
  {
    name: "OpenAI",
    icon: <SiOpenaigym size={30} />,
    category: "AI",
  },
  {
    name: "Gemini",
    icon: <div className="text-3xl font-bold">✦</div>,
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

        <div className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-primary">
              Technologies
            </span>

            <h3 className="mt-6 text-4xl font-bold text-text md:text-5xl">
              My Tech Stack
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              I enjoy working with modern technologies to build fast, scalable
              and beautiful digital products.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-border
          bg-surface
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-primary
        "
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-primary transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>

                  <h4 className="mt-6 text-lg font-semibold text-text">
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
