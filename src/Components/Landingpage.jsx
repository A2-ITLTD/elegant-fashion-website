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
                    <div><img src={bg1} alt="Slide 1" className='w-full h-[650px] object-cover object-top' /></div>
                    <button className='absolute right-20 bottom-24 text-5xl font-semibold bg-[#00000080] text-white py-5 px-20 flex items-center gap-5'>Shop Now <BiSolidRightArrow /></button>
                </div>
                <div className='relative h-fit'>
                    <div><img src={bg2} alt="Slide 1" className='w-full h-[650px] object-cover object-top' /></div>
                    <button className='absolute right-20 bottom-24 text-5xl font-semibold bg-[#00000080] text-white py-5 px-20 flex items-center gap-5'>Shop Now <BiSolidRightArrow /></button>
                </div>
                <div className='relative h-fit'>
                    <div><img src={bg3} alt="Slide 1" className='w-full h-[650px] object-cover object-top' /></div>
                    <button className='absolute right-20 bottom-24 text-5xl font-semibold bg-[#00000080] text-white py-5 px-20 flex items-center gap-5'>Shop Now <BiSolidRightArrow /></button>
                </div>
               
            </Carousel>
            </div>
            </section>
            {/* why choose us */}
            <section className='mt-24'>
                <div className='text-center text-5xl font-semibold pb-20'>
                    <h1>Why Choose Us</h1>
                </div>
                <div className='flex items-center justify-evenly gap-8 px-24 text-center '>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center gap-6'>
                        <img src={check} alt="checked icon" className='w-36'/>
                        <h1 className='text-2xl font-semibold'>site-based material examination</h1>
                        <p className='text-sm font-normal'> On-site inspections to verify fabric quality, ensure adherence to specifications, and maintain consistent product standards.
                        </p>
                    </div>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center  gap-6'>
                        <img src={supply} alt="checked icon" className='w-36'/>
                        <h1 className='text-2xl font-semibold'>procedures for supplier evaluation  </h1>
                        <p className='text-sm font-normal'>Comprehensive assessment of suppliers based on quality, reliability, compliance, and performance to ensure optimal partnerships.
                        </p>
                    </div>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center  gap-6'>
                        <img src={hand} alt="checked icon" className='w-36'/>
                        <h1 className='text-2xl font-semibold'>complete customization </h1>
                        <p className='text-sm font-normal'>Offering fully tailored designs and manufacturing solutions to meet unique client requirements, styles, and preferences.
                        </p>
                    </div>
                    <div className='border-2 border-slate-900 p-8 flex flex-col items-center  gap-6'>
                        <img src={staff} alt="checked icon" className='w-36'/>
                        <h1 className='text-2xl font-semibold'>overall trading personnel</h1>
                        <p className='text-sm font-normal'>Experienced team managing procurement, quality control, and client relations to ensure smooth and efficient operations.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landingpage;