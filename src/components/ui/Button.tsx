import type { ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        "bg-primary px-6 py-3",
        "font-medium text-white",
        "transition-all duration-200",
        "hover:bg-primary-hover",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-primary",
        className,
      )}
    />
  );
}
