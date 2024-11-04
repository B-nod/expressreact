import React, { useState } from "react";

import ProductItemHeader from "./ProductItemHeader";
import ProductItemCard from "./ProductItemCard";
import { productItems } from "../../../utils/data";

const ProductItems = ({ isDarkmode }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full overflow-x-scroll scrollbar  ">
      <div className="lg:w-[1370px] w-[1170px]">
        <ProductItemHeader setIsChecked={setIsChecked} />
        {productItems.map((data, index) => (
          <ProductItemCard
            key={index}
            isDarkmode={isDarkmode}
            data={data}
            index={index}
            isChecked={isChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
