import React from "react";

export default function ContactUsBox({ icon, title, number, buttonText }) {
  return (
    <div className=" mx-auto flex w-[90%]  flex-col gap-4  rounded-md  border p-4 transition-all ease-in-out hover:scale-110 hover:shadow-xl md:w-fit">
      <div className="flex items-center  gap-8">
        <span className="rounded-md bg-lightBlue p-4 text-xl text-blue hover:bg-blue hover:text-white">
          {icon}
        </span>
        <div className="flex flex-col">
          <span className="font-semibold">{title}</span>
          <span className="text-sm text-gray-400">{number}</span>
        </div>
      </div>
      <button className="w-full  rounded-md bg-lightBlue py-2 font-semibold text-blue hover:scale-95 hover:bg-blue hover:text-white md:w-64 ">
        {buttonText}
      </button>
    </div>
  );
}
