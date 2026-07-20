import GlassCard from "../common/GlassCard";
import { BadgeCheck } from "lucide-react";

export default function ExpertiseCard() {
  return (
    <GlassCard
      className="
      absolute
      left-6
      right-6
      bottom-6
      p-5
      flex
      items-center
      justify-between
      "
    >
      <div>
        <p className="text-primary text-xs tracking-[0.3em] uppercase">
          Expertise
        </p>

        <h3 className="text-lg font-semibold mt-1">React Native & Expo</h3>
      </div>

      <BadgeCheck className="text-primary" size={28} />
    </GlassCard>
  );
}
