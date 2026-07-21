import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          lg:hidden
          flex
          items-center
          justify-center
          rounded-xl
          p-2.5
          text-white
          transition
          hover:bg-white/5
          active:scale-95
        "
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/70
                backdrop-blur-md
              "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
                w-[85%]
                max-w-sm
                flex-col
                border-l
                border-white/10
                bg-background
                p-6
              "
            >
              {/* Header */}
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-xl font-heading font-bold text-white">
                  Abdullah
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg
                    p-2
                    hover:bg-white/5
                  "
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-6">
                {links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-xl
                      font-medium
                      text-body
                      transition
                      hover:text-primary
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto">
                <Button
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
