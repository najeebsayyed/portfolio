import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", icon, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          `
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          px-7
          py-4
          font-medium
          transition-all
          duration-300
          active:scale-95
          hover:-translate-y-1
          disabled:cursor-not-allowed
          disabled:opacity-50
          `,
          variant === "primary" &&
            `
            bg-primary
            text-background
            hover:shadow-glow
            hover:scale-[1.03]
            `,
          variant === "outline" &&
            `
            border
            border-white/15
            bg-transparent
            text-white
            hover:bg-white/5
            `,
          className,
        )}
      >
        <span>{children}</span>

        {icon && (
          <span
            className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            "
          >
            {icon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
