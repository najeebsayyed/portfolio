import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="
      lg:hidden
      text-white
      p-2
      rounded-lg
      hover:bg-white/5
      "
    >
      <Menu size={24} />
    </button>
  );
}
