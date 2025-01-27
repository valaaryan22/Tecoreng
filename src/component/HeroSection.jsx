import React from "react";
import img from '../assets/img1.jpeg'; // Import the image

const HeroSection = () => {
  return (
    <div
      className="text-white py-16 px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)), linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%)",
        backgroundSize: "100% 100%", // Ensures the background covers the entire viewport
      }}
    >
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6"
        style={{
          backgroundImage:
            "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)), linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%)",
          backgroundSize: "100% 100%",
          borderRadius: "16px", // Optional, for rounded corners
        }}
      >
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transfer your enterprise with digital innovation
          </h1>
          <p className="text-lg mb-8">
            Your success as a market innovator reflects our strides as a unified
            partner. Committed to assisting you in attaining excellence through
            our solutions, we boast a team of adept professionals and dynamic
            facilitators. Our steadfast commitment to a collaborative strategy,
            coupled with agile methodologies, propels business expansion. Rely
            on our strategic insights and development processes, and we will
            fuel your concepts to manifest as groundbreaking disruptions.
          </p>
          <button
            className="flex items-center justify-center py-[12px] px-[30px] text-white font-bold text-[29px] leading-[30px] uppercase bg-gradient-to-r from-orange-400 via-red-500 to-red-600 transform -translate-y-[4px] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px] h-[58px] transition-all duration-300 shadow-lg hover:translate-y-[-8px] active:scale-95"
          >
            HIRE NOW
          </button>
        </div>

        {/* Right Image with Background Color */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center bg-[#01132E] p-6 rounded-lg">
          <img
            src={img} // Using the imported image path
            alt="Digital Innovation"
            className="w-80 md:w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
