import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SearchInput from "../Search/SearchInput";
import Map from "../Helpers/Map";
export default function Hero() {
  return (
    <div className="wrapper relative flex flex-col  items-center  justify-around gap-5 text-white  md:flex-row lg:h-[91vh] ">
      {/* Left */}

      <div className=" flex  flex-col items-center justify-center  gap-8 md:gap-12 ">
        {/* text */}
        <div className="relative z-10">
          <div className="absolute right-[28%] top-[-10%] z-[-1] h-16 w-16 rounded-full bg-orange-500"></div>
          <motion.h1
            initial={{ y: "2rem", opacity: "0" }}
            animate={{ y: 0, opacity: "1" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="text-5xl font-semibold leading-[4rem] md:text-6xl"
          >
            Discover <br /> Most Suitable <br /> Property
          </motion.h1>
        </div>
        <span className="text-sm text-gray-500">
          Find a variety of properties that suit you very easilty <br /> Forget
          all difficulties in finding a residence for you
        </span>
        {/* Search */}
        <div className="flex  items-center justify-between rounded-md border bg-white px-4 py-2 text-black">
          <HiLocationMarker className="text-blue" size={25} />
          <SearchInput
            type="text"
            className={
              " w-44 border-none p-2 text-base  outline-none  sm:w-[100%] lg:px-8"
            }
            rClassName={"md:ml-6 "}
          />
          <button className="button">Search</button>
        </div>
        {/* Counter */}
        <div className="flex items-center justify-between gap-4 md:gap-12  ">
          <div className="flex flex-col  items-center justify-center">
            <span className="flex w-fit gap-1 text-3xl leading-relaxed">
              <CountUp start={8800} end={9000} duration={4} />
              <span className="text-orange-400">+</span>
            </span>
            <span className="text-sm text-secondary">Premium Product</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex w-fit gap-1  text-3xl leading-relaxed">
              <CountUp start={1800} end={2000} duration={3} />
              <span className="text-orange-400">+</span>
            </span>
            <span className="text-sm text-secondary">Happy Customer</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex w-fit gap-1 text-center text-3xl leading-relaxed">
              <CountUp start={15} end={25} duration={2} />
              <span className="text-orange-400">+</span>
            </span>
            <span className="text-sm text-secondary">Awards Winning</span>
          </div>
        </div>
      </div>
      {/* RIght */}

      <div>
        <motion.img
          initial={{ y: "7rem", opacity: "0" }}
          animate={{ y: 0, opacity: "1" }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          src="./hero-image.png"
          alt="house"
          className="h-[30rem] w-[25rem] overflow-hidden rounded-tl-[15rem] rounded-tr-[15rem] border-8 border-[rgba(255,255,255,.12)] bg-cover object-cover
             md:mb-24 md:h-[35rem] md:w-[30rem]
          "
        />
      </div>
    </div>
  );
}
