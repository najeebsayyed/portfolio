import { motion } from "framer-motion";
import { Smartphone, Code2, TerminalSquare } from "lucide-react";

import GlassCard from "../common/GlassCard";
import FloatingIcon from "./FloatingIcon";
import ExpertiseCard from "./ExpertiseCard";

import heroImage from "../../assets/hero.jpg";
import ShineOverlay from "./ShineOverlay";

export default function HeroPortrait() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        -z-10
        rounded-full
        bg-primary/20
        blur-[120px]
        scale-110
        "
      />

      {/* Floating Icons */}

      <FloatingIcon
        delay={0}
        className="absolute -top-10 right-2 z-20"
        icon={<Smartphone className="text-primary" />}
      />

      <FloatingIcon
        delay={1}
        className="absolute top-32 -left-10 z-20"
        icon={<TerminalSquare className="text-primary" />}
      />

      <FloatingIcon
        delay={2}
        className="absolute bottom-16 -right-6 z-20"
        icon={<Code2 className="text-primary" />}
      />

      {/* Portrait */}

      <GlassCard
        className="
        relative
        overflow-hidden
        rounded-[34px]
        p-4
        w-[360px]
        h-[470px]
        lg:w-[440px]
        lg:h-[560px]
        group
        "
      >
        <div
          className="
          relative
          h-full
          rounded-[28px]
          overflow-hidden
          "
        >
          {/* Replace this with your image */}

          <img
            src={heroImage}
            alt="Abdullah"
            className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
  transition-transform
duration-700
ease-out
group-hover:scale-110
    "
          />
          <ShineOverlay />
          <ExpertiseCard />
        </div>
      </GlassCard>
    </motion.div>
  );
}
