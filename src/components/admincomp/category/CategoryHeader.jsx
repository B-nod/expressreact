import React from 'react'

const CategoryHeader = ({ setIsChecked }) => {
    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
      };
      return (
       <>
    <div className={`w-full flex h-[50px] bg-[#1F67FE]`}>
          <div
            className="w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white
            border-opacity-20 "
          >
            <input
              type="checkbox"
              className="w-[20%] h-[16px] accent-[#216AF8]"
              onChange={handleChecked}
            />
            <h1 className={`uppercase text-sm font-inter font-bold text-white`}>
              uid
            </h1>
          </div>
  
    
          <div
            className="w-[50%] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] border-white
            border-opacity-20"
          >
            <h1 className="uppercase text-xs font-inter font-bold text-white">
              Category Name
            </h1>
          </div>
    
         
    
          <div className="w-[30%] h-[full] px-[10px] flex items-center gap-[5px]">
            <h1 className="uppercase text-xs font-inter font-bold text-white">
              action
            </h1>
          </div>
        </div>
       </>

        
      );
}

export default CategoryHeader