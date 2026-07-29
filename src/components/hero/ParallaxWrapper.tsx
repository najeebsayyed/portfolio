import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useParallax } from "../../hooks/useParallax";

interface Props {
  children: ReactNode;
}

export default function ParallaxWrapper({ children }: Props) {
  const parallax = useParallax();

  return (
    <motion.div
      style={{
        rotateX: parallax.rotateX,
        rotateY: parallax.rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={parallax.handleMouseMove}
      onMouseLeave={parallax.reset}
    >
      {children}
    </motion.div>
  );
}
