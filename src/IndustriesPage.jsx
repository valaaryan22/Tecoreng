const IndustriesPage = () => {
    return (
        <div className="bg-[#0b1b33] text-white p-8 sm:p-12 md:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Industries We are Experts In
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                    { title: "Supply Chain & Logistics", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600" },
                    { title: "Healthcare", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600" },
                    { title: "Education", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600" },
                    { title: "Banking", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600" },
                    { title: "E-commerce", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600" },
                    { title: "Travel", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600" },
                ].map((industry, index) => (
                    <div
                        key={index}
                        className="relative group rounded-lg overflow-hidden"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 opacity-70"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70">
                            <h2 className="text-lg md:text-xl font-bold text-white text-center">
                                {industry.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesPage;
