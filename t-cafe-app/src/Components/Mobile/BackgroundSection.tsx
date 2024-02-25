/** @format */

import MobileBackground from "../../../public/MobileImages/MobileBackground.jpg";
import Logo from "../../../public/MobileImages/Logo.png";
import ContactLinks from "../ContactLinks/ContactLinks";
import Slider from "../Slider/Slider";
import Products from "../Product/Products/Products";

function BackgroundSection() {
  return (
    <div className=" h-screen w-full flex flex-col gap-y-14 relative">
      <div className=" w-full h-fit">
        <ContactLinks />
      </div>

      {/* {Background} */}
      <div className=" w-full h-full flex flex-col absolute -z-10 ">
        <img src={MobileBackground} className=" object-cover h-full w-full " />
        <div className=" bg-black/20 w-full h-full absolute"></div>
      </div>
      {/* {logo} */}
      <div className="  w-full select-none  h-fit flex justify-center ">
        <img src={Logo} width={288} height={288} className=" select-none" />
      </div>

      <div className=" w-full h-fit">
        <Slider />
      </div>

      <div className=" h-full w-full">
        <Products />
        <div className=" bg-gradient-to-t from-black w-full h-40 absolute bottom-0 "></div>
      </div>
    </div>
  );
}

export default BackgroundSection;
