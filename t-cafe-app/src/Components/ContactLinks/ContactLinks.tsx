/** @format */
import { Location } from "iconsax-react";
import { Call } from "iconsax-react";
import { Instagram } from "iconsax-react";
function ContactLinks() {
  return (
    <div className=" h-fit w-full">
      <div className=" text-white  gap-x-3 flex py-5 px-4">
        <a
          href="tel:02122432330"
          rel="noreferrer"
          target="_blank"
          className=" cursor-pointer"
        >
          <Call
            size={24}
            className=" text-lightbrown hover:text-darkbrown duration-200"
          />
        </a>
        <a
          href="https://maps.app.goo.gl/CCNhb4J7WHXr89Nt7"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer"
        >
          <Location
            size={24}
            className=" text-lightbrown hover:text-darkbrown duration-200"
          />
        </a>
        <a
          href="https://instagram.com/_u/tcafe.shop"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer"
        >
          <Instagram
            size={24}
            className=" text-lightbrown hover:text-darkbrown duration-200"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactLinks;
