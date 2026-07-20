import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      text-gray-400
      flex
      flex-col
      items-center
      gap-2
      "
    >
      <Mouse size={20} />

      <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>
    </motion.div>
  );
}
