import { motion } from "framer-motion";
import { FaCheckCircle, FaTrophy, FaBolt, FaCode } from "react-icons/fa";
import Container from "../ui/Container";

const stats = [
  {
    icon: <FaCheckCircle className="text-emerald-400" size={24} />,
    value: "100%",
    label: "Code Quality Audit Rate",
    description: "Evaluated & fixed complex AI JavaScript code at Outlier AI.",
  },
  {
    icon: <FaTrophy className="text-amber-400" size={24} />,
    value: "Top 50",
    label: "Octopus Hackathon 2025",
    description: "Selected out of 900+ global teams for TeachMate AI.",
  },
  {
    icon: <FaBolt className="text-cyan-400" size={24} />,
    value: "< 500ms",
    label: "AI Generation Latency",
    description: "Optimized Gemini API prompt pipelines & caching.",
  },
  {
    icon: <FaCode className="text-purple-400" size={24} />,
    value: "Full-Stack",
    label: "Production Readiness",
    description: "Building production software at GetCollab.",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden py-16 bg-slate-950/60 border-y border-border">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background border border-border/60 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight group-hover:text-primary transition-colors">
                    {item.value}
                  </span>
                </div>
              </div>

              <h4 className="mt-4 text-base font-bold text-text">{item.label}</h4>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
