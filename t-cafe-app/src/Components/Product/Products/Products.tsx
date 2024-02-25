/** @format */

import Product from "../Product";

function Products() {
  return (
    <div className=" w-full  h-fit max-h-[400px] overflow-y-scroll  px-2 rounded-tr-lg absolute bottom-0 rounded-tl-lg  flex-col">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Products;
