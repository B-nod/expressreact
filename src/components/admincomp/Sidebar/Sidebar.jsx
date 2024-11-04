import React, { useState } from "react";
import { MdLock } from "react-icons/md";
import {
  navBlocksData,
  navMasterData,
  navSupportsData,
} from "../../../utils/sidebarData";
import SideBarItem from "./SideBarItem";


const Sidebar = ({ showSideBar, isDarkmode }) => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  return (
    <div
      className={`${
        showSideBar
          ? "translate-x-0 sm:w-[300px] w-full px-[20px]"
          : "w-0 -translate-x-[350px]"
      } top-0 h-screen overflow-y-scroll  pb-[100px] fixed lg:static lg:pt-[20px] pt-[100px] ${
        isDarkmode ? "bg-[#112143]" : "bg-white"
      }
      ${
        showScrollbar ? "scrollbar" : "hideScrollbar"
      } transition-all duration-200 ease-in-out z-10`}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
    >
      <div className="w-full  flex flex-col  gap-[30px]">
        <div>
          <h1 className="text-sm text-gray-400 font-inter font-medium uppercase">
            Master
          </h1>
          <div className="w-full flex flex-col my-[10px]">
            {navMasterData.map((data, index) => (
              <SideBarItem key={index} data={data} isDarkmode={isDarkmode} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-sm text-gray-400 font-inter font-medium uppercase">
            Blocks
          </h1>
          <div className="w-full flex flex-col my-[10px]">
            {navBlocksData.map((data, index) => (
              <SideBarItem key={index} data={data} isDarkmode={isDarkmode} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-sm text-gray-400 font-inter font-medium uppercase">
            Supports
          </h1>
          <div className="w-full flex flex-col my-[10px]">
            {navSupportsData.map((data, index) => (
              <SideBarItem key={index} data={data} isDarkmode={isDarkmode} />
            ))}
          </div>
        </div>
        <div className="w-full h-[150px] bg-[#ADC7FC] rounded-lg flex justify-center items-center relative overflow-hidden">
          <div
            className=" cursor-pointer bg-[#0858F7] rounded-md 
          w-[120px] h-[45px] flex justify-center items-center gap-[2px]"
          >
            <MdLock className="text-white" size={22} />
            <h1 className="uppercase font-inter font-bold text-white text-sm">
              log out
            </h1>
          </div>
          <div
            className="absolute top-[10px] left-[10px] w-[50px] h-[50px] rounded-full bg-[#0858F7]
          opacity-50"
          ></div>
          <div
            className="absolute -bottom-[25px] -right-[25px] w-[80px] h-[80px] rounded-full bg-[#0858F7]
          opacity-50"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
