const IndustriesPage = () => {
    return (
        <div className="bg-[#01132E] text-white p-8 sm:p-12 md:p-16">
        <h1
        className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
        style={{
          textShadow:
            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
        }}
      >     Industries We are Experts In
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
