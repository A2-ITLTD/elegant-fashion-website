import men from '../Images/men.jpg';
import women from '../Images/women.jpg';
import kids from '../Images/kids.jpg';
import tshirt5 from '../Images/tshirt5.jpg';
import shirt from '../Images/shirt.jpg';
import polo2 from '../Images/polo2.jpg';
import winter2 from '../Images/winter2.jpg';
import sweatshirt2 from '../Images/sweatshirt2.jpg';
import denim from '../Images/denim.jpg';
import shorts2 from '../Images/shorts2.jpg';
import trouser2 from '../Images/trouser2.jpg';
import cargo2 from '../Images/cargo.jpg';
import leggings2 from '../Images/leggings2.jpg';
import jeans from '../Images/jeans.jpg';
import heart from '../Images/heart.png';
import { Link } from 'react-router-dom';
import mentshirt from '../Images/mentshirt.jpg';
import womentshirt from '../Images/womentshirt.jpg';
import kidstshirt from '../Images/kidstshirt.jpg';
import womenshirt from '../Images/womenshirt2.jpg';
import kidsshirt from '../Images/kidsshirt.jpg';
import menwinter from '../Images/menwinter.jpg';
import womenwinter from '../Images/womenwinter.jpg';
import kidswinter from '../Images/kidswinter.jpg';
import menpolo from '../Images/menpolo.jpg';
import womenpolo from '../Images/womenpolo.jpg';
import kidspolo from '../Images/kidspolo.jpg';
import menhoodie from '../Images/menhoodie.jpg';
import womenhoodie from '../Images/womenhoodie.jpg';
import kidshoodie from '../Images/kidshoodie.jpg';
import menjeans from '../Images/menjeans.jpg';
import womenjeans from '../Images/womenjeans.jpg';
import menshorts from '../Images/menshorts.jpg';
import womenshorts from '../Images/womenshorts.jpeg';
import kidsshorts from '../Images/kidsshorts.jpg';
import mentrouser from '../Images/mentrouser.jpeg';
import womentrouser from '../Images/womentrouser.jpg';
import kidstrouser from '../Images/kidstrouser.jpeg';
import mencargo from '../Images/mencargo.jpg';
import womencargo from '../Images/womencargo.jpg';
import kidscargo from '../Images/kidscargo.jpeg';
import menleggings from '../Images/menleggings.jpg';
import womenleggings from '../Images/womenleggings.jpg';
import kidsleggings from '../Images/kidsleggings.jpeg';
import menjeans2 from '../Images/menjeans2.jpeg';
import womenjeans2 from '../Images/womenjeans2.jpeg';
import kidsjeans2 from '../Images/kidsjeans.jpg';
import kidsjeanspants from '../Images/kidsjeanspants.jpg';
const Products = () => {
    return (
        <div className="mt-16 px-5 md:px-14 lg:px-24">
            {/* main box */}
            {/* 1st row */}
           <div className="flex flex-col md:flex-row justify-between gap-20">
                {/* first col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>T-Shirt</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={mentshirt} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womentshirt} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidstshirt} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={tshirt5} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
                {/* 2nd col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Shirt</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={men} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenshirt} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link >
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidsshirt} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={shirt} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
           </div>


           {/* 2nd row */}
           <div className="flex flex-col md:flex-row justify-between gap-20 my-10">
                {/* 3rd col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Winter Wear</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menwinter} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenwinter} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidswinter} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={winter2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
                {/* 2nd col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Polo-Shirt</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menpolo} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenpolo} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidspolo} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link >
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={polo2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
           </div>

           {/* 3rd row */}
           <div className="flex flex-col md:flex-row justify-between gap-20 my-10">
                {/* 5rd col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Hoodies and Sweatshirts</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menhoodie} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenhoodie} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidshoodie} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={sweatshirt2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
                {/* 6th col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Denim Pant</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menjeans} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenjeans} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidsjeans2} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={denim} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
           </div>

           {/*  4th row */}
           <div className="flex flex-col md:flex-row justify-between gap-20 my-10">
                {/* 7th col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Shorts</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menshorts} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenshorts} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidsshorts} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={shorts2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
                {/* 8th col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Trouser</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={mentrouser} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womentrouser} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidstrouser} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={trouser2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
           </div>

           {/*  5th row */}
           <div className="flex flex-col md:flex-row justify-between gap-20 my-10">
                {/* 8th col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Cargo</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={mencargo} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womencargo} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidscargo} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link >
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={cargo2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
                {/* 9th col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Leggings Items</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menleggings} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenleggings} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidsleggings} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={leggings2} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
           </div>

           {/*  6th row */}
           <div className="flex flex-col md:flex-row justify-between gap-20 my-10">
                {/* 9th col */}
                <div className="w-full md:w-1/2">
                    <div className='text-center text-3xl font-bold py-4'>
                        <h1>Jeans</h1>
                    </div>
                    <div className='shadow-3xl h-[450px] flex gap-2 rounded-3xl'>
                        <div className="w-2/5 h-auto grid grid-rows-3 ">
                            <Link className="relative h-full flex items-center justify-center rounded-tl-3xl">
                            <img src={menjeans2} alt="" className="h-full w-full object-cover rounded-tl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Men</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center">
                            <img src={womenjeans2} alt="" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Women</h1>
                            </Link>
                            <Link className="relative h-full flex items-center justify-center rounded-bl-3xl">
                            <img src={kidsjeanspants} alt="" className="h-full w-full object-cover rounded-bl-3xl" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-bl-3xl hover:opacity-80"></div>
                            <h1 className="absolute text-white text-center text-3xl font-bold py-2">Kids</h1>
                            </Link>
                        </div>
                        <div className="relative w-3/5 h-auto flex items-center justify-center rounded-r-3xl">
                            <img src={jeans} alt="" className="h-full w-full object-cover object-center rounded-r-3xl" />
                            <img src={heart} className='absolute top-5 right-5 w-7 transform transition-transform duration-300 hover:scale-125' />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Products;