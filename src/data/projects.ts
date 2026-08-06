import teachmate from "../assets/images/teachmate.png";
import easyscan from "../assets/images/easy-scan.png";
import recipeos from "../assets/images/recipe-os.png";

import recipeosDemo from "../assets/videos/recipe-os.mp4";
import easyscanDemo from "../assets/videos/easy-scan.mp4";
import teachmateDemo from "../assets/videos/teachmate.mp4";

export const projects = [
  {
    title: "RecipeOS",
    subtitle: "AI Recipe Engine & Supabase Full-Stack Platform",
    description:
      "A full-stack AI platform that analyzes available ingredients to generate custom recipes using Gemini AI. Features Supabase authentication, saved recipe collections, guest mode, and state management via Redux Toolkit.",

    image: recipeos,
    category: "Full-Stack & AI",

    tech: [
      "Gemini AI API",
      "Supabase Auth & DB",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind",
    ],

    github: "https://github.com/najeebsayyed/recipe-os",
    demo: recipeosDemo,
    highlights: ["Sub-800ms AI generation latency", "Full-stack authentication flow", "Offline persistence"],
  },

  {
    title: "TeachMate AI",
    subtitle: "Generative AI Quiz Platform (Octopus Hackathon Top 50)",
    description:
      "An intelligent quiz generation system that crafts personalized assessments based on custom topics, difficulty levels, and educational grade using Gemini AI APIs. Ranked in the Top 50 projects among 900+ teams in Octopus Hackathon 2025.",

    image: teachmate,
    category: "Generative AI",

    tech: [
      "Gemini AI API",
      "React Native",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind",
    ],

    github: "https://github.com/najeebsayyed/teachmate-ai",
    demo: teachmateDemo,
    highlights: ["Top 50 / 900+ Hackathon Finalist", "Adaptive difficulty engine", "Instant PDF export"],
  },

  {
    title: "Easy Scan",
    subtitle: "Document Scanner & PDF Processing Suite",
    description:
      "Mobile document scanner application with high-definition document detection, PDF/PNG conversion, multi-page export, and local storage management.",

    image: easyscan,
    category: "Mobile Utility",

    tech: [
      "React Native",
      "TypeScript",
      "PDF Generation Engine",
      "Native Camera Module",
      "Tailwind",
    ],

    github: "https://github.com/najeebsayyed/easy-scan",
    demo: easyscanDemo,
    highlights: ["Zero-cloud local processing", "Multi-page PDF export", "Native camera edge detection"],
  },
];
