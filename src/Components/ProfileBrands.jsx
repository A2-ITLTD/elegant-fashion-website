import { Link } from 'react-router-dom';
import i7 from '../Images/about7.png'; 
import i8 from '../Images/about8.png';
import i9 from '../Images/about9.jpg';  
import i12 from '../Images/about12.png';  
const ProfileBrands = () => {
    return (
        <div className='mt-12 w-full px-5 md:px-0 md:w-2/3 mx-auto'>
            <div className='flex flex-col gap-20'>
                <div className='flex flex-col gap-8'>
                    <h1 className="text-center text-5xl font-semibold">Most Elegant Brands</h1>
                    <p className="text-base text-justify px-0 md:px-32">At Elegant Fashion, we approach fashion differently. Our in-house brands, crafted by our London design team, go beyond the ordinary to bring you the latest in clothing, shoes, accessories, and gifts. Our curated selection of brands offers the best variety, exclusive items, and exciting collaborations. And that's not all—our range of premium Face + Body products lets you express yourself in countless ways. There are no rules, just endless possibilities to be uniquely you.</p>
                </div>
             <div className='flex flex-col md:flex-row gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i7} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Elegant Edition</h1>
                    <p className="text-base text-justify">Elegant Fashion EDITION is crafted for life's most unforgettable moments, offering occasionwear as unique as you are. With a range of sizes, including our stunning Elegant Fashion EDITION Wedding Collection, we're here to ensure you stand out and start the celebration even before the party begins.</p>
                    <div className='flex justify-around items-center'>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>WOMEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>KIDS</Link>
                    </div>
                </div>
             </div>

             <div className='flex flex-col md:flex-row-reverse gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i8} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Elegant Design</h1>
                    <p className="text-base text-justify">Elegant Fashion DESIGN empowers you to express your individuality by interpreting major trends with our unique twist. We offer a diverse range of sizes, including Curve, Tall, Petite, and Maternity, ensuring that you have everything you need to create a style that's uniquely yours. Whether it's for day, night, or anything in between, we're here to make every moment as extraordinary as you are.</p>
                    <div className='flex justify-around items-center'>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>WOMEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>KIDS</Link>
                    </div>
                </div>
             </div>
             
             <div className='flex flex-col md:flex-row gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i9} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">The big-brand edit</h1>
                    <p className="text-base text-justify">Our passion doesn't end with our own amazing brands. We extend the same love to other labels, handpicking the best pieces from their collections. This way, we bring you everything you want to wear, along with some delightful surprises you never knew you'd love. It's a win-win.</p>
                    <div className='flex justify-around items-center'>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>WOMEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>KIDS</Link>
                    </div>
                </div>
             </div>

             <div className='flex flex-col md:flex-row-reverse gap-16'>
                <div className='w-full md:w-1/2'>
                    <img src={i12} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-5 justify-center'>
                    <h1 className="text-left text-3xl font-semibold">Elegant White</h1>
                    <p className="text-base text-justify">With a focus on oversized fits and a minimal, clean aesthetic, Elegant Fashion WHITE is designed to elevate your everyday style. We believe that investment pieces can still be unique, so we create understated staples with a modern twist. These pieces are not only stylish but also make you feel confident and effortlessly cool.</p>
                    <div className='flex justify-around items-center'>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>WOMEN</Link>
                        <Link to="/Products" className='border-2 border-black px-8 py-3 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>KIDS</Link>
                    </div>
                </div>
             </div>

             <div className='flex flex-col gap-3 text-center mt-5'>
                <Link to="/About" className='border-2 border-black px-6 py-4 w-fit hover:bg-black hover:text-white mx-auto  font-semibold'>MORE ABOUT US </Link>
             </div>
            </div>
        </div>
    );
};

export default ProfileBrands;