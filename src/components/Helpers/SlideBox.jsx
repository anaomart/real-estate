import React from "react";

export default function SlideBox({ desc, title, id, hidden, icon }) {
  return (
    <div className="xl rounded-md border p-4" id={id}>
      <div className="flex items-center justify-between pb-3 text-center ">
        <span
          className=" rounded-md bg-lightBlue p-2  "
          style={{ color: "#4066ff" }}
        >
          {icon}
        </span>
        <p className="text-base font-bold  text-primary ">{title}</p>
        <span className="cursor-pointer rounded-md bg-lightBlue p-2 text-blue hover:scale-105 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg>
        </span>
      </div>

      <p
        className={` text-sm text-gray-500 transition-all duration-200 ease-in-out  md:text-base ${
          hidden ? "h-0 scale-0" : " scale-100"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}
