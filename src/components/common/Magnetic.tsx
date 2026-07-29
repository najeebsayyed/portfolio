import type { ComponentProps } from "react";
import Button from "./Button";
import { useMagnetic } from "../../hooks/useMagnetic";

type Props = ComponentProps<typeof Button>;

export default function Magnetic(props: Props) {
  const { ref, handleMouseMove, reset } = useMagnetic();

  return (
    <Button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      {...props}
    />
  );
}
