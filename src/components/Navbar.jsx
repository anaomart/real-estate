import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Navbar({ white }) {
  const [openNav, setOpenNav] = React.useState(false);
  const NavLinks = [
    { title: "Properties", path: "/properties" },
    { title: "Residencies", path: "#residencies" },
    { title: "Our Value", path: "#ourValue" },
    { title: "Contact Us", path: "#contactUs" },
    { title: "Get Started", path: "#getStarted" },
  ];
  const variants = {
    start: {
      x: -1000,
    },
    end: { x: 50, transition: { duration: 0.1, delay: 1 } },
  };
  return (
    <div
      className={`  wrapper first-letter:hover relative top-0  z-20  flex items-center  justify-between   text-black md:justify-evenly lg:justify-between
    ${white ? "bg-white" : "bg-black"}
    `}
    >
      <div
        className={` w-28 items-start text-3xl font-bold tracking-widest ${
          white ? "text-black" : "text-white"
        } `}
      >
        <Link to={"/"}>Pixld</Link>
      </div>
      {/* Links by loop */}
      <motion.div
        variants={variants}
        // animate="end"
        // initial="start"
        className={` absolute right-8 top-10  mx-10 flex flex-col
            items-center gap-8 rounded-2xl bg-white p-12 text-center  text-gray-400
           transition-all  duration-500 md:relative md:right-0 md:top-0
                        md:flex md:flex-row md:bg-transparent md:p-0 md:text-secondary ${
                          openNav ? "flex" : "hidden"
                        }`}
      >
        {NavLinks.map((nav) =>
          nav.path.startsWith("/") ? (
            <Link
              className={`z-[1000]  hover:cursor-pointer hover:text-black md:hover:text-white 
            ${
              white ? "md:text-black md:hover:text-gray-400 " : "md:text-white"
            }`}
              to={nav.path}
              key={nav.title + Math.random()}
            >
              {nav.title}
            </Link>
          ) : (
            <a
              className={`z-[1000]  hover:cursor-pointer hover:text-black md:hover:text-white 
              ${
                white
                  ? "md:text-black md:hover:text-gray-400 "
                  : "md:text-white"
              }`}
              href={nav.path}
              key={nav.title + Math.random()}
            >
              {nav.title}
            </a>
          )
        )}
        <button className="button ">
          <Link to="/">Contact</Link>
        </button>
      </motion.div>
      {/* Menu Button */}
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setOpenNav((prev) => !prev)}
      >
        {openNav ? (
          <AiOutlineCloseCircle
            size={28}
            className={`${white ? "text-black " : "text-white"}`}
          />
        ) : (
          <BiMenuAltRight
            size={28}
            className={`${white ? "text-black " : "text-white"}`}
          />
        )}
      </div>
    </div>
  );
}
