import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
} from "react-icons/fa6";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiSupabase,
  SiTailwindcss
} from "react-icons/si";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import profilePic from "../../assets/images/Profile_Pic_gpt.png";
import resume from "../../assets/resume/Najeeb-Sayyed_Resume.pdf";

export default function Hero() {
  return (
    <Section id="hero" className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[20%] top-[-10%] h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-secondary/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[40%] top-[40%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]"
        />
      </div>

      <Container>
        <div className="relative flex flex-col items-center text-center z-10">

          {/* Floating Avatar & Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 rounded-full border border-border/80 bg-surface/60 p-1.5 pr-5 backdrop-blur-md shadow-lg"
          >
            <img
              src={profilePic}
              alt="Najeeb Sayyed - Software Developer"
              className="h-10 w-10 rounded-full border border-border/50 object-cover"
            />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[13px] font-medium text-text">Available for Software Developer roles</span>
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-8 text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] tracking-tighter text-text"
          >
            Hi, I'm <span className="text-white drop-shadow-md">Najeeb</span>. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-secondary to-purple-400 bg-clip-text text-transparent">
              Software Developer.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-muted leading-relaxed"
          >
            I build scalable, production-ready web and mobile applications using React, Node.js, TypeScript, and modern cloud technologies. Crafting premium digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-20"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 py-3.5 px-8 text-base group">
                View Projects
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href={resume} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 border border-border/80 bg-surface/50 text-text hover:bg-surface-hover hover:border-primary/50 py-3.5 px-8 text-base backdrop-blur-sm transition-all duration-300">
                <FaDownload size={14} />
                Resume
              </Button>
            </a>
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[10%] top-[20%] text-cyan-400 opacity-60 blur-[1px]"
            >
              <SiReact size={48} />
            </motion.div>
            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[12%] top-[15%] text-emerald-500 opacity-60 blur-[1px]"
            >
              <SiNodedotjs size={56} />
            </motion.div>
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-[15%] bottom-[15%] text-blue-500 opacity-50 blur-[2px]"
            >
              <SiTypescript size={40} />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-[18%] bottom-[20%] text-emerald-400 opacity-50 blur-[2px]"
            >
              <SiSupabase size={42} />
            </motion.div>
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-[50%] top-[5%] text-teal-400 opacity-40 blur-[2px]"
            >
              <SiTailwindcss size={36} />
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
