import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import youtube from '../Images/youtube.png';
import alibaba from '../Images/alibaba_logo.png';
import whatsapp from '../Images/whatsapp.png';
import pinterest from '../Images/pinterest.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';
import logo from '../Images/elegant-logo-removebg.png'
import {ToastContainer , toast } from 'react-toastify';
import { Link } from "react-router-dom";

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();

        emailjs
        .sendForm('service_vmgx6vh',
                'template_dde6pzu',
                form.current, {
            publicKey: 'faA8fkwyy5d-F62S3',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            toast.success("Thank you for subscribing to Elegant Fashion");
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <div className="mt-28">
            <div className="px-10 md:px-20 lg:px-24 py-14 border-t-2 border-black w-full flex flex-wrap justify-start items-start gap-10 lg:gap-20">
                {/* column 1 */}
                <div className='flex flex-col gap-4 justify-start'>
                    <h1 className="text-2xl font-medium">EXPLORE OUR POPULAR CATEGORIES</h1>
                    <div className="flex items-center justify-start gap-3 font-medium text-sm">
                        <Link to="/Tshirt">T-shirt |</Link>
                        <Link to="/Shirt">Shirt |</Link>
                        <Link to="/Winter">Wintert Wear</Link>
                    </div>
                    <p className="text-sm font-medium opacity-55 pt-5">Join us to be the first to know about our new collection and special offers.</p>
                    <div className="flex items-center">
                        <form ref={form} onSubmit={sendEmail} className="flex items-center">
                        <input 
                            type="email" 
                            name="user_email"
                            placeholder="Enter your email"
                            className='py-3 px-5 border-[1px] border-black rounded-l-lg w-full' 
                        />
                        <button type='submit' value="Send" className='py-3 px-7 bg-black text-white border-[1px] border-black font-medium rounded-r-lg'>Submit</button>
                        </form>
                    </div>
                    <div className='flex items-center justify-start gap-7 pt-3'>
                        <a href="https://www.facebook.com/Elegantfashionasia/"><img src={facebook} alt="" className='w-10'/></a>
                        <a href="https://wa.me/+8801305785685?text=Hello how can I help you?" target="_blank">
                            <img src={whatsapp} alt="" className='w-10'/>
                        </a>
                        <a href="https://www.instagram.com/elegentfashion9/"><img src={instagram} alt="" className='w-10'/></a>
                        <a href="https://www.linkedin.com/in/elegent-fashion-079427322/"><img src={linkedin} alt="" className='w-10'/></a>
                        <a href="https://x.com/FashionEle12341"><img src={twitter} alt="" className='w-10'/></a>
                        <a href=""><img src={alibaba} alt="" className='w-10'/></a>
                        <a href=""><img src={youtube} alt="" className='w-10'/></a>
                        <a href="https://www.pinterest.com/pinac0626/"><img src={pinterest} alt="" className='w-10'/></a>
                    </div>
                </div>
                <div className='text-sm flex flex-col gap-2 '>
                    <h1 className='font-medium'>COMPANY INFO</h1>
                    <p className='font-light opacity-80'>Email: info@elegantfashionasia.com</p>
                    <p className='font-light opacity-80'>Phone: +880 1305 785 685</p>
                    <p className='font-light opacity-80'>Factory Address: 4-MOTIJHEEL COMMERCIAL AREA, <br /> SUITE # 29/A, LEVEL # 7, <br />Dhaka, Bangladesh                    </p>
                    <p className='font-light opacity-80'>Trade License: TRAD/DNCC/000454/2024</p>
                </div>
                <div className='text-sm flex flex-col gap-2 '>
                    <h1 className='font-medium'>INFORMATION</h1>
                    <Link to="/Policy" className='font-light opacity-80'>Privacy Policy</Link>
                    <Link to="/About" className='font-light opacity-80'>About Us</Link>
                    <Link to="/Contact" className='font-light opacity-80'>Contact Us</Link>
                    <Link to="/Products" className='font-light opacity-80'>Shop Now</Link>
                    <Link to="/Profile" className='font-light opacity-80'>Profile</Link>
                </div>
            </div>
            <div className='px-10 md:px-20 lg:px-24 py-4 border-t-2 border-[#00000032] flex items-center justify-between'>
                <img src={logo} alt="" className='w-36 ' />
                <h1 className='text-base font-semibold'>@ 2024 Elegant Fashion</h1>
            </div>
        </div>
    );
};

export default Footer;