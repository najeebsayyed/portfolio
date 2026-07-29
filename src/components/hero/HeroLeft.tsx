import { motion } from "framer-motion";

import Badge from "../common/Badge";
import GradientText from "../common/GradientText";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import TechStack from "./TechStack";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="space-y-8"
    >
      <Badge text="Open For Opportunities" />

      <div className="space-y-4">
        <p className="text-primary text-xl font-medium">Hello, I'm Abdullah</p>

        <h1
          className="
          text-5xl
          lg:text-7xl
          font-heading
          font-bold
          leading-tight
          "
        >
          Mobile App
          <br />
          <GradientText>Developer</GradientText>
        </h1>

        <p
          className="
          text-body
          text-lg
          max-w-xl
          leading-8
          "
        >
          Specializing in building premium mobile applications with React
          Native, Expo and modern technologies. I create beautiful experiences
          with performance and scalability in mind.
        </p>
      </div>
      <TechStack />
      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}
