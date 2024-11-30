import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";

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
              rotate: isHovered ? "8deg" : "0deg"
            }}
            className="absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 translate-y-[20%] rounded-sm transition-all"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Project;
