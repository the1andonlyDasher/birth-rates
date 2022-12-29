import React, { useState } from "react";
import { motion } from "framer-motion";
import Scrollbar from "../components/scrollbar.js";
import Navbar from "../components/navbar.js";

export default function DataPage() {
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
      <Navbar main={false} />
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
        <Scrollbar stiffness={50} restdelta={0.001} damping={20} />
        <section>
          <h2>Datenschutz</h2>
          <h3>Datenverwertung & Cookies</h3>
          <p>
            Für die Besucher von "Wicked Hand Design" verwenden wir keine
            Cookies und erheben keine personenbezogenen Daten.
          </p>
          <ul className="legal-list">
            <li>Es werden keine persönlichen Daten erhoben</li>
            <li>Es werden keine persönlichen Daten gespeichert</li>
            <li>Es weredn keine Informationen an Werbefimen weitergegeben</li>
            <li>
              Es werden keinbe Informationen über persönliche und
              verhaltensbezogene Trends gesammelt und ausgewertet
            </li>
          </ul>
        </section>
      </motion.main>
    </>
  );
}
