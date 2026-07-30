import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: Props) {
  return (
    <section id={id} className={cn("py-14 lg:py-20", className)}>
      {children}
    </section>
  );
}
