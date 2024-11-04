import React from 'react'
import Clients from './clients/Clients'
import Activities from './activities/Activities'

const LastComonents = ({ isDarkmode }) => {
  return (
    <>
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-[30px] ">
      <Clients isDarkmode={isDarkmode} />
      <Activities isDarkmode={isDarkmode} />
    </div>
    </>
  )
}

export default LastComonents