import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoHeartOutline } from "react-icons/io5";


import menpolo1 from '../ItemsImage/menpolo1.jpg';
import menpolo2 from '../ItemsImage/menpolo2.jpg';
import menpolo3 from '../ItemsImage/menpolo3.jpg';
import menpolo4 from '../ItemsImage/menpolo4.jpg';
import menpolo5 from '../ItemsImage/menpolo5.jpg';
import menpolo6 from '../ItemsImage/menpolo6.jpg';

import womenpolo1 from '../ItemsImage/womenpolo1.jpg';
import womenpolo2 from '../ItemsImage/womenpolo2.jpg';
import womenpolo3 from '../ItemsImage/womenpolo3.jpg';
import womenpolo4 from '../ItemsImage/womenpolo4.jpg';
import womenpolo5 from '../ItemsImage/womenpolo5.jpg';
import womenpolo6 from '../ItemsImage/womenpolo6.jpg';

import kidpolo1 from '../ItemsImage/kidpolo1.jpg';
import kidpolo2 from '../ItemsImage/kidpolo2.jpg';
import kidpolo3 from '../ItemsImage/kidpolo3.png';
import kidpolo4 from '../ItemsImage/kidpolo4.jpg';
import kidpolo5 from '../ItemsImage/kidpolo5.png';
import kidpolo6 from '../ItemsImage/kidpolo6.jpg';


import menleggings1 from '../ItemsImage/menleggings1.png';
import menhoodie1 from '../ItemsImage/menhoodie1.jpg';
import mencargo1 from '../ItemsImage/mencargo1.jpg';
import menshirt1 from '../ItemsImage/menshirt1.jpg';
import mendenim1 from '../ItemsImage/mendenim1.jpg';
import menshorts1 from '../ItemsImage/menshorts1.jpg';
import mentrouser1 from '../ItemsImage/mentrouser1.jpg';
import mentshirt1 from '../ItemsImage/mentshirt1.jpg';
import menwinter1 from '../ItemsImage/menwinter1.jpeg';
import menjeans1 from '../ItemsImage/menjeans1.png';
import { Link } from 'react-router-dom';

const ItemPolo = () => {

    return (
        <div className="mt-14 px-5 md:px-10 lg:px-24" >
           <div className='text-center text-5xl font-semibold pb-10'>
                <h1>Polo Shirts</h1>
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
                                <img src={menpolo1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Polo</h1>
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
                                <img src={menpolo2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Polo</h1>
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
                                <img src={menpolo3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Blue Polo</h1>
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
                                <img src={menpolo4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Halfsilk POlo</h1>
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
                                <img src={menpolo5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Polo</h1>
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
                                <img src={menpolo6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Polo</h1>
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
                                <img src={womenpolo1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Polo</h1>
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
                                <img src={womenpolo2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Blue Polo</h1>
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
                                <img src={womenpolo3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Lavender Polo</h1>
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
                                <img src={womenpolo4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Red Polo</h1>
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
                                <img src={womenpolo5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Blue</h1>
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
                                <img src={womenpolo6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Dark Lavender Polo</h1>
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
                                <img src={kidpolo1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Polo</h1>
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
                                <img src={kidpolo2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Orange Polo</h1>
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
                                <img src={kidpolo3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Pink Polo</h1>
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
                                <img src={kidpolo4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Blue Polo</h1>
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
                                <img src={kidpolo5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Polo</h1>
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
                                <img src={kidpolo6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Polo</h1>
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
            <div className='w-full text-center text-3xl font-semibold  opacity-70 mt-20 border-none'>
                <button className='hover:underline'> View More From</button>
            </div>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-5 gap-10 px-5 md:px-24'> 
                <Link to="/Shirt" className='relative w-40 h-40 rounded-full'>
                    <img src={menshirt1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-12">Shirt</h1>
                </Link>

                <Link to="/Tshirt" className='relative w-40 h-40 rounded-full'>
                    <img src={mentshirt1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-6">T-Shirt</h1>
                </Link>

                <Link to="/Leggings" className='relative w-40 h-40 rounded-full'>
                    <img src={menleggings1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-2xl font-bold bottom-10 left-6">Leggings <br /> Pants</h1>
                </Link>

                <Link to="/Winter" className='relative w-40 h-40 rounded-full'>
                    <img src={menwinter1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-10 left-8">Winter <br /> Wear</h1>
                </Link>

                <Link to="/Denim" className='relative w-40 h-40 rounded-full'>
                    <img src={mendenim1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-8">Denim</h1>
                </Link>

                {/* 2nd row  */}
                <Link to="/Jeans" className='relative w-40 h-40 rounded-full'>
                    <img src={menjeans1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-8">Jeans</h1>
                </Link>

                <Link to="/Shorts" className='relative w-40 h-40 rounded-full'>
                    <img src={menshorts1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-8">Shorts</h1>
                </Link>

                <Link to="/Trouser" className='relative w-40 h-40 rounded-full'>
                    <img src={mentrouser1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-5">Trousers</h1>
                </Link>

                <Link to="/Cargo"  className='relative w-40 h-40 rounded-full'>
                    <img src={mencargo1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-8">Cargo</h1>
                </Link>

                <Link to="/Hoodie" className='relative w-40 h-40 rounded-full'>
                    <img src={menhoodie1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-xl font-bold bottom-14 left-5">Hoodies & <br /> Sweatshits</h1>
                </Link>
            </div>
        </div>
    );
};

export default ItemPolo;