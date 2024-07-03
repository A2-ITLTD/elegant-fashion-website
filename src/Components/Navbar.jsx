import { RiAccountCircleFill } from "react-icons/ri";
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
            <div className="bg-black text-white font-light text-xs md:text-xs py-2  px-5 md:px-20 flex justify-center md:justify-end gap-5 md:gap-10 items-center">
                <p className="flex items-center gap-1 md:gap-2 hover:text-[#acacac]"><MdEmail />elegantfashion70@gmail.com</p>
                <p className="hover:text-[#acacac]">Call or Text (+880 1846937397)</p>
                <img src={alibaba_image} className="w-44" />
            </div>
            {/* main navbar */}
            <div className="px-4 lg:px-20 py-2 md:py-3 text-sm lg:text-xl font-semibold text-[#1D242B] flex flex-row  gap-4 md:gap-0 justify-between items-center">
                <div className="">
                    <img src={logo} alt="logo" className="w-36 bg-black px-5 py-1" />
                </div>
                {/* responsive menu */}
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <Link to="/" className="hover:underline">Home</Link>
                        <Link  to="/products" className="hover:underline">

                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="">Products</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-4 shadow text-blac flex flex-col gap-2 text-black">
                            <Link className="hover:underline"><a>Shirt</a></Link>
                            <Link className="hover:underline"><a>T-Shirt</a></Link>
                            <Link className="hover:underline"><a>Polo-Shirt</a></Link>
                            <Link className="hover:underline"><a>Winter Wear</a></Link>
                            <Link className="hover:underline"><a>Hoodies and Sweatshirt</a></Link>
                            <Link className="hover:underline"><a>Denim Pant</a></Link>
                            <Link className="hover:underline"><a>Shorts</a></Link>
                            <Link className="hover:underline"><a>Trouser</a></Link>
                            <Link className="hover:underline"><a>Cargo</a></Link>
                            <Link className="hover:underline"><a>Leggins Items</a></Link>
                            <Link className="hover:underline"><a>Jeans</a></Link>
                        </ul>
                        </div>
                        </Link>
                        <Link to="/About" className="hover:underline">About</Link>
                        <Link to="/Product"  className="hover:underline ">Profile</Link>
                        <Link to="/Contact" className="hover:underline">Contact Us</Link>
                </ul>
                </div>
                {/* large device menu */}
                <div className="hidden md:inline">
                    <ul className="flex gap-2 lg:gap-10 pb-2 md:pb-0">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link  to="/products" className="hover:underline">

                        <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="">Products</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-4 shadow text-blac flex flex-col gap-2 text-black">
                            <Link className="hover:underline"><a>Shirt</a></Link>
                            <Link className="hover:underline"><a>T-Shirt</a></Link>
                            <Link className="hover:underline"><a>Polo-Shirt</a></Link>
                            <Link className="hover:underline"><a>Winter Wear</a></Link>
                            <Link className="hover:underline"><a>Hoodies and Sweatshirt</a></Link>
                            <Link className="hover:underline"><a>Denim Pant</a></Link>
                            <Link className="hover:underline"><a>Shorts</a></Link>
                            <Link className="hover:underline"><a>Trouser</a></Link>
                            <Link className="hover:underline"><a>Cargo</a></Link>
                            <Link className="hover:underline"><a>Leggins Items</a></Link>
                            <Link className="hover:underline"><a>Jeans</a></Link>
                        </ul>
                        </div>

                        </Link>
                        <Link to="/About" className="hover:underline">About</Link>
                        <Link to="/Product"  className="hover:underline ">Profile</Link>
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