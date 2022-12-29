// src/App.js

import { useCycle, motion } from "framer-motion";
import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import GL from "./js/GL";

const Loader = () => {
  const [animate, cycle] = useCycle({ opacity: 1 }, { opacity: 0 });
  useEffect(() => {
    cycle();
  }, []);
  return (
    <motion.div animate={animate} className="loader__wrapper">
      <div className="loader"></div>
    </motion.div>
  );
};

export default function App() {
  return (
    <>
      <Router>
        <Loader />
        <GL />
        <AnimatedRoutes />
      </Router>
    </>
  );
}
