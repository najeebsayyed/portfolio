export default function HeroGlow() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="
          absolute
          left-0
          top-0
          w-96
          h-96
          rounded-full
          bg-primary/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/10
          blur-[180px]
        "
      />
    </div>
  );
}
