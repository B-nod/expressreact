import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <>
    <div className="font-sans">
            <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
                <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="w-full lg:sticky top-0 flex gap-3">
                        <img src="https://readymadeui.com/images/product2.webp" alt="Product" className="w-3/4 rounded-lg object-cover" />

                        <div className="w-20 flex flex-col max-sm:mb-4 gap-3">
                            <img src="https://readymadeui.com/images/product1.webp" alt="Product1" className="w-full cursor-pointer rounded-lg" />
                            <img src="https://readymadeui.com/images/product6.webp" alt="Product2" className="w-full cursor-pointer rounded-lg" />
                            <img src="https://readymadeui.com/images/product7.webp" alt="Product3" className="w-full cursor-pointer rounded-lg" />
                            <img src="https://readymadeui.com/images/product3.webp" alt="Product4" className="w-full cursor-pointer rounded-lg" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl max-sm:text-2xl font-bold text-gray-800">Adjective Attire | T-shirt</h2>
                        <div className="mt-8">
                            <h3 className="text-gray-800 text-4xl max-sm:text-3xl font-bold">$12</h3>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">SM</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">MD</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">LG</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">XL</button>
                                <button type="button" className="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0">XXL</button>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Colors</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button type="button" className="w-12 h-11 bg-black border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                                <button type="button" className="w-12 h-11 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                                <button type="button" className="w-12 h-11 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                                <button type="button" className="w-12 h-11 bg-red-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"></button>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button type="button" className="flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white border border-gray-800 text-base rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 512 512">
                                    <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000"></path>
                                </svg>
                                Add to cart
                            </button>

                            <button type="button" className="flex items-center justify-center px-8 py-4 bg-transparent hover:bg-gray-50 text-gray-800 border border-gray-800 text-base rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                                Add to wishlist
                            </button>
                        </div>

                        <ul className="grid grid-cols-2 mt-10">
                            <li
                                className="text-gray-800 font-semibold text-base text-center bg-gray-50 py-3 px-4 border-b-2 border-gray-800 cursor-pointer">
                                Details</li>
                            <li className="text-gray-800 font-semibold text-base text-center py-3 border-b-2 px-4 cursor-pointer">
                                Description</li>
                        </ul>

                        <ul className="space-y-3 list-disc pl-4 text-sm text-gray-600 mt-8">
                            <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                            <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                            <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
                            <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail