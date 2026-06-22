import teachmate from "../assets/vite.svg";
import easyscan from "../assets/vite.svg";
import recipeos from "../assets/vite.svg";

export const projects = [
  {
    title: "TeachMate AI",
    description:
      "AI-powered quiz generator app that creates quizzes based on topic, difficulty and education level using Gemini AI.",

    image: teachmate,

    tech: ["React Native", "Gemini AI", "Firebase", "TypeScript"],

    github: "https://github.com/yourusername/teachmate",

    demo: "#",
  },

  {
    title: "Easy Scan",
    description:
      "Document scanner app with PDF generation, image enhancement and gallery saving functionality.",

    image: easyscan,

    tech: ["React Native", "PDF", "Native Modules", "TypeScript"],

    github: "https://github.com/yourusername/easyscan",

    demo: "#",
  },

  {
    title: "RecipeOS",
    description:
      "AI recipe generator that suggests meals from ingredients using Gemini AI and Supabase backend.",

    image: recipeos,

    tech: ["React Native", "Supabase", "Gemini AI", "TypeScript"],

    github: "https://github.com/yourusername/recipeos",

    demo: "#",
  },
];
