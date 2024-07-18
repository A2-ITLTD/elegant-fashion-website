import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoHeartOutline } from "react-icons/io5";


import menleggings1 from '../ItemsImage/menleggings1.png';
import menleggings2 from '../ItemsImage/menleggings2.png';
import menleggings3 from '../ItemsImage/menleggings3.png';
import menleggings4 from '../ItemsImage/menleggings4.png';
import menleggings5 from '../ItemsImage/menleggings5.jpeg';
import menleggings6 from '../ItemsImage/menleggings6.jpg';

import womenleggings1 from '../ItemsImage/womenleggings1.jpg';
import womenleggings2 from '../ItemsImage/womenleggings2.jpg';
import womenleggings3 from '../ItemsImage/womenleggings3.jpg';
import womenleggings4 from '../ItemsImage/womenleggings4.png';
import womenleggings5 from '../ItemsImage/womenleggings5.png';
import womenleggings6 from '../ItemsImage/womenleggings6.jpg';

import kidleggings2 from '../ItemsImage/kidleggings1.png';
import kidleggings1 from '../ItemsImage/kidleggings2.jpg';
import kidleggings3 from '../ItemsImage/kidleggings3.jpg';
import kidleggings4 from '../ItemsImage/kidleggings4.jpg';
import kidleggings5 from '../ItemsImage/kidleggings5.jpg';
import kidleggings6 from '../ItemsImage/kidleggings6.png';

import menhoodie1 from '../ItemsImage/menhoodie1.jpg';
import mencargo1 from '../ItemsImage/mencargo1.jpg';
import menshirt1 from '../ItemsImage/menshirt1.jpg';
import mendenim1 from '../ItemsImage/mendenim1.jpg';
import menpolo1 from '../ItemsImage/menpolo1.jpg';
import menshorts1 from '../ItemsImage/menshorts1.jpg';
import mentrouser1 from '../ItemsImage/mentrouser1.jpg';
import mentshirt1 from '../ItemsImage/mentshirt1.jpg';
import menwinter1 from '../ItemsImage/menwinter1.jpeg';
import menjeans1 from '../ItemsImage/menjeans1.png';
import menswim3 from '../ItemsImage/menswim3.jpg';
import { Link } from 'react-router-dom';
const ItemLeggings = () => {

    const handleOrder = e => {
        e.preventDefault();
        const username = e.target.elements.user_name.value;
        const number = e.target.elements.user_phone.value;
        const email = e.target.elements.user_email.value;
        const address = e.target.elements.location.value;
        const product = e.target.elements.Items.value;
        const quantity = e.target.elements.quantity.value;
        const samplequantity = e.target.elements.samplequantity.value;
        
        
        // send message to whatsapp
        const whatsappNumber = "+8801305785685" 


        var url = "https://wa.me/" + whatsappNumber + "?text="
        + "*Name :* " + username + "%0a"
        + "*Number :* " + number + "%0a"
        + "*Email :* " + email + "%0a"
        + "*Address :* " + address + "%0a"
        + "*Product :* " + product + "%0a"
        + "*Quantity :* " + quantity + "%0a"
        + "*Sample Quantity :* " + samplequantity + "%0a";
        

        window.open(url, '_blank').focus();   
    
    };

    return (
        <div className="mt-14 px-5 md:px-10 lg:px-24" >
           <div className='text-center text-5xl font-semibold pb-10'>
                <h1>Leggings Items</h1>
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
                                <img src={menleggings1} alt="" />
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
                                <img src={menleggings2} alt="" />
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
                                <img src={menleggings3} alt="" />
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
                                <img src={menleggings4} alt="" />
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
                                <img src={menleggings5} alt="" />
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
                                <img src={menleggings6} alt="" />
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
                                <img src={womenleggings1} alt="" />
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
                                <img src={womenleggings2} alt="" />
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
                                <img src={womenleggings3} alt="" />
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
                                <img src={womenleggings4} alt="" />
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
                                <img src={womenleggings5} alt="" />
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
                                <img src={womenleggings6} alt="" />
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
                                <img src={kidleggings1} alt="" />
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
                                <img src={kidleggings2} alt="" />
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
                                <img src={kidleggings3} alt="" />
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
                                <img src={kidleggings4} alt="" />
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
                                <img src={kidleggings5} alt="" />
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
                                <img src={kidleggings6} alt="" />
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
            <div className='mt-10 grid grid-cols-2 md:grid-cols-6 gap-10 px-5 md:px-24'> 
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

                <Link to="/swimwear" className='relative w-40 h-40 rounded-full'>
                    <img src={menswim3} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-2xl font-bold bottom-14 left-4">Swimwear</h1>
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

                <Link to="/Hoodie" className='relative w-40 h-40 rounded-full'>
                    <img src={menhoodie1} className='w-full h-full object-cover object-center rounded-full' />
                    <div className="absolute inset-0 rounded-full bg-black opacity-50 hover:opacity-80"></div>
                    <h1 className="absolute text-white text-center text-xl font-bold bottom-14 left-5">Hoodies & <br /> Sweatshits</h1>
                </Link>
            </div>

            {/* modal */}
            <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Checkout</h3>
                    <p className="py-4">Press ESC key to close</p>
                    <div className="modal-action">
                    <form 
                    onSubmit={handleOrder}
                    method="dialog" 
                    className='flex flex-col w-full gap-3'>
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
                        <input type="number" name="quantity" placeholder='Quantity (min 100)' min={100} className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black' />
                        <input type="number" name="samplequantity" placeholder='Sample Quantity (min 50 -100)' min={50} className='py-2 px-5 border-[1px] border-black rounded-md text-base text-black' />
                        
                        <button type='submit' name='submit' className="btn btn-primary">Submit</button>
                        
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </div>
    );
};

export default ItemLeggings;