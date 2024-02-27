/** @format */
// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
interface sliderProps {
  focused: (value: number) => void;
}
function Slider({ focused }: sliderProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  useEffect(() => {
    focused(activeSlide);
  }, [activeSlide, focused]);
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
      onActiveIndexChange={(e) => setActiveSlide(e.activeIndex)}
      grabCursor={true}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide
        className={` ${
          activeSlide == 0
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg `}
      >
        دسر و شیرینی
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 1
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg `}
      >
        اسپرسو بار
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 2
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg  `}
      >
        ماکتیل
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 3
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg `}
      >
        چای و دمنوش
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 4
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg `}
      >
        آبمیوه طبیعی
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 5
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg  `}
      >
        شیک
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 6
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg `}
      >
        دمی بار
      </SwiperSlide>

      <SwiperSlide
        className={` ${
          activeSlide == 7
            ? "bg-darkbrown text-lightbrown"
            : " text-darkbrown bg-lightbrown"
        } w-full text-lg   flex justify-center items-center h-14  text-center rounded-lg`}
      >
        نوشیدنی های گرم
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
