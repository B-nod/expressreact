import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
    <div className="searchBox w-[400px] h-[40px] bg-[#f0f5ff] rounded-[6px] relative flex items-center py-[3px] px-[15px]">
        <IoSearch className='mr-2 text-lg text-[#292929]'/>
        <input type="text" name="search" id="search" placeholder='Search here.....' className='bg-transparent border-0 outline-none p-0 text-sm text-[#292929]' />

    </div>
    </>
  )
}

export default Search