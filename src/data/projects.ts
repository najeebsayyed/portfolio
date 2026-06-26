import teachmate from "../assets/images/teachmate.png";
import easyscan from "../assets/images/easy-scan.png";
import recipeos from "../assets/images/recipe-os.png";

import recipeosDemo from "../assets/videos/recipe-os.mp4";
import easyscanDemo from "../assets/videos/easy-scan.mp4";
import teachmateDemo from "../assets/videos/teachmate.mp4";

export const projects = [
  {
    title: "RecipeOS",
    description:
      "RecipeOS helps users create personalized recipes from available ingredients using Gemini AI, with Supabase authentication, recipe saving, and guest mode support.",

    image: recipeos,

    tech: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Redux Toolkit",
      "Tailwind",
    ],

    github: "https://github.com/najeebsayyed/recipe-os",

    demo: recipeosDemo,
  },

  {
    title: "Easy Scan",
    description:
      "Document scanner app with PDF, JPG, PNG generation and gallery/internal storage saving functionality",

    image: easyscan,

    tech: [
      "React Native",
      "PDF",
      "JPG",
      "PNG",
      "react-native-document-scanner",
      "TypeScript",
      "Tailwind",
    ],

    github: "https://github.com/najeebsayyed/easy-scan",

    demo: easyscanDemo,
  },
  {
    title: "TeachMate AI",
    description:
      "AI-powered quiz generator app that generates quizzes based on topic, difficulty, and education level using Gemini AI. Recognized as a Top 50 project in the Octopus Hackathon 2025.",

    image: teachmate,

    tech: [
      "React Native",
      "JavaScript",
      "Gemini AI",
      "Redux Toolkit",
      "Tailwind",
    ],

    github: "https://github.com/najeebsayyed/teachmate-ai",

    demo: teachmateDemo,
  },
];
