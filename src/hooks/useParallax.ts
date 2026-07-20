import { useMotionValue, useSpring } from "framer-motion";

export function useParallax() {
  const rotateX = useSpring(0, {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(0, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = -(y - rect.height / 2) / 25;
    const ry = (x - rect.width / 2) / 25;

    rotateX.set(rx);
    rotateY.set(ry);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    reset,
  };
}