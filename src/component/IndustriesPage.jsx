const IndustriesPage = () => {
    return (
        <div className="bg-[#01132E] text-white p-8 sm:p-12 md:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Industries We are Experts In
            </h1>

            {/* Full container width with responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* First Row */}
                <div className="relative lg:col-span-2 sm:col-span-1">
                    <div className="overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Supply Chain & Logistics"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4">Supply Chain & Logistics</h2>
                    </div>
                </div>

                <div className="relative lg:col-span-1 sm:col-span-1">
                    <div className="overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Healthcare"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4">Healthcare</h2>
                    </div>
                </div>

                {/* Second Row */}
                <div className="relative lg:col-span-1 sm:col-span-1">
                    <div className="overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Education"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4">Education</h2>
                    </div>
                </div>

                <div className="relative lg:col-span-2 sm:col-span-1">
                    <div className="overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Banking"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4">Banking</h2>
                    </div>
                </div>

                <div className="relative lg:col-span-1 sm:col-span-1">
                    <div className="overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="E-commerce"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4">E-commerce</h2>
                    </div>
                </div>

                <div className="relative lg:col-span-2 sm:col-span-1">
                    <div className="overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Travel"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4">Travel</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesPage;
