export interface SkillItem {
  name: string;
  category: string;
}

export const skillsList: SkillItem[] = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "React JS", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Backend & DB" },
  { name: "Firebase", category: "Backend & DB" },
  { name: "REST APIs", category: "Backend" },
  { name: "Gemini API", category: "AI & ML" },
  { name: "OpenAI API", category: "AI & ML" },
  { name: "Redux Toolkit", category: "State Management" },
  { name: "Expo", category: "Mobile" },
  { name: "Git & GitHub", category: "Dev Tools" },
  { name: "VS Code", category: "Dev Tools" },
  { name: "Figma", category: "Design" },
];

export const skillCategories = [
  "All",
  "Language",
  "Frontend",
  "Mobile",
  "Backend & DB",
  "AI & ML",
  "Dev Tools",
];
