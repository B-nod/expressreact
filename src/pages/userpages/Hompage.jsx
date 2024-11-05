import React from 'react'
import Card from '../../components/usercomp/Card'

const Hompage = () => {
  return (
    <>
    <div class="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
      <div class="absolute inset-0">
        <img src="https://readymadeui.com/cardImg.webp" alt="Background Image" class="w-full h-full object-cover opacity-50" />
      </div>

      <div class="relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to Our Premium Service</h1>
        <p class="text-lg md:text-xl mb-12">Experience excellence like never before with our exclusive products and services.</p>
        <button type="button" class="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
      </div>
    </div>
    <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Top Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <Card/>
       
      </div>
    </div>

    {/* categories section */}


    <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Categories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <Card/>
       
      </div>
    </div>

  
    <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">For you</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <Card/>
         <Card/>
      </div>
    </div>
    </>
  )
}

export default Hompage