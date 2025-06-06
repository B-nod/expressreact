import React from 'react'
import Card from '../../components/usercomp/Card'
import cover from '../../assests/cover.jpg'

const Hompage = () => {
  return (
    <>
    <div className="relative bg-gradient-to-r from-cyan-900 to-green-400 py-16 font-[sans-serif]">
      <div className="absolute inset-0">
        <img src={cover} alt="Background Image" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to Our</h1>
        <p className="text-lg md:text-xl mb-12">Experience excellence like never before with our exclusive products and services.</p>
        <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
      </div>
    </div>
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <Card/>
       
      </div>
    </div>

    {/* categories section */}


    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <Card/>
       
      </div>
    </div>

  
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">For you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <Card/>
         <Card/>
      </div>
    </div>
    </>
  )
}

export default Hompage
