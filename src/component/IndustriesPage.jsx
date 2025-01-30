import Banking from '../assets/Banking.webp';
import Ecommerce from '../assets/Ecommerce.webp';
import Education from '../assets/Education.webp';
import Healthcare from '../assets/Healthcare.webp';
import SupplyChainLogistics from '../assets/SupplyChainLogistics.webp';
import Travel from '../assets/Travel.webp';

const IndustriesPage = () => {
    return (
        <div className="bg-[#01132E] min-h-screen"> {/* Dark background color and minimum screen height */}
            <div className="container mx-auto px-4 py-16"> {/* Container with padding and centering */}
                
                {/* Main heading for the page */}
                <h1
                    className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
                    style={{
                        textShadow:
                            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px", // Added text shadow effect for extra emphasis
                    }}
                >
                    Industries We are experts in
                </h1>

                {/* Industry images and names in two rows */}
                <div className="flex flex-col space-y-5">
                    
                    {/* First Row: Supply Chain, Healthcare, Education */}
                    <div className="flex flex-col md:flex-row gap-3 w-full">
                        {/* Supply Chain & Logistics Card */}
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[45%]">
                            {/* Overlay effect that darkens the image on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            {/* Image for Supply Chain & Logistics */}
                            <img
                                src={SupplyChainLogistics}
                                alt="Supply Chain & Logistics"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Text overlay centered on image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Supply Chain & Logistics</h2>
                            </div>
                        </div>

                        {/* Healthcare Card */}
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[35%]">
                            {/* Overlay effect on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            {/* Image for Healthcare */}
                            <img
                                src={Healthcare}
                                alt="Healthcare"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Text overlay centered on image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Healthcare</h2>
                            </div>
                        </div>

                        {/* Education Card */}
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[20%]">
                            {/* Overlay effect on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            {/* Image for Education */}
                            <img
                                src={Education}
                                alt="Education"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Text overlay centered on image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Education</h2>
                            </div>
                        </div>
                    </div>

                    {/* Second Row: Banking, E-commerce, Travel */}
                    <div className="flex flex-col md:flex-row gap-3 w-full">
                        {/* Banking Card */}
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[20%]">
                            {/* Overlay effect on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            {/* Image for Banking */}
                            <img
                                src={Banking}
                                alt="Banking"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Text overlay centered on image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Banking</h2>
                            </div>
                        </div>

                        {/* E-commerce Card */}
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[35%]">
                            {/* Overlay effect on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            {/* Image for E-commerce */}
                            <img
                                src={Ecommerce}
                                alt="E-commerce"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Text overlay centered on image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">E-commerce</h2>
                            </div>
                        </div>

                        {/* Travel Card */}
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[45%]">
                            {/* Overlay effect on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            {/* Image for Travel */}
                            <img
                                src={Travel}
                                alt="Travel"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Text overlay centered on image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Travel</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesPage;
