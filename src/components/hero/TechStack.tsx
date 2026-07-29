import { motion } from "framer-motion";

const tech = ["React Native", "Expo", "TypeScript", "Firebase", "Supabase"];

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-3 pt-3">
      {tech.map((item, index) => (
        <motion.div
          key={item}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9 + index * 0.1,
          }}
          className="
          px-4
          py-2
          rounded-full
          border
          border-white/10
          bg-white/5
          text-sm
          text-gray-300
          backdrop-blur
          "
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
