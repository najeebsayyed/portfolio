import recipeos from "../assets/images/recipe-os.png";
import teachmate from "../assets/images/teachmate.png";
import calith_web from "../assets/images/calith-web.png";
import easyscan from "../assets/images/easy-scan.png";
import focusbids from "../assets/images/focusbids.png";
import portfolio from "../assets/images/portfolio.png";

import recipeosDemo from "../assets/videos/recipe-os.mp4";
import teachmateDemo from "../assets/videos/teachmate.mp4";
import easyscanDemo from "../assets/videos/easy-scan.mp4";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categories: string[];
  tech: string[];
  github?: string;
  live?: string;
  demo?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Calith.fit",
    subtitle: "AI-Powered Calisthenics Platform",
    description:
      "An adaptive bodyweight training companion web platform to master handstands, muscle-ups, and planche. Features intelligent skill trees, real-time RPE tuning, and zero equipment workouts.",
    image: calith_web,
    categories: ["Websites", "AI Powered"],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI Coach Engine",
      "Framer Motion",
    ],
    live: "https://calith.fit",
    highlights: [
      "Intelligent skill tree progressions",
      "Real-time RPE auto-tuning",
      "Zero equipment training companion",
    ],
  },

  {
    title: "RecipeOS",
    subtitle: "AI-Powered Recipe Mobile App",
    description:
      "A mobile AI platform that analyzes available ingredients to generate custom recipes using Gemini AI. Features Supabase authentication, saved recipe collections, guest mode, and state management via Redux Toolkit.",
    image: recipeos,
    categories: ["Mobile Apps", "AI Powered"],
    tech: [
      "React Native",
      "Gemini AI API",
      "Supabase",
      "TypeScript",
      "Redux Toolkit",
    ],
    github: "https://github.com/najeebsayyed/recipe-os",
    demo: recipeosDemo,
    highlights: [
      "Sub-800ms AI generation latency",
      "Full-stack authentication flow",
      "Offline persistence",
    ],
  },

  {
    title: "FocusBids",
    subtitle: "AI-Powered Proposal Intelligence Platform",
    description:
      "An AI-powered platform for agencies and businesses to discover high-value opportunities, understand requirements, and create compelling, tailored proposals faster. Combines AI opportunity analysis with intelligent proposal generation to streamline sales and bidding workflows.",
    image: focusbids,
    categories: ["Websites", "AI Powered"],
    tech: [
      "Gemini AI",
      "Supabase",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    live: "https://focusbids.com",
    highlights: [
      "AI-powered opportunity & requirement analysis",
      "Generate tailored proposals in seconds",
      "Centralized proposal management & library",
    ],
  },

  {
    title: "TeachMate AI",
    subtitle: "AI Quiz Platform (Octopus Hackathon Top 50)",
    description:
      "An intelligent quiz generation system that crafts personalized assessments based on custom topics, difficulty levels, and educational grade using Gemini AI APIs. Ranked in the Top 50 projects among 900+ teams in Octopus Hackathon 2025.",
    image: teachmate,
    categories: ["Mobile Apps", "AI Powered"],
    tech: [
      "React Native",
      "Gemini AI API",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Expo",
    ],
    github: "https://github.com/najeebsayyed/teachmate-ai",
    demo: teachmateDemo,
    highlights: [
      "Top 50 / 900+ Hackathon Finalist",
      "Adaptive difficulty engine",
      "Instant PDF export",
    ],
  },

  {
    title: "Personal Portfolio",
    subtitle: "Personal Developer Portfolio & Web Showcase",
    description:
      "A premium, Awwwards-inspired portfolio website built with modern web technologies. Features interactive AI terminal, smooth animations, spotlight effects, responsive mobile-first design, and JSON-LD SEO tags.",
    image: portfolio,
    categories: ["Websites"],
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    github: "https://github.com/najeebsayyed/portfolio",
    live: "https://najeebsayyed.in",
    highlights: [
      "Interactive AI terminal console",
      "Premium dark-mode design",
      "100% responsive & mobile-first",
    ],
  },

  {
    title: "Easy Scan",
    subtitle: "Document Scanner & PDF Processing Suite",
    description:
      "Mobile document scanner application with high-definition document detection, PDF/PNG conversion, multi-page export, and local storage management.",
    image: easyscan,
    categories: ["Mobile Apps"],
    tech: [
      "React Native",
      "TypeScript",
      "PDF Generation Engine",
      "Native Camera Module",
      "Expo",
    ],
    github: "https://github.com/najeebsayyed/easy-scan",
    demo: easyscanDemo,
    highlights: [
      "Zero-cloud local processing",
      "Multi-page PDF export",
      "Native camera edge detection",
    ],
  },
];
