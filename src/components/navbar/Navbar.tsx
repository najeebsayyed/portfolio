import { motion } from "framer-motion";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b border-white/5
        bg-background/70
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-background/60
      "
    >
      <div
        className="
    max-w-7xl
    mx-auto
    h-16
    lg:h-20
    px-5
    sm:px-6
    lg:px-8
    flex
    items-center
    justify-between
  "
      >
        <Logo />

        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <Button className="hidden lg:inline-flex">Download Resume</Button>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
