import { motion } from "framer-motion";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      border-b
      border-white/5
      backdrop-blur-xl
      bg-background/70
      "
    >
      <div
        className="
        max-w-7xl
        h-20
        mx-auto
        px-6
        flex
        items-center
        justify-between
        "
      >
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-3">
          <Button className="hidden md:flex">Download Resume</Button>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
