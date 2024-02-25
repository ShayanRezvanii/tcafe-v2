/** @format */

import React from "react";

function Product() {
  return (
    <div className=" bg-lightbrown rounded-lg h-20 mb-4 justify-end flex">
      <div className=" flex justify-between w-full">
        <div className="  h-full justify-end flex text-xs flex-col text-darkbrown px-3 py-2 w-fit">
          133T
        </div>
        <div className=" flex flex-col justify-center px-2 ">
          <h1 className=" text-right text-xl font-bold">اسپرسو</h1>
          <p className=" text-right text-sm">
            اسپرسو ویژه ویژهویژهویژهویژهویژه
          </p>
        </div>
      </div>
      <div className=" bg-darkbrown h-20 w-28 rounded-br-lg rounded-tr-lg"></div>
    </div>
  );
}

export default Product;
