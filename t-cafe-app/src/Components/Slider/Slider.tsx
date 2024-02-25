/** @format */
// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
function Slider() {
  return (
    <Swiper
      effect={"coverflow"}
      spaceBetween={55}
      slideToClickedSlide={true}
      slidesPerView={1.9}
      centeredSlides
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      grabCursor={true}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide className=" w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg bg-lightbrown text-darkbrown">
        کافه
      </SwiperSlide>

      <SwiperSlide className=" w-full  text-lg flex justify-center items-center h-14  text-center rounded-lg  bg-lightbrown text-darkbrown">
        کافه
      </SwiperSlide>

      <SwiperSlide className=" w-full text-lg flex justify-center items-center h-14  text-center rounded-lg  bg-lightbrown text-darkbrown">
        کافه
      </SwiperSlide>

      <SwiperSlide className=" w-full  text-lg flex justify-center items-center h-14  text-center rounded-lg  bg-lightbrown text-darkbrown">
        کافه
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
