import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../pages/HomePage"));
const Imprint = lazy(() => import("../pages/ImprintPage"));
const Data = lazy(() => import("../pages/DataPage"));
const Error = lazy(() => import("../pages/ErrorPage"));

const logo = require("../images/logo.webp");

function AnimatedRoutes(props) {
  const location = useLocation();

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/DataPage" element={<Data />}></Route>
            <Route exact path="/ImprintPage" element={<Imprint />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
