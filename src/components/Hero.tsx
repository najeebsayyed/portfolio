import profile from "../assets/images/Profile_Pic.jpg";
import resumePdf from "../assets/resume/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-32"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
            👋 Welcome to my portfolio
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Hi, I'm{" "}
            <span className="whitespace-nowrap text-emerald-400">
              Najeeb Sayyed
            </span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-gray-300 sm:text-2xl md:text-4xl">
            Mobile App Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0">
            I build beautiful, scalable and high-performance mobile applications
            using React Native, TypeScript, Firebase/Supabase and REST APIs.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-400 px-7 py-4 text-center font-semibold text-slate-900 transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-400 px-7 py-4 text-center font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-slate-900"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-emerald-400/20 blur-3xl" />

            {/* Image Container */}
            <div className="relative rounded-[30px] border-4 border-emerald-400 bg-[#08111F] p-3 lg:rounded-[40px]">
              <img
                src={profile}
                alt="Najeeb"
                className="h-[320px] w-[240px] rounded-[24px] object-cover sm:h-[380px] sm:w-[280px] lg:h-[400px] lg:w-[300px] lg:rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
