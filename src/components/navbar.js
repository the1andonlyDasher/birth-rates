//  src/compnents/navbar.js

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { gsap } from "gsap";
import { motion,  useCycle } from "framer-motion";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

const logo = require("../images/logo.webp");

// gsap.registerPlugin(ScrollToPlugin);

export default function Navbar({ main }) {
  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100)
        ) {
          return true;
        }
        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        return isShrunk;
      });
    };
    window.addEventListener("scroll", handler);
    //--------------------------------------------------------------------------------------- Mutation Observer
    // var observer = new MutationObserver(function (mutations) {
    //   mutations.forEach(function (mutation) {
    //     setChanged(true);
    //     console.log(changed);
    //   });
    // });

    // var config = { attributes: false, childList: true, characterData: false };

    // observer.observe(document.getElementById("data-scroll-content"), config);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const [isShrunk, setShrunk] = useState(false);
  const [click, setClick] = useState(false);

  const [animateItems, cycleItems] = useCycle({ opacity: 0 }, { opacity: 1 });
  const [cylceUl, cycle] = useCycle(
    {
      filter: [
        "sepia(1) hue-rotate(40deg)",
        `greyscale(${Math.random()})`,
        "sepia(1) hue-rotate(65deg)",
        "sepia(1) hue-rotate(40deg)",
        "sepia(1) hue-rotate(85deg)",
        `greyscale(${Math.random()})`,
        "sepia(0) hue-rotate(45deg)",
        "sepia(1) hue-rotate(77deg)",
        "sepia(0) hue-rotate(0deg)",
      ],
      clipPath: [
        "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
        "polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%, 0% 81%, 100% 81%, 100% 70%, 0% 70%, 1% 38%, 100% 38%, 100% 26%, 0% 26%, 0% 16%, 100% 16%, 100% 10%, 0% 10%)",
        "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
        "polygon(0% 100%, 100% 100%, 100% 50%, 0% 50%, 0% 91%, 100% 91%, 100% 66%, 0% 66%, 1% 22%, 100% 22%, 100% 26%, 0% 26%, 0% 11%, 100% 11%, 100% 10%, 0% 10%)",
        "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
        "polygon(0% 100%, 100% 100%, 100% 550%, 0% 55%, 0% 77%, 100% 77%, 100% 70%, 0% 70%, 1% 45%, 100% 45%, 100% 26%, 0% 26%, 0% 51%, 100% 51%, 100% 5%, 0% 5%)",
        "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
        "polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%, 0% 81%, 100% 81%, 100% 70%, 0% 70%, 1% 38%, 100% 38%, 100% 26%, 0% 26%, 0% 16%, 100% 16%, 100% 10%, 0% 10%)",
        "polygon(0 100%, 0 100%, 0 100%, 0% 100%)",
      ],
      duration: 0.25,
    },
    {
      opacity: 1,
      filter: [
        "sepia(1) hue-rotate(45deg)",
        `greyscale(${Math.random()})`,
        "sepia(1) hue-rotate(45deg)",
        `greyscale(${Math.random()})`,
        "sepia(1) hue-rotate(40deg)",
        "sepia(1) hue-rotate(40deg)",
        `greyscale(${Math.random()})`,
        "sepia(1) hue-rotate(85deg)",
        "sepia(0) hue-rotate(0deg)",
      ],
      clipPath: [
        "polygon(-100% 100%, 100% 100%, 100% 0, -100% -100%)",
        "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 100%, 26% 100%, 25% 100%, 100% 100%, 100% 0%)",
        "polygon(-100% 100%, 100% 100%, 100% 0, -100% -100%)",
        "polygon(0% 0%, 0 45%, 42% 45%, 43% 0, 69% 0, 69% 78%, 41% 78%, 41% 100%, 100% 100%, 100% 0)",
        "polygon(-100% 100%, 100% 100%, 100% 0, -100% -100%)",
        "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 100%, 26% 100%, 25% 100%, 100% 100%, 100% 0%)",
        "polygon(-100% 100%, 100% 100%, 100% 0, -100% -100%)",
        "polygon(0% 0%, 0 45%, 42% 45%, 43% 0, 69% 0, 69% 78%, 41% 78%, 41% 100%, 100% 100%, 100% 0)",
        "polygon(-100% 100%, 100% 100%, 100% 0, -100% -100%)",
      ],
      transition: {
        duration: 0.5,
      },
    }
  );
  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const sequence = async () => {
    if (click) {
      await cycle();
      return await cycleItems();
    } else {
      await cycleItems();
      return await cycle();
    }
  };

  const [cycle_closed, cycleClosed] = useCycle(
    {
      transform: [
        "translate(0, 0px) rotate(255deg)",
        "translate(0, 0px) rotate(0deg)",
        "translate(0, -5px) rotate(0deg)",
      ],
    },
    {
      transform: [
        "translate(0, -5px) rotate(0deg)",
        "translate(0, 0) rotate(0deg)",
        "translate(0, 0) rotate(225deg)",
      ],
    }
  );
  const [cycle_open, cycleOpen] = useCycle(
    {
      transform: [
        "translate(0px, 0px) rotate(-225deg)",
        "translate(0px, 0px) rotate(0deg)",
        "translate(0px, 5px) rotate(0deg",
      ],
    },
    {
      transform: [
        "translate(0px, 5px) rotate(0deg)",
        "translate(0px, 0px) rotate(0deg)",
        "translate(0px, 0px) rotate(-225deg)",
      ],
    }
  );

  const handleClick = () => {
    setClick(!click);
    cycleClosed();
    cycleOpen();
    sequence();
  };

  const closeMobileMenu = (e) => {
    cycleClosed();
    cycleOpen();
    sequence();
    setClick(!click);
    const attribute = e.currentTarget.getAttribute("href");
    // gsap.to(window, {
    //   duration: 0.55,
    //   scrollTo: `${attribute.substring(0)}`,
    //   ease: "Expo.easeOut",
    // });
  };

  const closeMobileMenuNoScroll = (e) => {
    cycleClosed();
    cycleOpen();
    sequence();
    setClick(!click);
  };

  const defaultItems = [...Array(4)];
  const texts = ["Home", "Leistungen", "Portfolio", "Kontakt"];
  const links = ["#landing", "#cards", "#projects", "#contact"];
  const [items] = useState(defaultItems);
  const Item = ({
    index,
    dtl,
    to,
    pageTarget,
    className,
    text,
    scroll,
    animate,
  }) =>
    animate ? (
      <motion.li
        key={index}
        variants={listItem}
        initial="hidden"
        animate={animateItems}
        transition={{ type: "tween", duration: 0.25, delay: 1 + index * 0.2 }}
        className="navItem"
      >
        <div
          data-link-text={dtl}
          scroll={`${scroll ? true : false}`}
          href={to}
          data-attribute-page-target={pageTarget}
          className={className}
          onClick={closeMobileMenu}
        >
          {text}
        </div>
      </motion.li>
    ) : (
      <li key={index} className="navItem">
        <div
          data-link-text={dtl}
          scroll={`${scroll ? true : false}`}
          href={to}
          data-attribute-page-target={pageTarget}
          className={className}
          onClick={closeMobileMenu}
        >
          {text}
        </div>
      </li>
    );

  return (
    <>
      <motion.nav
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        className={isShrunk ? "navbar shrunk" : "navbar"}
      >
        <div className="navbar__container">
          <NavLink
            to="/"
            className="navbar__logo"
            aria-label="Home"
            onClick={!click ? null : closeMobileMenuNoScroll}
          >
            <img src={logo} alt="Firmenlogo von Wicked Hand Design" />
          </NavLink>
          <div id="burgermenu" onClick={handleClick}>
            <motion.div
              animate={cycle_closed}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeIn",
              }}
            ></motion.div>
            <motion.div
              animate={cycle_open}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeIn",
              }}
            ></motion.div>
          </div>
          {main ? (
            <ul className="nav-items-desktop">
              {texts.map((_, index, item) => (
                <Item
                  animate={false}
                  key={index}
                  index={index}
                  scroll={true}
                  to={links[index]}
                  text={item[index]}
                  pageTarget={item[index]}
                  dtl={item[index]}
                  onClick={() => {
                    sequence();
                    setClick(!click);
                  }}
                  className="nav-link"
                />
              ))}
            </ul>
          ) : (
            <ul className="nav-items-desktop">
              <li className="navItem">
                <Link
                  data-link-text="Home"
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    sequence();
                    setClick(!click);
                  }}
                >
                  Home
                </Link>
              </li>
            </ul>
          )}
          {main ? (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={cylceUl}
              transition={{
                type: "spring",
                velocity: "100",
                stiffness: 1000,
                restSpeed: 0.5,
                delay: click ? 0 : 0.5,
              }}
              className="nav-items-mobile"
            >
              {texts.map((_, index, item) => (
                <Item
                  animate={true}
                  key={index}
                  index={index}
                  scroll={true}
                  to={links[index]}
                  text={item[index]}
                  pageTarget={item[index]}
                  dtl={item[index]}
                  onClick={closeMobileMenu}
                  className="nav-link"
                />
              ))}
            </motion.ul>
          ) : (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={cylceUl}
              transition={{
                type: "spring",
                velocity: "100",
                stiffness: 1000,
                restSpeed: 0.5,
                delay: click ? 0 : 0.5,
              }}
              className="nav-items-mobile"
            >
              <li className="navItem">
                <Link
                  data-link-text="Home"
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    sequence();
                    setClick(!click);
                  }}
                >
                  Home
                </Link>
              </li>
            </motion.ul>
          )}
        </div>
      </motion.nav>
      <motion.nav className="instant-nav">
        <ul>
          <li><a aria-label="call-button" href="tel:015730682333"><FontAwesomeIcon  icon={faPhone} /></a></li>
          <li><a aria-label="message-button" href="#contact"><FontAwesomeIcon  icon={faMessage} /></a></li>
        </ul>
      </motion.nav>
    </>
  );
}
