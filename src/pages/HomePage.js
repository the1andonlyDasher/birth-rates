import React, { useState, lazy } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";



export default function Home_page() {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const item = {
    hidden: { scaleY: 1 },
    animate: { scaleY: 0 },
    exit: { scaleY: 1 },
  };
  const defaultItems = [...Array(5)];
  const [items] = useState(defaultItems);
  const Item = ({ index }) => (
    <motion.li
      key={index}
      variants={item}
      initial="hidden"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.75, delay: 0.2 + index * 0.2 }}
    ></motion.li>
  );
  return (
    <>

      {/* <motion.ul className="transition">
        {items.map((_, index) => (
          <Item key={index} index={index} />
        ))}
      </motion.ul> */}
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "tween", duration: 1 }}
        className="main"
      >

      </motion.main>
    </>
  );
}
