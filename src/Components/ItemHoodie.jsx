import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoHeartOutline } from "react-icons/io5";


import menhoodie1 from '../ItemsImage/menhoodie1.jpg';
import menhoodie2 from '../ItemsImage/menhoodie2.jpg';
import menhoodie3 from '../ItemsImage/menhoodie3.jpg';
import menhoodie4 from '../ItemsImage/menhoodie4.jpg';
import menhoodie5 from '../ItemsImage/menhoodie5.png';
import menhoodie6 from '../ItemsImage/menhoodie6.jpg';

import womenhoodie1 from '../ItemsImage/womenhoodie.jpg';
import womenhoodie2 from '../ItemsImage/womenhoodie2.jpg';
import womenhoodie3 from '../ItemsImage/womenhoodie3.jpg';
import womenhoodie4 from '../ItemsImage/womenhoodie4.jpg';
import womenhoodie5 from '../ItemsImage/womenhoodie5.png';
import womenhoodie6 from '../ItemsImage/womenhoodie6.jpg';

import kidhoodie1 from '../ItemsImage/kidhoodie1.png';
import kidhoodie2 from '../ItemsImage/kidhoodie2.jpg';
import kidhoodie3 from '../ItemsImage/kidhoodie3.jpg';
import kidhoodie4 from '../ItemsImage/kidhoodie4.jpg';
import kidhoodie5 from '../ItemsImage/kidhoodie5.jpg';
import kidhoodie6 from '../ItemsImage/kidhoodie6.jpeg';


import mencargo1 from '../ItemsImage/mencargo1.jpg';
import menshirt1 from '../ItemsImage/menshirt1.jpg';
import mendenim1 from '../ItemsImage/mendenim1.jpg';
import menleggings1 from '../ItemsImage/menleggings1.png';
import menpolo1 from '../ItemsImage/menpolo1.jpg';
import menshorts1 from '../ItemsImage/menshorts1.jpg';
import mentrouser1 from '../ItemsImage/mentrouser1.jpg';
import mentshirt1 from '../ItemsImage/mentshirt1.jpg';
import menwinter1 from '../ItemsImage/menwinter1.jpeg';
import menjeans1 from '../ItemsImage/menjeans1.png';
import { Link } from 'react-router-dom';

const ItemHoodie = () => {

    return (
        <div className="mt-14 px-5 md:px-10 lg:px-24" >
           <div className='text-center text-5xl font-semibold pb-10'>
                <h1>Hoodies and Sweatshirt</h1>
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
                                <img src={menhoodie1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Sweater</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={menhoodie2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Brown Coat</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={menhoodie3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Coat</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
            
                        </div>
                        {/* 2nd slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={menhoodie4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Coat</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={menhoodie5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Pink Sweater</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={menhoodie6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black and Red Jacket</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
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
                                <img src={womenhoodie1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Offwhite Coat</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womenhoodie2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Jacket</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womenhoodie3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Red Cardigan</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
            
                        </div>
                        {/* 2nd slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womenhoodie4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Brown Coat</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womenhoodie5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Blue Jacket</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={womenhoodie6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Jacket</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
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
                                <img src={kidhoodie1} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Orange Sweater</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidhoodie2} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Jacket</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidhoodie3} alt="" />
                                <div className='flex justify-between'>
                                    <h1>White Cardigan</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
            
                        </div>
                        {/* 2nd slide */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidhoodie4} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black Jacket</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidhoodie5} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Green Sweater</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='flex flex-col gap-6 p-5 w-96'>
                                <img src={kidhoodie6} alt="" />
                                <div className='flex justify-between'>
                                    <h1>Black and Orange Sweater</h1>
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
                                    <button 
                                    onClick={()=>document.getElementById('my_modal_1').showModal()}
                                    className='bg-black text-white font-semibold w-full py-2'>Add to Cart</button>
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

                <Link to="/Polo" className='relative w-40 h-40 rounded-full'>
                    <img src={menpolo1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-3xl font-bold bottom-14 left-12">Polo</h1>
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

                <Link to="/Leggings" className='relative w-40 h-40 rounded-full'>
                    <img src={menleggings1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-2xl font-bold bottom-14 left-5">Leggings</h1>
                </Link>
            </div>


            {/* modal */}
            <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Checkout</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <form method="dialog" className='flex flex-col w-full gap-3'>
                        <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black' />
                        <input type="email" name="user_email" placeholder='Email' className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black' />
                        <textarea type="text" name="location" placeholder='Your Address' className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                        <input 
                            type="tel"  
                            name="user_phone"  
                            placeholder="Whatsapp Number" 
                            className="py-2 px-5 border-[1px] border-black rounded-md text-base text-black" 
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                                }
                            }}
                        />
                        <select name="Items" id="" className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black textarea textarea-bordered textarea-2xl w-full'>
                            <option value="">Select Items</option>
                            <option value="Shirt">Shirt</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Polo Shirt">Polo Shirt</option>
                            <option value="Winter Wear">Winter Wear</option>
                            <option value="Hoodies and Sweatshirt">Hoodies and Sweatshirt</option>
                            <option value="Denim Pant">Denim Pant</option>
                            <option value="Shorts">Shorts</option>
                            <option value="Trouser">Traouser</option>
                            <option value="Cargo">Cargo</option>
                            <option value="Leggings Items">Leggings Items</option>
                            <option value="Jeans">Jeans</option>
                        </select>
                        <input type="number" name="user_email" placeholder='Quantity (min 100)' min={100} className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black' />
                        <input type="number" name="user_email" placeholder='Sample Quantity (min 50 -100)' min={50} className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black' />
                        
                        <button className="btn btn-primary">Submit</button>
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </div>
    );
};

export default ItemHoodie;