export default function HeroStats() {
  return (
    <div
      className="
      flex
      items-center
      gap-5
      pt-4
      "
    >
      <div className="flex -space-x-3">
        <div className="w-10 h-10 rounded-full bg-slate-700 border border-white/10" />

        <div className="w-10 h-10 rounded-full bg-slate-600 border border-white/10" />

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-primary
          text-black
          flex
          items-center
          justify-center
          text-xs
          font-semibold
          "
        >
          12+
        </div>
      </div>

      <p className="text-muted">Trusted by startups worldwide</p>
    </div>
  );
}
