import { ArrowRight, Download } from "lucide-react";
import Magnetic from "../common/Magnetic";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5">
      <Magnetic icon={<ArrowRight size={18} />}>View Projects</Magnetic>

      <Magnetic variant="outline" icon={<Download size={18} />}>
        Download Resume
      </Magnetic>
    </div>
  );
}
