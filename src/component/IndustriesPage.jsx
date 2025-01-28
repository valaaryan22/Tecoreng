import React from 'react';
import Banking from '../assets/Banking.webp';
import Ecommerce from '../assets/Ecommerce.webp';
import Education from '../assets/Education.webp';
import Healthcare from '../assets/Healthcare.webp';
import SupplyChainLogistics from '../assets/SupplyChainLogistics.webp';
import Travel from '../assets/Travel.webp';

const IndustriesPage = () => {
    return (
        <div className="bg-[#01132E] min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <h1
                    className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
                    style={{
                        textShadow:
                            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
                    }}
                >       Industries We are experts in
                </h1>
                <div className="flex flex-col space-y-5">
                    {/* First Row */}
                    <div className="flex flex-col md:flex-row gap-3 w-full">
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[45%]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            <img
                                src={SupplyChainLogistics}
                                alt="Supply Chain & Logistics"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Supply Chain & Logistics</h2>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[35%]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            <img
                                src={Healthcare}
                                alt="Healthcare"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Healthcare</h2>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[20%]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            <img
                                src={Education}
                                alt="Education"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Education</h2>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col md:flex-row gap-3 w-full">
                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[20%]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            <img
                                src={Banking}
                                alt="Banking"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">Banking</h2>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[35%]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            <img
                                src={Ecommerce}
                                alt="E-commerce"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h2 className="text-white text-2xl font-bold">E-commerce</h2>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg h-[300px] w-full md:w-[45%]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />
                            <img
                                src={Travel}
                                alt="Travel"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
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