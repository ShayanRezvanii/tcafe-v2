/** @format */

import MobileBackground from "../../../public/MobileImages/MobileBackground.jpg";
import Logo from "../../../public/MobileImages/Logo.png";
import ContactLinks from "../ContactLinks/ContactLinks";
import Slider from "../Slider/Slider";
import Products from "../Product/Products/Products";
import { useState } from "react";

function BackgroundSection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className=" h-screen w-full  flex flex-col   overflow-y-hidden relative">
      <div className=" w-full  h-fit">
        <ContactLinks />
      </div>

      {/* {Background} */}
      <div className=" w-full h-full flex flex-col absolute -z-10 ">
        <img src={MobileBackground} className=" object-cover h-full w-full " />
        <div className=" bg-black/20 w-full h-full absolute"></div>
      </div>
      {/* {logo} */}
      <div className="  w-full select-none mb-3 object-cover   h-fit flex items-center justify-center ">
        <img
          src={Logo}
          width={218}
          height={218}
          className=" object-fill select-none"
        />
      </div>
      <div className="   w-full sm:px-20 lg:px-40  ">
        <div className=" w-full h-fit  py-3 relative   ">
          <Slider focused={(e) => setActiveSlide(e)} />
        </div>
        <div className="  h-full md:w-full    min-h-[400px] max-h-screen overflow-y-scroll   ">
          <Products selectedCategory={activeSlide} />
          {/* <div className=" bg-gradient-to-t from-black  w-full h-20 absolute bottom-0 "></div> */}
        </div>
      </div>
    </div>
  );
}

export default BackgroundSection;
