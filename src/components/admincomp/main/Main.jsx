import React from "react";
import { mainItemData } from "../../../utils/data";


import MainHeader from "./MainHeader";
import MainItemCard from "./MainItemCard";
import Products from "../product/Products";
import AdminFooter from "../AdminFooter";

const Main = ({ isDarkmode }) => {
  return (
    <div
      className={`w-full h-screen ${
        isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
      } transition-all duration-200 ease-in-out sm:p-[20px] p-[10px] overflow-scroll scrollbar `}
    >
      <MainHeader isDarkmode={isDarkmode} />
      <div className="w-full grid md:grid-cols-2 grid-cols-1 my-[30px] gap-[20px]">
        {mainItemData.map((data, index) => (
          <MainItemCard key={index} data={data} />
        ))}
      </div>
      <Products isDarkmode={isDarkmode} />
      

      
    </div>
  );
};

export default Main;
