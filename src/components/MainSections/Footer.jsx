import React from "react";

export default function Footer() {
  return (
    <footer className="wrapper item-center   flex flex-col items-center  gap-6  md:mt-0 md:h-auto md:flex-row md:justify-between">
      {/* Right */}
      <div className="m-auto flex flex-col gap-5 text-center md:m-0">
        <span className="text-3xl font-semibold text-blue md:text-4xl">
          Pixld
        </span>
        <p className="w-56 text-sm text-gray-400">
          Our vision is to make all people the best place to live for them.
        </p>
      </div>
      {/* Left */}
      <div className="m-auto flex flex-col items-start justify-start gap-3  text-center md:m-0 ">
        <span className=" m-auto  text-2xl font-bold text-black md:text-4xl">
          Information
        </span>
        <p className="m-auto w-56 text-sm text-gray-400 ">145 Cairo , Egypt</p>
        <div className=" flex  gap-4 ">
          <a href="./">Property</a>
          <a href="./">Services</a>
          <a href="./">Product</a>
          <a href="./">About Us</a>
        </div>
      </div>
    </footer>
  );
}
