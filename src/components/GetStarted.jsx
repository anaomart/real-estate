import React from "react";

export default function GetStarted() {
  return (
    <section
      id="getStarted"
      className="wrapper flex h-[50vh] flex-col items-center justify-center   "
    >
      <div className=" flex w-full flex-col gap-6 rounded-2xl border-4 border-lightBlue bg-blue p-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-white md:text-4xl">
          Get started with Pixld
        </h2>
        <p className=" max-w-96 m-auto text-center text-sm text-gray-300">
          Subscribe and find super attractive price quotes from us. Find your
          residence soon
        </p>
        <button
          className=" m-auto rounded-lg  border-2 border-white bg-[#5a73d7] px-4
         py-2 text-white hover:scale-105 hover:border-black hover:bg-white hover:text-blue"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
