import { RiAccountCircleFill } from "react-icons/ri";
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import logo from '../Images/elegant-logo-short.png';
import logo from '../Images/elegant-logo-removebg.png'
import shopping from '../Images/shopping-bag.png';
import alibaba_image from '../Images/alibaba.jpg';
const Navbar = () => {
    return (
        <div className="w-ful">
            {/* 1st navbar */}
            <div className="bg-black text-white font-light text-xs md:text-xs py-2  px-5 md:px-20 flex justify-center md:justify-center gap-5 md:gap-10 items-center">
                <img src={alibaba_image} className="w-44" />
                <p className="flex items-center gap-1 md:gap-2 hover:text-[#acacac]"><MdEmail />info@elegantfashionasia.com
                </p>
                <p className="hover:text-[#acacac]">Call or Text (+880 1305 785 685
                )</p>
            </div>
            {/* main navbar */}
            <div className="px-4 lg:px-20 py-2 md:py-3 text-sm lg:text-xl font-semibold text-[#1D242B] flex flex-row-reverse md:flex-row  gap-4 md:gap-0 justify-between items-center">
                <div className="">
                    <img src={logo} alt="logo" className="w-40" />
                </div>
                <div >
                    <ul className="flex gap-2 lg:gap-10 pb-2 md:pb-0">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link  to="/Products" className="hover:underline">

                        <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="">Products</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-4 shadow text-blac flex flex-col gap-2 text-black">
                            <Link to="/Products" className="hover:underline"><a>All Products</a></Link>
                            <Link to="/Shirt" className="hover:underline"><a>Shirt</a></Link>
                            <Link to="/Tshirt" className="hover:underline"><a>T-Shirt</a></Link>
                            <Link to="/Polo" className="hover:underline"><a>Polo-Shirt</a></Link>
                            <Link to="/Winter" className="hover:underline"><a>Winter Wear</a></Link>
                            <Link to="/Hoodie"  className="hover:underline"><a>Hoodies and Sweatshirt</a></Link>
                            <Link to="/Denim" className="hover:underline"><a>Denim Pant</a></Link>
                            <Link to="/Shorts" className="hover:underline"><a>Shorts</a></Link>
                            <Link to="/Trouser" className="hover:underline"><a>Trouser</a></Link>
                            <Link to="/Cargo" className="hover:underline"><a>Cargo</a></Link>
                            <Link to="/Leggings" className="hover:underline"><a>Leggins Items</a></Link>
                            <Link to="/Jeans" className="hover:underline"><a>Jeans</a></Link>
                            <Link to="/swimwear" className="hover:underline"><a>Swimwear</a></Link>
                        </ul>
                        </div>

                        </Link>
                        <Link to="/About" className="hover:underline">About Us</Link>
                        <Link to="/Profile"  className="hover:underline ">Profile</Link>
                        <Link to="/Policy" className="hover:underline">Privacy & Policy</Link>
                        <Link to="/Contact" className="hover:underline">Contact Us</Link>
                    </ul>
                </div>
            </div>
            <div className="bg-black py-3 text-white font-normal text-sm md:text-base text-center flex items-center justify-center gap-2">
                <img src={shopping} alt="" className="w-6" />
                <p className="tracking-wide hover:tracking-widest hover:transition duration-500 ">Happy Shopping</p>
            </div>
        </div>
    );
};

export default Navbar;