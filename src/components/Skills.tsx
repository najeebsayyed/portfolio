import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-emerald-400">
            MY SKILLS
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Tools and technologies I use to build modern, scalable and beautiful
            mobile applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-[#08111F]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-400/40
                hover:shadow-lg
                hover:shadow-emerald-500/10
              "
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-emerald-400
                      transition
                      hover:bg-emerald-400
                      hover:text-black
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl bg-[#08111F] p-6">
            <h3 className="text-4xl font-bold text-emerald-400">10+</h3>
            <p className="mt-2 text-gray-400">Technologies</p>
          </div>

          <div className="rounded-2xl bg-[#08111F] p-6">
            <h3 className="text-4xl font-bold text-emerald-400">4+</h3>
            <p className="mt-2 text-gray-400">Apps Built</p>
          </div>

          <div className="rounded-2xl bg-[#08111F] p-6">
            <h3 className="text-4xl font-bold text-emerald-400">1+</h3>
            <p className="mt-2 text-gray-400">Years Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
