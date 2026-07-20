export default function Grid() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-20
      opacity-30
      pointer-events-none
      "
    >
      <div
        className="
        h-full
        w-full
        bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
        bg-[size:40px_40px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />
    </div>
  );
}
