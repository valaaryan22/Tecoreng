import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const natureImages = [
    {
        imageUrl: "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
        title: "Serene Nature",
        description:
            "This breathtaking image captures the beauty and tranquility of nature. The lush greenery, calming lake, and vibrant sky create a serene atmosphere that invites you to pause and appreciate the wonders of the natural world.",
    },
    {
        imageUrl:
            "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Majestic Mountain Range",
        description:
            "Towering peaks reach towards the sky, their snow-capped summits reflecting the warm glow of the sun. This image evokes a sense of awe and wonder at the sheer scale and power of nature.",
    },
    {
        imageUrl:
            "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Enchanting Waterfall",
        description:
            "A cascade of water tumbles over the rocky cliff, creating a mesmerizing display of motion and sound. The surrounding forest adds to the enchanting atmosphere, inviting you to immerse yourself in the tranquility of this natural wonder.",
    },
    {
        imageUrl:
            "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Vibrant Sunset",
        description:
            "The sky explodes in a breathtaking display of colors as the sun dips below the horizon. This image captures the magic of the golden hour, when the world seems to pause and reflect the beauty of nature.",
    },
    {
        imageUrl:
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Peaceful Lakeside",
        description:
            "The still waters of the lake mirror the surrounding forest, creating a serene and calming atmosphere. This image invites you to slow down, take a deep breath, and appreciate the tranquility of the natural world.",
    },
];

const NatureImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isLaptop = window.innerWidth >= 1024; // Laptop screen size or larger
    const itemsPerPage = isLaptop ? 3 : 1; // 3 images for laptop; 1 image for mobile
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
            {/* Professionalized Header */}
            <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700 tracking-wide">
                Appreciation from Our Clients
            </h1>
            <div className="relative overflow-hidden">
                <div
                    className={`flex gap-8 justify-center ${isLaptop ? "md:flex-row" : "flex-col"
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
                                className="w-full md:w-1/3 bg-card rounded-lg shadow-lg overflow-hidden"
                            >
                                <img
                                    src={image.imageUrl}
                                    alt={image.title}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold tracking-tight">{image.title}</h3>
                                    <p className="text-muted-foreground">{image.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Previous Button */}
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

                {/* Next Button */}
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

export default NatureImageSlider;
