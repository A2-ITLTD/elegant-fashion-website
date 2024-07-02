import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BiSolidRightArrow } from "react-icons/bi";
import bg1 from "../Images/bg1.jpg";
import bg2 from '../Images/bg2.jpg'; 
import bg3 from '../Images/bg3.jpg';
import check from '../Images/checked.png';
import supply from '../Images/supply.png';
import hand from '../Images/hand.png';
import staff from '../Images/staff.png';
import tshirt1 from '../Images/tshirt1.jpg';
import tshirt2 from '../Images/tshirt2.jpg';
import tshirt3 from '../Images/tshirt3.jpeg';
import tshirt4 from '../Images/tshirt4.png';
import tshirt from '../Images/tshirt.jpg';
import polo from '../Images/polo.jpg';
import winter from '../Images/winter.jpg';
import hoodie from '../Images/hoodie.jpg';
import denim from '../Images/denim.jpg';
import shorts from '../Images/shorts.jpg';
import trouser from '../Images/trouser.jpg';
import cargo from '../Images/cargo.jpg';
import leggins from '../Images/legging.jpg';
import jeans from '../Images/jeans.jpg';
import { Link } from 'react-router-dom';
const Landingpage = () => {
    
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, [totalSlides]);

    return (
        <div className="w-full">
            {/* banner slider */}
            <section>
            <div className='w-full h-[650px]'>
            <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full h-[650px]'
            >
                <div className='relative h-fit'>
                    <div>
                    <img src={bg1} alt="Slide 1" className='w-full h-[650px] object-cover object-top' />
                    </div>
                    <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold bg-[#00000080] text-white py-5 px-16 flex items-center gap-5 hover:bg-black hover:bg-opacity-90 transition duration-300'>
                    Shop Now <BiSolidRightArrow />
                    </button>
                </div>

                <div className='relative h-fit'>
                    <div><img src={bg2} alt="Slide 1" className='w-full h-[650px] object-cover object-top' /></div>
                    <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-4xl font-semibold bg-[#00000080] text-white py-5 px-16 flex items-center gap-5 hover:bg-black hover:bg-opacity-90 transition duration-300'>Shop Now <BiSolidRightArrow /></button>
                </div>
                <div className='relative h-fit'>
                    <div><img src={bg3} alt="Slide 1" className='w-full h-[650px] object-cover object-top' /></div>
                    <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-4xl font-semibold bg-[#00000080] text-white py-5 px-16 flex items-center gap-5 hover:bg-black hover:bg-opacity-90 transition duration-300'>Shop Now <BiSolidRightArrow /></button>
                </div>
               
            </Carousel>
            </div>
            </section>
            {/* why choose us */}
            <section className='mt-24'>
                <div className='text-center text-5xl font-semibold pb-20'>
                    <h1>Why Choose Us</h1>
                </div>
                <div className='flex flex-wrap gap-4 items-center justify-evenly md:px-10 lg:px-24 text-center '>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center gap-6 w-80'>
                        <img src={check} alt="checked icon" className='w-24'/>
                        <h1 className='text-2xl font-semibold'>Site-based Material Examination</h1>
                        <p className='text-sm font-normal'> On-site inspections to verify fabric quality, ensure adherence to specifications, and maintain consistent product standards.
                        </p>
                    </div>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center  gap-6 w-80'>
                        <img src={supply} alt="checked icon" className='w-24'/>
                        <h1 className='text-2xl font-semibold'>Procedures For Supplier Evaluation  </h1>
                        <p className='text-sm font-normal'>Comprehensive assessment of suppliers based on quality, reliability, compliance, and performance to ensure optimal partnerships.
                        </p>
                    </div>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center gap-6 w-80'>
                        <img src={hand} alt="checked icon" className='w-24'/>
                        <h1 className='text-2xl font-semibold'>Complete Customization </h1>
                        <p className='text-sm font-normal'>Offering fully tailored designs and manufacturing solutions to meet unique client requirements, styles, and preferences.
                        </p>
                    </div>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center gap-6 w-80'>
                        <img src={staff} alt="checked icon" className='w-24'/>
                        <h1 className='text-2xl font-semibold'>Overall Trading Personnel</h1>
                        <p className='text-sm font-normal'>Experienced team managing procurement, quality control, and client relations to ensure smooth and efficient operations.
                        </p>
                    </div>
                </div>
            </section>
            {/* New Release */}
            <section className='mt-24'>
                <div className='text-center text-5xl font-semibold pb-20'>
                    <h1>New Release</h1>
                </div>
                <div className='px-5 md:px-10 lg:px-24'>
                <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full'
                >
                    {/* 1st slide */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-items-center md:justify-evenly items-center gap-5'>
                        <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt1} alt="" />
                            <h1>Maroon T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                       {/* 2nd */}
                       <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt2} alt="" />
                            <h1>Blue T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt3} alt="" />
                            <h1>Stylish Unisex T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt4} alt="" />
                            <h1>Custom T-Shirt</h1>
                            <div className='flex justify-evenly text-xs' >
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                    </div>
                    {/* 2nd slide */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:flex  justify-items-center md:justify-evenly items-center gap-5'>
                        <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt1} alt="" />
                            <h1>Blue T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                       {/* 2nd */}
                       <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt2} alt="" />
                            <h1>Blue T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt3} alt="" />
                            <h1>Blue T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-col gap-4 p-5 w-96'>
                            <img src={tshirt4} alt="" />
                            <h1>Blue T-Shirt</h1>
                            <div className='flex justify-evenly text-xs'>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>M</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>L</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XL</button>
                                <button className='bg-slate-200 p-2 rounded-md hover:bg-slate-900 text-black font-medium hover:text-white'>XXL</button>
                            </div>
                            <h1>$100</h1>
                        </div>
                    </div>
                </Carousel>
                <div className='w-full text-center text-xl font-semibold  opacity-70 my-10 border-none'>
                   <button className='hover:underline'> View All</button>
                </div>
                </div>
            </section>
            {/* Catagory section */}
            <section className='mt-24 px-5 md:px-10 lg:px-24'>
            <div className='grid grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                <Link className='relative'>
                    <img src={tshirt} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold  py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>T-Shirt</h1>
                </Link>
                <Link className='relative'>
                    <img src={polo} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Polo-Shirt</h1>
                </Link>
                <Link className='relative'>
                    <img src={winter} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Winter Wear</h1>
                </Link>
                <Link className='relative'>
                    <img src={hoodie} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Hoodies and Sweatshirt</h1>
                </Link>
                <Link className='relative'>
                    <img src={denim} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Denim Pants</h1>
                </Link>
                {/* 2nd row */}
                <Link className='relative'>
                    <img src={shorts} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Shorts</h1>
                </Link>
                <Link className='relative'>
                    <img src={trouser} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Trouser</h1>
                </Link>
                <Link className='relative'>
                    <img src={cargo} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Cargo</h1>
                </Link>
                <Link className='relative'>
                    <img src={leggins} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Legging Items</h1>
                </Link>
                <Link className='relative'>
                    <img src={jeans} alt="" />
                    <h1 className='absolute bottom-0 w-full bg-[#000000a6] text-white font-semibold py-2 lg:py-3 text-base md:text-base lg:text-lg text-center'>Jeans</h1>
                </Link>
            </div>
            </section>
        </div>
    );
};

export default Landingpage;