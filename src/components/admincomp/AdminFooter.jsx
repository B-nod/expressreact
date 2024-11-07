import React from 'react'


const Adminfooter = ({ isDarkmode}) => {
  return (
    <>
         <div className="text-center mt-[50px]">
        <h1
          className={`font-inter font-medium text-base ${
            isDarkmode ? "text-[#B4B4B4]" : "text-[#605F74]"
          }`}
        >
          © All Rights Reserved by {" "}
          <a
            href="https://www.facebook.com/aung.myochit.98499"
            className="hover:text-[#2069FA] underline"
            target="_blink"
          >
             Eagle Trend
          </a>
        </h1>
      </div>
      <div className="mb-[100px]"></div>
    </>
  )
}

export default Adminfooter