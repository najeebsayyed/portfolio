import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: Props) {
  return (
    <div
      className={clsx(
        `
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        shadow-glass
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
