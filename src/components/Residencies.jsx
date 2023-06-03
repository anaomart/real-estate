import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../assets/slider.json";
import { Link } from "react-router-dom";
export default function Residencies() {
  const path = [6192422, 7416414, 7319302, 7405100];
  return (
    <section id="residencies" className="wrapper">
      <div className="w-ful px-8">
        <div className="mb-8">
          <p className="text-2xl font-semibold text-orange-400 ">
            {" "}
            Best Choices
          </p>
          <p className="text-4xl font-bold text-primary">
            {" "}
            Popular Residencies
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
          {data.map((card, i) => (
            <Link
              to={"/property/" + path[i]}
              className="flex cursor-pointer flex-col items-center gap-2
            rounded-3xl   py-4 transition-all duration-300 
            hover:scale-105 hover:bg-lightBlue lg:items-start"
            >
              <img src={card.image} alt="test" className="m-auto flex w-64" />
              <span className="flex items-center justify-center gap-1  px-4 ">
                <span className=" text-orange-400">$</span>
                <span className="flex text-xl font-semibold text-gray-600">
                  {card.price}
                </span>
              </span>
              <p className="m-auto text-center text-2xl font-bold">
                {card.name}
              </p>
              <p className="w-72 text-xs text-gray-300">{card.detail}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
