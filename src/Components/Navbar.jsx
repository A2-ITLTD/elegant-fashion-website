import { RiAccountCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-ful">
            {/* 1st navbar */}
            <div className="bg-black text-white font-light text-xs md:text-xs py-2  px-5 md:px-20 flex justify-center md:justify-end gap-5 md:gap-10 ">
                <p className="flex items-center gap-1 md:gap-2 hover:text-[#acacac]"><MdEmail />info@a2itbd.com</p>
                <p className="hover:text-[#acacac]">Call or Text (+880 1846937397)</p>
            </div>
            {/* main navbar */}
            <div className="px-4 lg:px-20 py-2 md:py-6 text-sm lg:text-xl font-semibold text-[#1D242B] flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
                <div>
                    <img src="" alt="logo" className="" />
                </div>
                <div>
                    <ul className="flex gap-2 lg:gap-10 pb-2 md:pb-0">
                        <Link to="/" className="hover:text-zinc-300">Home</Link>
                        <Link  to="/About" className="hover:text-[#1D24CA]">Products</Link>
                        <Link to="/Product"  className="hover:text-[#1D24CA]">Profile</Link>
                        <Link to="/Contact" className="hover:text-[#1D24CA]">Contacts</Link>
                    </ul>
                </div>
            </div>
            <div className="bg-black py-2 text-white font-normal text-sm md:text-base text-center">
                <p className="tracking-wide hover:tracking-widest hover:transition duration-500">Happy Shopping</p>
            </div>
        </div>
    );
};

export default Navbar;