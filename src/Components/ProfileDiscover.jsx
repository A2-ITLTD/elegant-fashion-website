import { Link } from 'react-router-dom';
import i13 from '../Images/about13.jpg'; 
import i10 from '../Images/about10.jpg';  
import i11 from '../Images/about11.jpg'; 
import i14 from '../Images/about14.jpg'; 
const ProfileDiscover = () => {
    return (
        <div className='mt-12 w-full px-5 md:px-0 md:w-2/3 mx-auto'>
            <div className='flex flex-col gap-20'>
                <div className='flex flex-col gap-8'>
                    <h1 className="text-center text-5xl font-semibold">Most Elegant Experience</h1>
                    <p className="text-base text-justify px-0 md:px-32">At Elegant Fashion, we never settle. Embracing an 'always testing, always in beta' philosophy, we constantly strive to improve and make things better every day. From seamless delivery and returns to cutting-edge visual search technology, if it hasn't been done before, we find a way to make it happen.</p>
                </div>
             <div className='flex flex-col md:flex-row gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i10} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Simple Delivery and Returns</h1>
                    <p className="text-base text-justify">We aim to make your experience with us as seamless as possible. In practical terms, that means offering easy delivery and returns (terms and conditions apply). These are some of our favorite aspects of shopping at Elegant Fashion—and we know they’re some of yours too.</p>
                    <div className='flex justify-around items-center'>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>WOMEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>KIDS</Link>
                    </div>
                </div>
             </div>

             <div className='flex flex-col md:flex-row-reverse gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i13} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Style Match</h1>
                    <p className="text-base text-justify">Whether you're inspired by a magazine look or a friend's style, our photo search technology makes finding similar pieces quicker and easier than ever. Just snap or upload an image, and our Style Match feature will search through all our products to show you the closest matches. Plus, it's a lot of fun!</p>
                    <div className='flex justify-around items-center'>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>WOMEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>KIDS</Link>
                    </div>
                </div>
             </div>
             
             <div className='flex flex-col md:flex-row gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i11} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Fit Assistant</h1>
                    <p className="text-base text-justify">We go the extra mile to ensure our customers find the perfect fit on their first try. That's where Fit Assistant comes in. This tool provides personalized size recommendations based on the preferences of similar shoppers and your bespoke measurements. With Fit Assistant, you can shop with confidence, knowing we've always got your back.</p>
                </div>
             </div>

             <div className='flex flex-col md:flex-row-reverse gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i14} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Customer Care</h1>
                    <p className="text-base text-justify">Got questions? Our Help pages are available 24/7 to assist you. And if you need more support, our friendly customer care advisors are ready to help via Live Chat, handling anything our FAQs don't cover!</p>
                    <Link to="/Contact" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white  font-semibold'>Contact Us</Link>
                    
                </div>
             </div>

             <div className='flex flex-col gap-3 text-center mt-5'>
                <Link to="/About" className='border-2 border-black px-6 py-4 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MORE ABOUT US </Link>
             </div>
            </div>
        </div>
    );
};

export default ProfileDiscover;