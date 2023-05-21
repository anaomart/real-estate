import React from "react";
import ContactUsBox from "./ContactUsBox";
import { FaPhoneAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function ContactUs() {
  const contacts = [
    {
      title: "Call",
      number: "01060781947",
      buttonText: "Call Now",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Chat",
      number: "01060781947",
      buttonText: "Chat now",
      icon: <BsChatDotsFill />,
    },
    {
      title: "Video Call",
      number: "01060781947",
      buttonText: "Video  Now",
      icon: <BsFillCameraVideoFill />,
    },
    {
      title: "Message",
      number: "01060781947",
      buttonText: "Message Now",
      icon: <BsChatSquareDotsFill />,
    },
  ];
  return (
    <section
      id="contactUs"
      className="wrapper  flex flex-col items-center justify-between gap-8 px-4 md:flex-row"
    >
      <div className="   flex flex-1 flex-col gap-4 ">
        <h2 className="text-xl font-semibold text-orange-400 md:text-2xl ">
          Our Contact Us{" "}
        </h2>
        <p className=" text-3xl font-bold text-primary md:text-4xl  ">
          Easy to contact us{" "}
        </p>
        <p className="text-sm text-gray-500 ">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <div className=" flex flex-wrap gap-4  ">
          {contacts.map(({ title, number, icon, buttonText }) => (
            <ContactUsBox
              icon={icon}
              title={title}
              number={number}
              buttonText={buttonText}
            />
          ))}
        </div>
      </div>
      {/* Right */}
      <div className="  order-first flex-1 md:order-last  ">
        <img
          src="./contact.jpg"
          alt="nice room"
          className=" mx-auto  h-[544px] w-[464px] rounded-tl-full rounded-tr-full border-8"
        />
      </div>
    </section>
  );
}
