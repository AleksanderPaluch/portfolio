import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Reveal from "../Reveal/Reveal";
import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  console.log(isHovered);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-neutral"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: isHovered ? "90%" : " 85%",
              rotate: isHovered ? "6deg" : "-2deg",
            }}
            className="absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 translate-y-[20%] rounded-sm transition-all"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Reveal width="w-full">
            <div className="flex items-center gap-2">
              <h4 className="min-w-fit font-bold">{title}</h4>
              <div className="h-[1px] w-full bg-neutral"></div>
              <div className="flex items-center gap-2 text-lg">
                <a
                  className="transition-colors hover:text-primary"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="transition-colors hover:text-primary"
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImNewTab />
                </a>
              </div>
            </div>
          </Reveal>
          <p className="w-full text-xs font-semibold text-primary  text-justify">
            {tech.join("  -  ")}
          </p>
          <p className="text-sm cursor-pointer">
            {description} <span className="text-primary">Learn More {">"}</span>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
