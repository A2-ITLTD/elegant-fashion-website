import shirt from '../Images/formalshirt.jpg';
import cloth from '../Images/cloth.jpg';
import jeans from '../Images/jeans2.jpg';
import womenshirt from '../Images/womenshirt.jpg';
import polo from '../Images/polo.jpg';
import winter from '../Images/winter.jpg';
import hoodie from '../Images/hoodie.jpg';
import sweartshirt2 from '../Images/sweatshirt2.jpg';
import tshirt5 from '../Images/tshirt5.jpg';
import winter2 from '../Images/winter2.jpg';
const About = () => {
    return (
        <div className='mt-24 px-5 md:px-14 lg:px-52 flex flex-col-reverse md:flex-row gap-20'>
            <div className="w-full md:w-[550px] flex flex-col gap-10 h-auto">
                <img src={shirt} className='w-full h-full object-cover' />
                <img src={cloth} className='w-full h-full object-cover'/>
                <img src={jeans} className='w-full h-full object-cover'/>
                <img src={womenshirt} className='w-full h-full object-cover'/>
                <img src={polo}  className='w-full h-full object-cover'/>
                <img src={winter}  className='w-full h-full object-cover'/>
                {/* <img src={hoodie}  />
                <img src={tshirt5}  />
                <img src={winter2}  /> */}
            </div>
            <div className="w-full md:w-full text-left flex flex-col gap-5"> 
                <h1 className='text-3xl font-bold text-yellow-700'>About Us</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                <b>Elegant Fashion</b> is a rapidly growing buying and merchandising service for apparel and textiles buyers worldwide. Supported by numerous sourcing factories, we ensure superior quality and meet the growing demand with close-in manufacturing support. Our extensive and dynamic network of vendors guarantees excellence. We are dedicated to quality and committed to sincerely serving our buyers, delivering products that achieve complete satisfaction.
                </p>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                Our core team comprises professionals who have come together to form this venture after extensive research into all aspects of the sourcing industry. We boast a vast sourcing network of accessory and trim suppliers, as well as value addition vendors for garments. By engaging with yarn suppliers, we ensure the procurement of the finest raw materials, overseeing the process through to the final stages of production. Our goal is to bridge gaps in time, culture, and language through effective communication, mentoring, education, and training of our vendors.
                </p>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                We take full responsibility for our buyers' needs, from sampling to the final shipment of products. We are committed to delivering the highest quality products to our clients, ensuring timely delivery every time.
                </p>
                <h1 className='text-xl font-bold text-yellow-700'>VISION : CUSTOMER’S DELIGHT THROUGH CORRECT WORK.</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                Our vision is to consistently exceed our customers' expectations by delivering the highest quality products and ensuring timely shipments through our exceptional service, achieving maximum customer satisfaction.
                </p>
                <h1 className='text-xl font-bold text-yellow-700'>MISSION : QUALITY PRODUCTS WITH CORRECT PRICES SUPPLIED ON TIME.</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                We offer exceptional services to our customers, ensuring their satisfaction by creating a superior working environment through our professional expertise, knowledge, and experience. We uphold sound business principles with the utmost concern, ensuring consistency in quality, service, and the ability to handle large orders.
                </p>
                <h1 className='text-xl font-bold text-yellow-700'>Pricing :</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'><b>Elegant Fashion</b> offers transparent pricing for all products, optimizing the following components: fabric consumption is assessed at the factory and verified by our technical experts to prevent any miscalculations and overconsumption.</p>
                <ul className='text-base font-medium text-black opacity-70 text-justify list-disc pl-14'>
                    <li>Fabric price is carefully evaluated from yarn, with a detailed company breakdown and current market price.</li>
                    <li>CM is determined based on style and prevailing market rates.</li>
                    <li>Accessories/printing costs are based on market prices.</li>
                    <li>Commercial cost is assessed according to current trends.</li>
                </ul>
                <h1 className='text-base font-bold text-yellow-700'>On the basis of above analysis, we can offer best possibility competitive to our customer.</h1>
                <h1 className='text-xl font-bold text-yellow-700'>	QUALITY :</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'><b>Elegant Fashion</b> has a robust quality control team that ensures quality at every stage, from fabric to finished products. With advanced production methods and multiple inspections at various stages, we guarantee world-class quality for our products.</p>
                <h1 className='text-xl font-bold text-yellow-700'>	PRODUCT :</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>We do work with all size groups for Men/Women, Girls/Boys, Infant & Baby.</p>
                <h1 className='text-xl font-bold text-yellow-700'>	KNIT :</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                We offer a wide range of products including T-Shirts, Polo Shirts, Tank Tops, Rugby Polo Shirts, Sweatshirts, Shorts, Long Pants, Cut and Sew T-Shirts, Y/D T-Shirts & Polo Shirts, various types of Lycra Tops, Dresses, Fashion Wear, Nightwear, Uniforms, Jogging Suits, Track Suits, Pajama Sets, and all types of knitted fancy garments.</p>
                <h1 className='text-xl font-bold text-yellow-700'>	WOVEN :</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                Denim, Twill, TC Twill, CVC Pants, Cargo Shorts, Shirt, Pull over, Vest, Jackets, Denim Jacket, PVC Jacket, Skirt, Trousers, Shorts, Blouse, Tops, Sleeping-suit, Pullover, Cardigan, Lined Jacket, Vest, Home textiles etc.</p>
                <h1 className='text-xl font-bold text-yellow-700'>		
                SWEATER:</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                Pullover, Cardigan, Lined Jacket, Vest etc. Sweater Yarn: 100% cotton, 100% Acrylic, 70/30- A/W, 50/50- Acrylic / Cotton, 100% Acrylic Cashmere like, 100% Acrylic Mélange, 100% Acrylic Tamu, 100% Acrylic Cotton like, 50/50- Acrylic / Merino Wool, Local & Imported Fabrics.</p>
                <h1 className='text-xl font-bold text-yellow-700'>		
                INFANT & BABY:</h1>
                <p className='text-base font-medium text-black opacity-70 text-justify'>
                Kids 2pcs set, Baby romper, Jumpsuit, Bodysuit, Sleeping suit, Crewneck T-shirt, Lap t-shirt, Singlet, Bloomer set, Tunic Top, Yoga pant, Legging pant, Baby boxer shorts, Beanies, Knot/Hat, Bibs, Leg arm, Burp cloth etc.</p>
                <h1 className='text-xl font-bold text-yellow-700'>		
                We are committed to :</h1>
                <ul className='text-base font-medium text-black opacity-70 text-justify list-disc pl-14'>
                    <li>Excellent Product Development and Sourcing</li>
                    <li>Punctual Production and Timely Deliveries</li>
                    <li>Assurance of Quality and Inspection</li>
                    <li>Effective Communication and Coordination</li>
                    <li>Shipment and Tracking Services</li>
                </ul>
            </div>
        </div>
    );
};

export default About;