import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import { useEffect, useState } from "react";
export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer:fine)").matches);
  }, []);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 40,
        }}
        className="
        fixed
        top-0
        left-0
        w-2
        h-2
        rounded-full
        bg-primary
        pointer-events-none
        z-[9999]
        "
      />

      <motion.div
        animate={{
          x: x - 16,
          y: y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 24,
        }}
        className="
        fixed
        top-0
        left-0
        w-8
        h-8
        rounded-full
        border
        border-primary/50
        pointer-events-none
        z-[9998]
        "
      />
    </>
  );
}
