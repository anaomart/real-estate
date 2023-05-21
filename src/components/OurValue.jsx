import React, { useState } from "react";
import SlideBox from "./SlideBox";
import { HiShieldCheck } from "react-icons/hi";
import { MdAnalytics } from "react-icons/md";
import { MdCancel } from "react-icons/md";

export default function OurValue() {
  const [openedBoxId, setOpenedBoxId] = useState("-1");
  const topics = [
    {
      title: "Best interest rates on the market",
      desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      id: "",
      icon: <HiShieldCheck />,
    },
    {
      title: "Prevent unstable prices",
      desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      id: "",
      icon: <MdCancel />,
    },
    {
      title: "Best price on the market",
      desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      id: "",
      icon: <MdAnalytics />,
    },
  ];

  return (
    <section
      id="ourValue"
      className="wrapper flex  flex-1 flex-col items-center justify-between  gap-4 md:flex-row"
    >
      {/* Left */}
      <div className="  w-full ">
        <img
          src="./value.png"
          alt="hotel"
          className="mx-auto  h-[544px] w-[464px] rounded-tl-full rounded-tr-full border-8 md:mx-0"
        />
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-2 md:gap-4">
        <h2 className="text-xl font-semibold text-orange-400 md:text-2xl ">
          Our Value
        </h2>
        <p className=" text-3xl font-bold text-primary md:text-4xl ">
          Value we give yo you
        </p>
        <p className="w-4/5 text-sm text-gray-500 md:text-base ">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <div className=" flex flex-col justify-between gap-4">
          {topics.map((topic, id) => (
            <div
              key={id}
              onClick={() =>
                setOpenedBoxId((prev) => {
                  console.log(prev);
                  if (openedBoxId === id) return "-1";
                  else return id;
                })
              }
            >
              <SlideBox
                icon={topic.icon}
                title={topic.title}
                desc={topic.desc}
                id={id}
                hidden={openedBoxId === id ? false : true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
