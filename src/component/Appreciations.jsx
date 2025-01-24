import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const natureImages = [
    {
        imageUrl: "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
        title: "Denis Cartin",
        description:'They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project\'s progress. They also shared significant insights and suggestions for developing the project.Discover the peaceful embrace of natures quiet corners, where every element works in harmony to inspire a sense of calm and balance'
    },
    {
        imageUrl:
            "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Kean Graham",
        description:
        'What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.'

    },
    {
        imageUrl:
            "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Chetan Patwardhan",
        description:
        'What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.'

    },
    {
        imageUrl:
            "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Chetan Patwardhan",
        description:
            "Witness the sky's dramatic transformation as the setting sun paints a masterpiece of color, reminding us of nature's fleeting moments of brilliance.",
    },
    {
        imageUrl:
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Chetan Patwardhan",
        description:
            "Experience the soothing stillness of a pristine lakeside, where reflections of the surrounding beauty invite moments of quiet reflection.",
    },
];

const Appreciation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isLaptop = window.innerWidth >= 1024; 
    const itemsPerPage = isLaptop ? 3 : 1; 
    const totalItems = natureImages.length;

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage
        );
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage
        );
    };

    const visibleImages = natureImages.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-100 tracking-wide">
                Appreciation from Clients
            </h1>
            <div className="relative overflow-hidden">
                <div
                    className={`flex gap-8 justify-center ${
                        isLaptop ? "md:flex-row" : "flex-col"
                    }`}
                >
                    <AnimatePresence>
                        {visibleImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full md:w-1/3 bg-card rounded-lg shadow-lg overflow-hidden group"
                            >
                                <div className="relative">
                                    <img
                                        src={image.imageUrl}
                                        alt={image.title}
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="text-center text-white px-4">
                                            <h3 className="text-2xl font-bold">{image.title}</h3>
                                            <p className="text-sm mt-2">{image.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold tracking-tight">{image.title}</h3>
                                    <p className="text-muted-foreground">{image.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <button
                    onClick={handlePrevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    onClick={handleNextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Appreciation;
