import { Link } from 'react-router-dom';
import i1 from '../Images/about1.png'; 
import i2 from '../Images/about2.jpg'; 
import i3 from '../Images/about3.jpg'; 
const Profile = () => {
    return (
        <div className='mt-12 px-5 md:px-10 lg:px-24'>
            <div className='text-center text-5xl font-semibold pb-12'>
                <h1>About Elegant Fashion</h1>
                <p className="text-base pt-5">Everything you wanted to know about your fave fashion brand. And then some.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:flex justify-items-center md:justify-evenly items-center gap-5'>
                <div className='flex flex-col gap-4 p-5 w-96 justify-center text-center'>
                    <img src={i1} alt="" />
                    <h1 className='text-2xl font-bold'>Who We Are</h1>
                    <h1 className='text-base font-medium'>Your Biggest fans</h1>
                    <Link to="/profileabout" className='border-2 border-black px-6 py-4 hover:bg-black hover:text-white  font-semibold'>READ ABOUT US</Link>
                </div>
                {/* 2nd */}
                <div className='flex flex-col gap-4 p-5 w-96 justify-center text-center'>
                    <img src={i2} alt="" />
                    <h1 className='text-2xl font-bold'>The Brands</h1>
                    <h1 className='text-base font-medium'>Made By Us, Loved By All</h1>
                    <Link to="/profilebrands" className='border-2 border-black px-6 py-4 hover:bg-black hover:text-white  font-semibold'>RIGHT THIS WAY</Link>
                </div>
                {/* 3rd */}
                <div className='flex flex-col gap-4 p-5 w-96 justify-center text-center'>
                    <img src={i3} alt="" />
                    <h1 className='text-2xl font-bold'>Our Fashion Experience</h1>
                    <h1 className='text-base font-medium'>Because There's So Much More</h1>
                    <Link to="/profilediscover" className='border-2 border-black px-6 py-4 hover:bg-black hover:text-white  font-semibold'>DISCOVER US</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;