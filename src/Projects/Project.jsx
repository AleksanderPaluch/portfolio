import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
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

  useEffect(() => {
      if (isInView) {
        controls.start("visible")
      } else {
        controls.start("hidden")
      }
  })

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
        transition={{duration: 1}}
      >
        <div className="w-full h-80 bg-neutral">

        </div>


      </motion.div>
    </>
  );
};

export default Project;
