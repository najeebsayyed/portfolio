import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="pt-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Portfolio
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Some of my recent work built with React Native, TypeScript,
            Firebase, Supabase and AI APIs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#08111F] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
            >
              {/* Image */}
              <div className="overflow-hidden flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-64 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-3 text-gray-400">{project.description}</p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 px-5 py-3 transition hover:border-emerald-400 hover:text-emerald-400"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-emerald-400 px-5 py-3 font-medium text-slate-900 transition hover:scale-105"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl border border-emerald-400 px-6 py-3 font-medium text-emerald-400 transition hover:bg-emerald-400 hover:text-slate-900"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
