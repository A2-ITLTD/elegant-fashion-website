import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoHeartOutline } from "react-icons/io5";


import mentshirt1 from '../ItemsImage/mentshirt1.jpg';
import mentshirt2 from '../ItemsImage/mentshirt2.jpg';
import mentshirt3 from '../ItemsImage/mentshirt3.jpg';
import mentshirt4 from '../ItemsImage/mentshirt4.jpg';
import mentshirt5 from '../ItemsImage/mentshirt5.jpg';
import mentshirt6 from '../ItemsImage/mentshirt6.jpg';

import womentshirt1 from '../ItemsImage/womentshirt1.png';
import womentshirt2 from '../ItemsImage/womentshirt2.jpg';
import womentshirt3 from '../ItemsImage/womentshirt3.jpg';
import womentshirt4 from '../ItemsImage/womentshirt4.jpg';
import womentshirt5 from '../ItemsImage/womentshirt5.jpg';
import womentshirt6 from '../ItemsImage/womentshirt6.jpg';

import kidtshirt1 from '../ItemsImage/kidtshirt1.jpg';
import kidtshirt2 from '../ItemsImage/kidtshirt2.jpg';
import kidtshirt3 from '../ItemsImage/kidtshirt3.jpg';
import kidtshirt4 from '../ItemsImage/kidtshirt4.jpg';
import kidtshirt5 from '../ItemsImage/kidtshirt5.jpg';
import kidtshirt6 from '../ItemsImage/kidtshirt6.jpg';


const ItemTshirt = () => {

    return (
        <div className="mt-14 px-5 md:px-10 lg:px-24" >
           <div className='text-center text-5xl font-semibold pb-10'>
                <h1>T-Shirts</h1>
            </div>
            <Tabs>
                <TabList className="flex flex-col md:flex-row justify-center text-current gap-4 pb-10">
                <Tab className="bg-[#1D242B] text-white p-3 md:p-4 lg:py-2 lg:px-8 text-sm md:text-base lg:text-xl font-extrabold " selectedClassName="bg-yellow-500 text-black ">Men</Tab>
                <Tab className="bg-[#1D242B] text-white p-3 md:p-4 lg:py-2 lg:px-8 text-sm md:text-base lg:text-xl font-extrabold " selectedClassName="bg-yellow-500 text-black ">Women</Tab>
                <Tab className="bg-[#1D242B] text-white p-3 md:p-4 lg:py-2 lg:px-8 text-sm md:text-base lg:text-xl font-extrabold " selectedClassName="bg-yellow-500 text-black ">Kids</Tab>
                </TabList>

                {/* Men */}
                <TabPanel>
                    <Carousel
                    autoPlay
                    interval={2000}
                    infiniteLoop
                    showThumbs={false}
                    className='w-full'
                    >
                        {/* 1st slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={mentshirt1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Mint T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={mentshirt2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={mentshirt3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Sky Blue T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
            
                        </div>
                        {/* 2nd slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={mentshirt4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Maroon T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={mentshirt5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={mentshirt6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Grey T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </TabPanel>
                {/* women */}
                <TabPanel>
                <Carousel
                    autoPlay
                    interval={2000}
                    infiniteLoop
                    showThumbs={false}
                    className='w-full'
                    >
                        {/* 1st slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womentshirt1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Custom White T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womentshirt2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womentshirt3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Mint T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
            
                        </div>
                        {/* 2nd slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womentshirt4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womentshirt5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womentshirt6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Red T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>    
                </TabPanel>

                {/* kids */}
                <TabPanel>
                <Carousel
                    autoPlay
                    interval={2000}
                    infiniteLoop
                    showThumbs={false}
                    className='w-full'
                    >
                        {/* 1st slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidtshirt1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Yellow Stripe T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidtshirt2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Blue Stripe T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidtshirt3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
            
                        </div>
                        {/* 2nd slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidtshirt4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Girls T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidtshirt5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Bee T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidtshirt6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Red T-Shirt</h1>
                                    <h1 className='font-bold'>$100</h1>
                                </div>
                                <div className='flex justify-evenly text-xs'>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                    <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <IoHeartOutline className='text-4xl' />
                                    <button className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ItemTshirt;