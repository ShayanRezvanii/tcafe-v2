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
    <div className=" w-full flex flex-col sm:grid sm:grid-cols-2 sm:gap-4   xl:grid-cols-3 xl:gap-3 h-full sm:h-fit px-6 sm:px-0  ">
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
