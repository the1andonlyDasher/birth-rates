import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function ErrorPage() {
  const variants = {
    initial: {
      clipPath: "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
      filter: "sepia(1) hue-rotate(0deg)",
    },
    animate: {
      filter: [
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(90deg)",
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(65deg)",
        "sepia(1) hue-rotate(40deg)",
        "sepia(1) hue-rotate(55deg)",
        "sepia(1) hue-rotate(85deg)",
        "sepia(1) hue-rotate(55deg)",
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(77deg)",
        "sepia(1) hue-rotate(42deg)",
        "sepia(1) hue-rotate(65deg)",
        "sepia(1) hue-rotate(95deg)",
        "sepia(1) hue-rotate(45deg)",
        "sepia(1) hue-rotate(57deg)",
        "sepia(1) hue-rotate(63deg)",
        "sepia(1) hue-rotate(55deg)",
        "sepia(1) hue-rotate(75deg)",
        "sepia(0) hue-rotate(0deg)",
      ],
      clipPath: [
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 26% 0, 100% 0, 100% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 23% 100%, 23% 33%, 100% 33%, 100% 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 0 100%, 0 25%, 100% 25%, 100% 75%, 0 75%, 0 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 25% 100%, 25% 0, 74% 0, 75% 100%, 26% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 400%, 400% 300%, 400% 0, -100% -100%)",
      ],
    },
    exit: {
      clipPath: [
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 26% 0, 100% 0, 100% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 23% 100%, 23% 33%, 100% 33%, 100% 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 0 100%, 0 25%, 100% 25%, 100% 75%, 0 75%, 0 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        " polygon( 0% 0%, 0% 100%, 25% 100%, 25% 0, 74% 0, 75% 100%, 26% 100%, 25% 100%, 100% 100%, 100% 0% )",
        "polygon(-100% 300%, 400% 300%, 400% 0, -100% -100%)",
        "polygon( 0% 0%, 0% 100%, 8% 100%, 7% 13%, 39% 13%, 40% 76%, 7% 76%, 8% 100%, 100% 100%, 100% 0% )",
        "polygon(0 100%, 0 100%, 0 100%, 0 100%)",
      ],
    },
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
      onAnimationComplete={() => {
        window.completedAnimation.status = true;
      }}
    ></motion.li>
  );
  return (
    <>
      <motion.ul className="transition">
        {items.map((_, index) => (
          <Item key={index} index={index} />
        ))}
      </motion.ul>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "tween", duration: 1 }}
        className="main"
      >
        <section className="error__container">
          <Navbar main={false} />
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              velocity: "10",
              stiffness: 1000,
              restSpeed: 0.5,
              duration: 1,
              delay: 1,
            }}
          >
            <h1 data-before="...Error 404">Hier suchen Sie vergebens...</h1>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
}
