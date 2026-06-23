import profile from "../assets/images/Profile_Pic.jpg";
import resumePdf from "../assets/resume/resume.pdf";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-26"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="mx-auto ml-20 grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="mb-4  inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
            👋 Welcome to my portfolio
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-5xl">
            Hi, I'm <span className="text-emerald-400">Najeeb Sayyed</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 md:text-4xl">
            Mobile App Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            I build beautiful, scalable and high-performance mobile applications
            using React Native, TypeScript, Firebase/Supabase and REST APIs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-400 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-400 px-7 py-4 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-slate-900"
            >
              Download CV
            </a>
          </div>

          {/* Stats
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-emerald-400">4+</h3>
              <p className="text-gray-400">Apps Built</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">1+</h3>
              <p className="text-gray-400">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">Top 50</h3>
              <p className="text-gray-400">Hackathon Finalist</p>
            </div>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-emerald-400/20 blur-3xl" />

            {/* Hexagon Style Container */}
            <div className="relative rounded-[40px] border-4 border-emerald-400 bg-[#08111F] p-3">
              <img
                src={profile}
                alt="Abdullah"
                className="h-[400px] w-[300px] rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
