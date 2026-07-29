import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GradientText({ children }: Props) {
  return (
    <span
      className="
      bg-gradient-to-r
      from-primary
      to-secondary
      bg-clip-text
      text-transparent
      "
    >
      {children}
    </span>
  );
}
