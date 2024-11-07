import React, { useState,useEffect } from "react";
import ProductItemHeader from "./ProductItemHeader";
import ProductItemCard from "./ProductItemCard";
import axios from 'axios';
import { API } from '../../../config';

const ProductItems = ({ isDarkmode }) => {
  const[product,setProduct] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(()=>{
    axios.get(`${API}/productlist`)
    .then(res=>{
      setProduct(res.data)
    })
    .catch(err=>console.log(err))
})


  return (
    <div className="w-full overflow-x-scroll scrollbar  ">
      <div className="lg:w-[1370px] w-[1170px]">
        <ProductItemHeader setIsChecked={setIsChecked} />
        {product.map((data, index) => (
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
