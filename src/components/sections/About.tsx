import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaMobileAlt, FaRobot, FaServer } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiGoogle,
  SiRedux,
  SiExpo,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SpotlightCard from "../ui/SpotlightCard";
import { skillsList, skillCategories } from "../../data/skills";

const features = [
  {
    number: "01",
    icon: <FaMobileAlt size={22} />,
    title: "Full-Stack Development",
    description:
      "Engineering robust web and mobile applications from end to end with React, Node.js, and modern cloud technologies.",
  },
  {
    number: "02",
    icon: <FaRobot size={22} />,
    title: "AI-Powered Solutions",
    description:
      "Integrating Gemini & OpenAI APIs into scalable applications for intelligent features like smart search and content generation.",
  },
  {
    number: "03",
    icon: <FaCode size={22} />,
    title: "API Design & Integration",
    description:
      "Architecting scalable REST APIs, serverless backends, and robust database architectures using Supabase & Firebase.",
  },
];

const techIcons: Record<string, React.ReactNode> = {
  "JavaScript": <SiJavascript size={28} className="text-yellow-400" />,
  "TypeScript": <SiTypescript size={28} className="text-blue-400" />,
  "Python": <SiPython size={28} className="text-amber-300" />,
  "React JS": <SiReact size={28} className="text-cyan-400" />,
  "React Native": <TbBrandReactNative size={28} className="text-cyan-300" />,
  "Tailwind CSS": <SiTailwindcss size={28} className="text-teal-400" />,
  "Supabase": <SiSupabase size={28} className="text-emerald-400" />,
  "Firebase": <SiFirebase size={28} className="text-amber-500" />,
  "REST APIs": <FaServer size={26} className="text-indigo-400" />,
  "Gemini API": <SiGoogle size={26} className="text-purple-400" />,
  "OpenAI API": <FaRobot size={26} className="text-emerald-400" />,
  "Redux Toolkit": <SiRedux size={28} className="text-purple-500" />,
  "Expo": <SiExpo size={28} className="text-slate-100" />,
  "Git & GitHub": <SiGit size={28} className="text-orange-500" />,
  "VS Code": <VscVscode size={28} className="text-blue-500" />,
  "Figma": <SiFigma size={28} className="text-pink-400" />,
};

export default function About() {
  const [selectedCat, setSelectedCat] = useState("All");

  const displayedSkills = selectedCat === "All"
    ? skillsList
    : skillsList.filter((s) => s.category.toLowerCase().includes(selectedCat.toLowerCase()));

  return (
    <Section id="about" className="relative overflow-hidden py-20 lg:py-28">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <FaWandMagicSparkles className="text-secondary" /> Engineering Excellence
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl"
          >
            Building software that is{" "}
            <span className="text-primary">fast</span>,{" "}
            <span className="text-secondary">scalable</span>, and{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              intelligent.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-muted"
          >
            I specialize in building robust web and mobile applications, creating seamless user experiences and scalable backends.
          </motion.p>
        </div>

        {/* Feature Cards Grid (Spotlight Effect) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full">
                <span className="text-4xl sm:text-5xl font-extrabold text-primary/20">
                  {item.number}
                </span>

                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-text">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Arsenal Matrix */}
        <div className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Tech Arsenal
            </span>

            <h3 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
              Technologies & <span className="text-primary">Skills</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted">
              Primary tools and tech stack ordered by core expertise.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  selectedCat === cat
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Grid - Displayed in Exact User Order */}
          <div className="mx-auto mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 max-w-5xl">
            <AnimatePresence mode="popLayout">
              {displayedSkills.map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <SpotlightCard className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-900/90 text-primary border border-slate-800/80 shadow-inner">
                        {techIcons[tech.name]}
                      </div>

                      <h4 className="mt-3 text-sm font-semibold text-text truncate w-full">
                        {tech.name}
                      </h4>

                      <p className="mt-1 text-[11px] text-slate-500 truncate w-full">{tech.category}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
