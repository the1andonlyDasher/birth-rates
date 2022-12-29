import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Scrollbar = ({ stiffness, damping, restdelta }) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: stiffness,
    damping: damping,
    restDelta: restdelta,
  });
  return <motion.div className="progress-bar" style={{ scaleY }} />;
};

export default Scrollbar;
