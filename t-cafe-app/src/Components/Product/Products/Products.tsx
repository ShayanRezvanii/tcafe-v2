/**
 *
 * @format
 */

/** @format */

import { motion } from "framer-motion";
import data from "../../../../Data/products.json";
import Product from "../Product";

interface productProps {
  selectedCategory: number;
}
function Products({ selectedCategory }: productProps) {
  const findProduct = data.categories.find((item) => {
    return item.name === selectedCategory;
  });
  console.log(findProduct);

  return (
    <div className=" w-full  flex   flex-col   h-fit min-h-[400px] max-h-[400px] pb-20  overflow-y-scroll  px-6 rounded-tr-lg absolute bottom-0  rounded-tl-lg ">
      {findProduct?.items.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            key={index}
          >
            <Product
              title={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default Products;
