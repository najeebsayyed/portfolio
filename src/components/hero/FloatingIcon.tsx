import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";

interface Props {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingIcon({ icon, className, delay = 0 }: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      <GlassCard className="p-4 rounded-2xl">{icon}</GlassCard>
    </motion.div>
  );
}
