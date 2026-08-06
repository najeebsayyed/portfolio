import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaTrash } from "react-icons/fa6";
import Container from "../ui/Container";
import Section from "../ui/Section";

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

const presetCommands = [
  { cmd: "whoami", label: "whoami" },
  { cmd: "skills", label: "skills" },
  { cmd: "projects", label: "projects" },
  { cmd: "experience", label: "experience" },
  { cmd: "contact", label: "contact" },
];

export default function AiTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      response: (
        <div>
          <p className="text-secondary font-mono">⚡ Welcome to Najeeb's Interactive AI Terminal [v2.4.0]</p>
          <p className="text-muted text-xs mt-1">
            Type a command or click the preset buttons below to query Najeeb's AI & Full-Stack architecture specs.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let res: React.ReactNode = "";

    switch (cleanCmd) {
      case "whoami":
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="font-bold text-primary">Najeeb Sayyed - AI & Full-Stack Developer</p>
            <p>&bull; Role: Software Developer Intern @ GetCollab (Remote)</p>
            <p>&bull; Focus: Building fast React & React Native apps with Generative AI (Gemini/OpenAI)</p>
            <p>&bull; Code Auditing: Reviewed AI-generated JavaScript & web APIs at Outlier AI</p>
          </div>
        );
        break;

      case "skills":
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-secondary font-semibold">💻 Technical Stack & Arsenal:</p>
            <p><span className="text-primary font-mono">[Full-Stack]:</span> React JS, TypeScript, JavaScript, Tailwind CSS, Next.js</p>
            <p><span className="text-primary font-mono">[Backend & DB]:</span> Node.js, Fastify, Supabase, Firebase, REST APIs, PostgreSQL</p>
            <p><span className="text-primary font-mono">[AI & ML]:</span> Gemini API, OpenAI API, Prompt Engineering, Code Auditing</p>
            <p><span className="text-primary font-mono">[Mobile]:</span> React Native, Expo, Android Development</p>
          </div>
        );
        break;

      case "projects":
        res = (
          <div className="space-y-2 text-slate-300">
            <p className="text-secondary font-semibold">🚀 Highlighted Full-Stack & AI Projects:</p>
            <div>
              <p className="font-bold text-white">1. RecipeOS</p>
              <p className="text-xs text-muted">Full-stack Gemini AI recipe engine with Supabase Auth & Redux Toolkit.</p>
            </div>
            <div>
              <p className="font-bold text-white">2. TeachMate AI</p>
              <p className="text-xs text-muted">Generative AI quiz platform &bull; Top 50 Finalist in Octopus Hackathon 2025 (900+ teams).</p>
            </div>
            <div>
              <p className="font-bold text-white">3. Easy Scan</p>
              <p className="text-xs text-muted">Document scanner suite with PDF export & local file processing.</p>
            </div>
          </div>
        );
        break;

      case "experience":
        res = (
          <div className="space-y-2 text-slate-300">
            <p className="text-secondary font-semibold">💼 Career Timeline:</p>
            <p>&bull; <strong className="text-white">Software Developer Intern @ GetCollab</strong> (July 2026 - Present, Remote)</p>
            <p>&bull; <strong className="text-white">Freelance JS Developer @ Outlier AI</strong> (Oct 2024 - Mar 2025)</p>
          </div>
        );
        break;

      case "contact":
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-secondary font-semibold">📬 Get in Touch:</p>
            <p>&bull; Email: <a href="mailto:najeebsayyed777@gmail.com" className="text-primary underline">najeebsayyed777@gmail.com</a></p>
            <p>&bull; LinkedIn: <a href="https://linkedin.com/in/najeebsayyed" target="_blank" rel="noreferrer" className="text-primary underline">linkedin.com/in/najeebsayyed</a></p>
            <p>&bull; GitHub: <a href="https://github.com/najeebsayyed" target="_blank" rel="noreferrer" className="text-primary underline">github.com/najeebsayyed</a></p>
          </div>
        );
        break;

      case "help":
      default:
        res = (
          <div className="text-muted">
            <p>Available commands: <span className="text-primary font-mono font-bold">whoami</span>, <span className="text-primary font-mono font-bold">skills</span>, <span className="text-primary font-mono font-bold">projects</span>, <span className="text-primary font-mono font-bold">experience</span>, <span className="text-primary font-mono font-bold">contact</span>, <span className="text-primary font-mono font-bold">clear</span></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;
    }

    setHistory((prev) => [...prev, { command: cleanCmd, response: res }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal("");
  };

  return (
    <Section id="terminal" className="relative overflow-hidden py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <FaTerminal className="text-secondary" /> Developer Console
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-text sm:text-5xl lg:text-6xl"
          >
            Interactive <span className="text-primary">AI Sandbox</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-muted"
          >
            Test Najeeb's developer environment in real-time. Execute commands or click shortcuts below.
          </motion.p>
        </div>

        {/* Terminal Window Container */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border bg-slate-950 shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border/80 bg-slate-900/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">najeeb@dev-portfolio:~ (zsh)</span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-400 hover:text-white transition"
              title="Clear Terminal"
            >
              <FaTrash size={10} /> Clear
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-2 border-b border-border/40 bg-slate-900/40 px-4 py-2 overflow-x-auto no-scrollbar">
            <span className="text-xs text-slate-500 font-mono shrink-0">Quick Run:</span>
            {presetCommands.map((item) => (
              <button
                key={item.cmd}
                onClick={() => executeCommand(item.cmd)}
                className="shrink-0 rounded-md border border-border/80 bg-slate-900 px-2.5 py-1 text-xs font-mono text-secondary hover:border-primary hover:text-white transition active:scale-95"
              >
                ${item.label}
              </button>
            ))}
          </div>

          {/* Terminal Screen Output Area */}
          <div className="h-[320px] overflow-y-auto p-5 font-mono text-xs sm:text-sm space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-primary">
                    <span>najeeb@dev-portfolio:~$</span>
                    <span className="text-white font-bold">{item.command}</span>
                  </div>
                )}
                <div className="pl-4 border-l-2 border-primary/30">{item.response}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Prompt Bar */}
          <form onSubmit={handleSubmit} className="flex items-center border-t border-border bg-slate-900/80 px-4 py-3">
            <span className="mr-2 font-mono text-primary font-bold text-sm">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command (whoami, skills, projects, experience, contact)..."
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
            />
            <button
              type="submit"
              className="ml-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-primary-hover transition"
            >
              Run
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
