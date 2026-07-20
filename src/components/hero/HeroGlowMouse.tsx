import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function HeroGlowMouse() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        x: x - 250,
        y: y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="
      pointer-events-none
      fixed
      top-0
      left-0
      w-[500px]
      h-[500px]
      rounded-full
      bg-primary/10
      blur-[120px]
      -z-10
      "
    />
  );
}
