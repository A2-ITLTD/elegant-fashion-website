import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BiSolidRightArrow } from "react-icons/bi";
import bg1 from "../Images/bg1.jpg";
import bg2 from '../Images/bg2.jpg'; 
import bg3 from '../Images/bg3.jpg';
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
                <div></div>
            </section>
        </div>
    );
};

export default Landingpage;