import { motion } from "framer-motion";
import SideBarLink from "./SideBarLink";
import { useEffect, useState } from "react";


const SideBar = () => {

  const [isSelected, setSelected] = useState("")
  console.log('isSelected: ', isSelected);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper")

    const options = {trashhold: 0.1}


    const callback = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setSelected(entry.target.id)
        } 
      })
    }

    const observer = new IntersectionObserver (callback, options)

    sections.forEach((section) => observer.observe(section))
  })

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky left-0 top-0 z-20 flex h-screen flex-col items-center bg-base-300 gap-16 md:gap-[14px] lg:gap-12 pt-20 md:pt-16 lg:pt-24"
    >
      <span className=" absolute top-0 left-2 md:top-2 md:left-3.5 text-2xl  font-bold md:text-4xl lg:block">
        A<span className="text-primary">.</span>{" "}
      </span>

      <SideBarLink value="about" href="#about" isSelected={isSelected} setSelected={setSelected}>
        About
      </SideBarLink>
      <SideBarLink value="education" href="#education" isSelected={isSelected} setSelected={setSelected}>
        Edu.
      </SideBarLink>
      <SideBarLink value="projects" href="#projects" isSelected={isSelected} setSelected={setSelected}>
        Projects
      </SideBarLink>
      <SideBarLink value="experience" href="#experience" isSelected={isSelected} setSelected={setSelected}>
        Exp.
      </SideBarLink>
      <SideBarLink value="contact" href="#contact" isSelected={isSelected} setSelected={setSelected}>
        Contact
      </SideBarLink>
    </motion.nav>
  );
};

export default SideBar;
