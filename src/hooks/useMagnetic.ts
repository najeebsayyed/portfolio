import { useRef } from "react";

export function useMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const reset = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px,0px)";
  };

  return {
    ref,
    handleMouseMove,
    reset,
  };
}