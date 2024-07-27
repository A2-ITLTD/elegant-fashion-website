import { Link } from 'react-router-dom';
import i4 from '../Images/about4.jpg'; 
import i5 from '../Images/about5.png'; 
import i6 from '../Images/about6.png'; 
const ProfileAbout = () => {
    return (
        <div className='mt-12 w-full px-5 md:px-0 md:w-3/6 mx-auto'>
            <div className='flex flex-col gap-10'>
             <h1 className="text-center text-5xl font-semibold">Who Are We</h1>
             <p className="text-base text-justify">At Elegant Fashion, we believe in a world where everyone has the freedom to be themselves, without judgement. We encourage experimentation and self-expression, empowering you to embrace life as the extraordinary adventure it is. Our mission is to ensure that everyone has an equal opportunity to explore and showcase their unique style, regardless of their background or preferences. We are here to give you the confidence to be whoever you want to be.</p>
             <img src={i4} className='h-[420px] w-full object-cover object-center' />
             <h1 className="text-left text-3xl font-semibold">Fashion democracy - Choice for all</h1>
             <p className="text-base text-justify">Our audience—you—are wonderfully unique, and we go above and beyond to help you find your perfect fit. At Elegant Fashion, we offer our exclusive brands in over 30 sizes and are dedicated to providing all sizes at the same price. You can trust that we have the ideal piece just for you.</p>
             <img src={i5} className='h-[420px] w-full object-cover object-center' />
             <h1 className="text-right text-3xl font-semibold">Body positivity</h1>
             <p className="text-base text-justify">At Elegant Fashion, promoting a healthy body image is a priority. We don't conform to stereotypes, which is why we work with over 200 models who represent the diversity of our audience. We believe in authenticity, so we never digitally alter our models' appearances—no reshaping or removing stretch marks. Our models are part of the Elegant Fashion family, and we support them by adhering to a Model Welfare Policy.</p>
             <img src={i6} className='h-[420px] w-full object-cover object-center' />
             <h1 className="text-left text-3xl font-semibold">Elegant Marketplace</h1>
             <p className="text-base text-justify">There's nothing quite like the thrill of discovering an incredible vintage boutique or an amazing independent brand before everyone else. We love that feeling too, which is why we launched Elegant Fashion Marketplace in 2024. Our team curates the best fashion start-ups, giving you the chance to shop unique finds all the time.</p>
             <div className='flex flex-col gap-3 text-center mt-5'>
                <h1 className="text-3xl font-semibold">Our Legal Info</h1>
                <p className="text-base font-semibold">Company Name: Elegant Fashion</p>
                <p className="text-base font-semibold">Factory Address: 4-MOTIJHEEL COMMERCIAL AREA,
                <br />
                SUITE # 29/A, LEVEL # 7,
                Dhaka, Bangladesh</p>
                <p className="text-base font-semibold">Email Address: info@elegantfashionasia.com</p>
                <Link to="/About" className='border-2 border-black px-6 py-4 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MORE ABOUT US </Link>
             </div>
            </div>
        </div>
    );
};

export default ProfileAbout;