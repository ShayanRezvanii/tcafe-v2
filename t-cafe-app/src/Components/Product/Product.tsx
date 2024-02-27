/** @format */

export interface productProps {
  title: string;
  description: string;
  price: number;
  image: string;
}
function Product({ title, description, price, image }: productProps) {
  return (
    <div className=" bg-lightbrown rounded-lg h-20 mb-6 justify-end flex">
      <div className=" flex justify-between w-full">
        <div className="  h-full justify-end flex text-sm flex-col text-darkbrown px-3 py-2 w-fit">
          {price}T
        </div>
        <div className=" flex flex-col justify-center px-2 ">
          <h1 className=" text-right text-xl font-bold">{title}</h1>
          <p className=" text-right text-sm">{description}</p>
        </div>
      </div>
      <div className=" bg-darkbrown h-20 w-28 rounded-br-lg rounded-tr-lg">
        <img src={image} />
      </div>
    </div>
  );
}

export default Product;
