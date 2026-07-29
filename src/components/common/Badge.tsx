interface Props {
  text: string;
}

export default function Badge({ text }: Props) {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      "
    >
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

      <span
        className="
        text-[12px]
        uppercase
        tracking-[0.25em]
        font-mono
        text-primary
        "
      >
        {text}
      </span>
    </div>
  );
}
