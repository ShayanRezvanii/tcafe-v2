/** @format */

export interface productProps {
  title: string;
  description: string;
  price: number;
  image: string;
}
function Product({ title, description, price, image }: productProps) {
  return (
    <div className=" bg-lightbrown rounded-lg h-20 my-3 justify-end flex">
      <div className=" bg-darkbrown h-20 w-28 rounded-br-lg rounded-tr-lg">
        <img src={image} />
      </div>
      <div className=" flex justify-between w-full">
        <div className=" flex flex-col justify-center px-2 ">
          <h1 className=" text-right  text-base lg:text-lg text-nowrap font-bold">
            {title}
          </h1>
          <p className=" text-right text-xs md:text-sm">{description}</p>
        </div>
        <div className="  h-full justify-end flex text-sm flex-col text-darkbrown px-3 py-2 w-fit">
          {price}T
        </div>
      </div>
    </div>
  );
}

export default Product;
