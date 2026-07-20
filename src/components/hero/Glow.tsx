export default function Glow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Left glow */}
      <div
        className="
          absolute
          top-16
          left-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/15
          blur-[140px]
        "
      />

      {/* Center glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      {/* Right glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />
    </div>
  );
}
