import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const NavLinks = [
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
    <div className=" wrapper   top-0  z-50 flex items-center justify-between text-white  md:justify-evenly lg:justify-between">
      <div className=" w-28 items-start text-3xl font-bold tracking-widest ">
        Pixld
      </div>
      {/* Links by loop */}
      <motion.div
        variants={variants}
        // animate="end"
        // initial="start"
        className={` absolute right-8 top-10 z-[1000] mx-10 flex flex-col
            items-center gap-8 rounded-2xl bg-white p-12 text-center  text-gray-400
           transition-all  duration-500 md:relative md:right-0 md:top-0
                        md:flex md:flex-row md:bg-transparent md:p-0 md:text-secondary ${
                          openNav ? "flex" : "hidden"
                        }`}
      >
        {NavLinks.map((nav) => (
          <a
            className="z-[999] hover:cursor-pointer hover:text-black md:hover:text-white"
            href={nav.path}
            key={nav.title + Math.random()}
          >
            {nav.title}
          </a>
        ))}
        <button className="button ">
          <a href="/">Contact</a>
        </button>
      </motion.div>
      {/* Menu Button */}
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setOpenNav((prev) => !prev)}
      >
        {openNav ? (
          <AiOutlineCloseCircle size={28} />
        ) : (
          <BiMenuAltRight size={28} />
        )}
      </div>
    </div>
  );
}
