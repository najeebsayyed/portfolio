const educationData = [
  {
    degree: "BS in Data Science and Applications",
    institution: "Indian Institute of Technology Madras",
    duration: "May 2025 - Present",
    description:
      "Learning Python, Mathematics, Statistics, Machine Learning, and Generative AI, with a focus on developing analytical thinking and building intelligent, data-driven solutions.",
  },
  {
    degree: "BE in Computer Science and Engineering (Dropout)",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    duration: "Jun 2023 - May 2025 ",
    description:
      "Studied core computer science subjects including programming, data structures, computer networks and web technologies.",
  },
  {
    degree: "Higher Secondary (12th) - Grade A",
    institution: "Maharashtra State Board",
    duration: "2021 - 2022",
    description:
      "Completed Higher Secondary Education with a focus on Science and Mathematics from Maulana Azad College, Aurangabad",
  },
  {
    degree: "Secondary School (10th) - 80%",
    institution: "Maharashtra State Board",
    duration: "2019 - 20",
    description:
      "Completed Secondary School Education from Baliram Patil Vidyalaya, Aurangabad",
  },
];

const Education = () => {
  return (
    <section id="education" className="pt-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-emerald-400">
            Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">Academic Journey</h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-emerald-400" />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-emerald-400/30" />

          {educationData.map((item, index) => (
            <div key={index} className="relative mb-12 pl-14">
              {/* Circle */}
              <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#050D18] bg-emerald-400">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-[#08111F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <span className="rounded-full bg-emerald-400/10 px-4 py-1 text-sm text-emerald-400">
                    {item.duration}
                  </span>
                </div>

                <p className="mt-2 font-medium text-emerald-400">
                  {item.institution}
                </p>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
