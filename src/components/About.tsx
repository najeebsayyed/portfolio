const About = () => {
  const stats = [
    {
      value: "4+",
      label: "Projects Built",
    },
    {
      value: "2+",
      label: "Years Learning",
    },

    {
      value: "Top 50",
      label: "Hackathon Finalist",
    },

    {
      value: "100%",
      label: "Passion for Coding",
    },
  ];

  return (
    <section id="about" className="pt-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Turning Ideas Into
            <span className="text-emerald-400"> Mobile Apps</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-[#08111F] p-8">
              <p className="text-lg leading-relaxed text-gray-400">
                I'm a passionate React Native Developer who enjoys building
                modern mobile applications that solve real-world problems.
                <br />
                <br />
                Currently pursuing the IIT Madras BS in Data Science program
                while continuously improving my skills in React Native,
                TypeScript, Firebase, Supabase and modern application
                architecture.
                <br />
                <br />I love transforming ideas into beautiful, scalable and
                user-friendly mobile experiences.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-[#08111F] p-6 text-center transition-all duration-300 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <h4 className="text-3xl font-bold text-emerald-400">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
