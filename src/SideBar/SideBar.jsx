import { motion } from "framer-motion";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky left-0 top-0 z-20 flex h-screen flex-col items-center bg-base-300 gap-4 lg:gap-14 pt-4 lg:pt-20"
    >
      <span className="hidden absolute top-2 left-3.5  font-bold md:text-4xl lg:block">
        A<span className="text-primary">.</span>{" "}
      </span>

      <SideBarLink value="about" href="#about">
        About
      </SideBarLink>
      <SideBarLink value="education" href="#education">
        Edu.
      </SideBarLink>
      <SideBarLink value="projects" href="#projects">
        Projects
      </SideBarLink>
      <SideBarLink value="experience" href="#experience">
        Exp.
      </SideBarLink>
      <SideBarLink value="contact" href="#contact">
        Contact
      </SideBarLink>
    </motion.nav>
  );
};

export default SideBar;
