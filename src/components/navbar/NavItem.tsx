import clsx from "clsx";

interface Props {
  label: string;
  href: string;
  active?: boolean;
}

export default function NavItem({ label, href, active = false }: Props) {
  return (
    <a
      href={href}
      className={clsx(
        `
        relative
        text-sm
        font-medium
        transition-all
        duration-300
        hover:text-primary
        `,
        active ? "text-primary" : "text-gray-400",
      )}
    >
      {label}

      {active && (
        <span
          className="
          absolute
          left-1/2
          -bottom-3
          h-1.5
          w-1.5
          -translate-x-1/2
          rounded-full
          bg-primary
        "
        />
      )}
    </a>
  );
}
