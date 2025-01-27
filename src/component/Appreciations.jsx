    import { AnimatePresence, motion } from "framer-motion";
    import { useState } from "react";
    import image from '../assets/image.jpg';
    import image1 from '../assets/image1.jpg';
    import image2 from '../assets/image2.jpg';
    import image4 from '../assets/image4.png';
    import image6 from '../assets/image6.png';

    const natureImages = [
        {
            imageUrl: image1,
            title: "Denis Cartin",
            description:
                'They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project\'s progress. They also shared significant insights and suggestions for developing the project. Discover the peaceful embrace of nature\'s quiet corners, where every element works in harmony to inspire a sense of calm and balance.',
        },
        {
            imageUrl: image2,
            title: "Kean Graham",
            description:
                'What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.',
        },
        {
            imageUrl: image,
            title: "Chetan Patwardhan",
            description:
                'What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.',
        },
        {
            imageUrl: image4,
            title: "Chetan Patwardhan",
            description:
                "Witness the sky's dramatic transformation as the setting sun paints a masterpiece of color, reminding us of nature's fleeting moments of brilliance.",
        },
        {
            imageUrl: image6,
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
                <h1
                    className="text-4xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
                    style={{
                        textShadow:
                            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
                    }}
                >
                    Tecoreng insights
                </h1>
                <div className="relative overflow-hidden">
                    <div
                        className={`flex gap-3 justify-center ${
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
                                    className="relative w-full md:w-1/3 bg-[#0b1b33] text-white rounded-2xl shadow-lg overflow-hidden group"
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
                                        <p className="text-white">{image.description}</p>
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
