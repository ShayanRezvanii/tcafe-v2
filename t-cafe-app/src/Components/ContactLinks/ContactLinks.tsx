/** @format */
import { Location } from "iconsax-react";
import { Call } from "iconsax-react";
import { Instagram } from "iconsax-react";
function ContactLinks() {
  return (
    <div className=" h-fit w-full">
      <div className=" text-white  gap-x-3 flex py-5 px-4">
        <a className=" cursor-pointer">
          <Call size={24} className=" text-lightbrown " />
        </a>
        <a className="cursor-pointer">
          <Location size={24} className=" text-lightbrown" />
        </a>
        <a className="cursor-pointer">
          <Instagram size={24} className=" text-lightbrown" />
        </a>
      </div>
    </div>
  );
}

export default ContactLinks;
