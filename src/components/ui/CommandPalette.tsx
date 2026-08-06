import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import {
  FaHouse,
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    {
      id: "hero",
      title: "Go to Home / Hero",
      category: "Navigation",
      icon: <FaHouse className="text-primary" />,
      perform: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "about",
      title: "Go to About & Tech Stack",
      category: "Navigation",
      icon: <FaUser className="text-secondary" />,
      perform: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "projects",
      title: "View Portfolio Projects",
      category: "Navigation",
      icon: <FaLaptopCode className="text-purple-400" />,
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "experience",
      title: "View Work Experience Timeline",
      category: "Navigation",
      icon: <FaBriefcase className="text-emerald-400" />,
      perform: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "contact",
      title: "Contact & Hire Najeeb",
      category: "Navigation",
      icon: <FaEnvelope className="text-amber-400" />,
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      category: "Social Links",
      icon: <FaGithub />,
      perform: () => {
        window.open("https://github.com/najeebsayyed", "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      category: "Social Links",
      icon: <FaLinkedin className="text-blue-500" />,
      perform: () => {
        window.open("https://linkedin.com/in/najeebsayyed", "_blank");
        onClose();
      },
    },
    {
      id: "twitter",
      title: "Open Twitter / X Profile",
      category: "Social Links",
      icon: <FaXTwitter />,
      perform: () => {
        window.open("https://x.com/najeebsayyed_", "_blank");
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-2 shadow-2xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-slate-800 px-4 py-3">
              <FaSearch className="text-slate-500 mr-3 text-sm" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-slate-500 hover:text-white transition"
              >
                <FaXmark size={16} />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-72 overflow-y-auto p-2 space-y-1">
              {filteredActions.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500">
                  No matching commands found.
                </div>
              ) : (
                filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.perform}
                    className="w-full flex items-center justify-between rounded-xl p-3 text-left transition duration-200 hover:bg-slate-900 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-sm group-hover:border-primary group-hover:bg-primary/10">
                        {action.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                          {action.title}
                        </p>
                        <p className="text-[11px] text-slate-500">{action.category}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-600 font-mono group-hover:text-slate-400">↵ Jump</span>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-slate-800/80 px-4 py-2 text-[11px] text-slate-500">
              <span>Use keyboard shortcuts</span>
              <span className="font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px]">ESC to exit</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
