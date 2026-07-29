import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        x: [0, 60, -30, 0],
        y: [0, -40, 30, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed inset-0 -z-30 overflow-hidden"
    >
      <div
        className="
        absolute
        left-0
        top-0
        h-[900px]
        w-[900px]
        rounded-full
        bg-blue-500/10
        blur-[160px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        h-[800px]
        w-[800px]
        rounded-full
        bg-indigo-500/10
        blur-[180px]
      "
      />
    </motion.div>
  );
}
