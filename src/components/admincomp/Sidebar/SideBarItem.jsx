import React, { useState } from "react";
import { MdDashboard, MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBarItem = ({
  data: { Icon, title, details, items, note, link },
  isDarkmode,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`w-full h-[50px]  rounded-lg flex justify-between items-center cursor-pointer
        transition-all duration-200 ease-in-out px-[10px] ${
          isDarkmode
            ? "bg-[#112143] hover:bg-blue-500"
            : "bg-white hover:bg-[#F1F1F1]"
        } `}
        onClick={() => setShowDetail(!showDetail)}
      >
        <div className="flex items-center h-full gap-[7px] ">
          <Icon
            size={22}
            className={`${
              showDetail
                ? "text-[#0858F7]"
                : isDarkmode
                ? "text-[#f5f5f5]"
                : "text-gray-600"
            }`}
          />
          <h1
            className={`font-inter text-sm font-medium ${
              showDetail
                ? "text-[#0858F7]"
                : isDarkmode
                ? "text-[#f5f5f5]"
                : "text-gray-600"
            }`}
          >
            {title}
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          {note != "" && (
            <div
              className={`px-[5px] py-[2px] text-[8px] text-white font-inter font-bold rounded-sm
            ${note == "HOT" ? "bg-[#0858F7]" : "bg-red-600"}`}
            >
              {note}
            </div>
          )}
          {details.length > 0 && (
            <MdArrowRight
              size={25}
              className={`${showDetail ? "text-[#0858F7]" : "text-gray-600"} ${
                showDetail ? "rotate-90" : "rotate-0"
              } transition-all duration-200 ease-in-out `}
            />
          )}
        </div>
      </div>
      {showDetail && details.length > 0 && (
        <div className="ml-[20px] border-l-[1px] border-black  ">
          {details.map((detail, index) => (
               <Link
               to={link && link[index] ? link[index] : "#"} // Links each detail to its corresponding path
               key={index}
               className={`pl-[20px] h-[40px] flex items-center font-inter font-normal text-sm 
                 hover:border-r-[3px] hover:border-[#0858F7] cursor-pointer 
                 transition-all duration-200 ease-in-out ${
                   isDarkmode
                     ? "hover:bg-blue-500 text-[#f5f5f5]"
                     : "hover:bg-[#F1F1F1] text-gray-600"
                 }`}
             >
              {detail}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarItem;
