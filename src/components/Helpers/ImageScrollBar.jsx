// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ImageScrollBar({ data }) {
  const sliderRef = useRef();

  const handleSlidePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };
  const handleSlideNext = () => {
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className=" relative m-auto  ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={20}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        ref={sliderRef}
      >
        {
          <div>
            {data.map((item) => (
              <SwiperSlide>
                <img
                  src={item.url}
                  alt={"property slide"}
                  className="h-[500px] w-full object-contain md:object-cover"
                />
              </SwiperSlide>
            ))}
          </div>
        }
      </Swiper>
      <div className="absolute top-1/2 z-50 my-auto flex h-0 w-full -translate-y-1/2 items-center justify-between bg-red-500 ">
        <button onClick={handleSlidePrev}>
          <FaArrowLeft size={54} className="opacity-0 " />
        </button>
        <button onClick={handleSlideNext}>
          {" "}
          <FaArrowLeft size={84} className=" opacity-0" />
        </button>
      </div>
    </div>
  );
}
