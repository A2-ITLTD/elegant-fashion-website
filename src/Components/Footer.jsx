import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';
import youtube from '../Images/youtube.png';
import logo from '../Images/elegant-logo-removebg.png'
const Footer = () => {
    return (
        <div className="mt-28">
            <div className="px-24 py-14 border-t-2 border-black w-full flex flex-wrap justify-start items-start gap-10 lg:gap-20">
                {/* column 1 */}
                <div className='flex flex-col gap-4 justify-start'>
                    <h1 className="text-2xl font-medium">EXPLORE OUR POPULAR CATEGORIES</h1>
                    <div className="flex items-center justify-start gap-3 font-medium text-sm">
                        <h1>T-shirt |</h1>
                        <h1>Shirt |</h1>
                        <h1>Wintert Wear</h1>
                    </div>
                    <p className="text-sm font-medium opacity-55 pt-5">Join us to be the first to know about our new collection and special offers.</p>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Enter your email"
                            className='py-3 px-5 border-[1px] border-black rounded-l-lg w-full' 
                        />
                        <button className='py-3 px-7 bg-black text-white border-[1px] border-black font-medium rounded-r-lg'>Submit</button>
                    </div>
                    <div className='flex items-center justify-start gap-7 pt-3'>
                        <img src={facebook} alt="" className='w-10'/>
                        <img src={instagram} alt="" className='w-10'/>
                        <img src={youtube} alt="" className='w-10'/>
                        <img src={linkedin} alt="" className='w-10'/>
                    </div>
                </div>
                <div className='text-sm flex flex-col gap-2 '>
                    <h1 className='font-medium'>INFORMATION</h1>
                    <p className='font-light opacity-80'>About Us</p>
                    <p className='font-light opacity-80'>Terms and Conditions</p>
                    <p className='font-light opacity-80'>Shipping and Return</p>
                    <p className='font-light opacity-80'>Privacy Policy</p>
                    <p className='font-light opacity-80'>Blog</p>
                </div>
                <div className='text-sm flex flex-col gap-2'>
                    <h1 className='font-medium'>CUSTOMER SERVICE</h1>
                    <p className='font-light opacity-80'>Contact Us</p>
                    <p className='font-light opacity-80'>Return, Refund & Exchange</p>
                    <p className='font-light opacity-80'>Site Map</p>
                    <p className='font-light opacity-80'>Track Order</p>
                </div>
            </div>
            <div className='px-24 py-4 border-t-2 border-[#00000032] flex items-center justify-between'>
                <img src={logo} alt="" className='w-32 bg-black px-5 py-1' />
                <h1 className='text-base font-semibold'>@ 2024 Elegant Fashion</h1>
            </div>
        </div>
    );
};

export default Footer;