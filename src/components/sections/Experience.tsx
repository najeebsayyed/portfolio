import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaCalendarAlt, FaBuilding, FaLaptopCode } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { experienceData } from "../../data/eperience";

export default function Experience() {
  return (
    <Section id="experience" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[130px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <FaBriefcase className="text-secondary" /> Professional Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-text sm:text-5xl lg:text-6xl"
          >
            Work <span className="text-primary">Experience</span> & Roles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-muted"
          >
            Building mobile apps, auditing AI-generated code, and shipping cross-platform production applications.
          </motion.p>
        </div>

        {/* Responsive Timeline Container */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-10 sm:space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 z-10 flex h-8 w-8 sm:h-9 sm:w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-slate-950 text-primary shadow-lg shadow-primary/30">
                    {idx === 0 ? (
                      <FaLaptopCode className="text-primary text-xs sm:text-sm animate-pulse" />
                    ) : (
                      <FaCode className="text-secondary text-xs sm:text-sm" />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <div className="pl-10 md:pl-0 w-full md:w-1/2 md:px-8">
                    <div className="group relative rounded-3xl border border-border bg-surface p-5 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                      {/* Year pill */}
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
                        <FaCalendarAlt size={10} />
                        {item.year}
                      </div>

                      <h3 className="mt-3 text-lg sm:text-xl font-bold text-text group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm font-medium text-secondary">
                        <FaBuilding size={12} />
                        <span>{item.company}</span>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
