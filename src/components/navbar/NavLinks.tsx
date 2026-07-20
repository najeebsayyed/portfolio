import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-10">
      {links.map((link, index) => (
        <NavItem key={link.label} {...link} active={index === 0} />
      ))}
    </div>
  );
}
