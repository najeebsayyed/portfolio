import { experienceData } from "../data/eperience";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#050D18]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-emerald-400 font-medium">My Journey</span>

          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Experience & Achievements
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My learning journey, projects, hackathons and milestones as a Mobile
            App Developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-emerald-400/30" />

          <div className="space-y-10">
            {experienceData.map((item) => (
              <div key={item.id} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#050D18] bg-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-black" />
                </div>

                {/* Card */}
                <div className="group rounded-2xl border border-white/10 bg-[#08111F] p-6 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-400">
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-2 text-emerald-400">{item.company}</p>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
