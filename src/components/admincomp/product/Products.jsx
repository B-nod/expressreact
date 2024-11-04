import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import PaginationItem from "./PaginationItem";

import ProductItems from "./ProductItems";
import ProductsSort from "./ProductSort";

const Products = ({ isDarkmode }) => {
  return (
    <div
      className={`${
        isDarkmode ? "bg-[#112143]" : "bg-white"
      } w-full sm:p-[20px] p-[10px] py-[20px] rounded-md shadow-sm hover:shadow-lg transtion-all 
      duration-200 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center">
        <h1
          className={`font-inter sm:text-lg text-base ${
            isDarkmode ? "text-white" : "text-black"
          } font-bold`}
        >
          Best Selling Products
        </h1>
        <BsThreeDots
          className={`${isDarkmode ? "text-white" : "text-black"} opacity-60 
        sm:text-2xl text-lg cursor-pointer`}
        />
      </div>
      <ProductsSort isDarkmode={isDarkmode} />
      <ProductItems isDarkmode={isDarkmode} />
      <div
        className="w-full h-[60px] mt-[20px] flex justify-between sm:flex-row flex-col items-center
      gap-[10px]"
      >
        <h1
          className={`${
            isDarkmode ? "text-white" : "text-black"
          } font-inter text-sm font-normal`}
        >
          Showing <span className="font-bold">12</span> of{" "}
          <span className="font-bold">60</span> Results
        </h1>
        <div className="h-full flex items-center gap-[5px]">
          <PaginationItem isDarkmode={isDarkmode} Icon={RiArrowDropLeftLine} />
          <PaginationItem isDarkmode={isDarkmode} page={1} active />
          <PaginationItem isDarkmode={isDarkmode} page={2} />
          <PaginationItem isDarkmode={isDarkmode} page={3} />
          <PaginationItem isDarkmode={isDarkmode} page={"..."} />
          <PaginationItem isDarkmode={isDarkmode} page={45} />
          <PaginationItem isDarkmode={isDarkmode} Icon={RiArrowDropRightLine} />
        </div>
      </div>
    </div>
  );
};

export default Products;
