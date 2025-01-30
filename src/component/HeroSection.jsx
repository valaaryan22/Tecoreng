import imageforhero from '../assets/image8.webp';
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="bg-[#0B1B33] text-white min-h-screen p-8">
      {/* Main container for the Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content Section */}
        <div className="lg:w-1/2 space-y-6 pl-8"> {/* Added padding-left to create space between content and image */}
          
          {/* Heading for Hero Section */}
          <h1 className="Transfer text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Transfer your enterprise with digital innovation
          </h1>
          
          {/* Paragraph text with description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Your success as a market innovator reflects our strides as a unified
            partner. Committed to assisting you in attaining excellence through
            our solutions, we boast a team of adept professionals and dynamic
            facilitators. Our steadfast commitment to a collaborative strategy,
            coupled with agile methodologies, propels business expansion. Rely
            on our strategic insights and development processes, and we will
            fuel your concepts to manifest as groundbreaking disruptions.
          </p>
          
          {/* Hire Now Button */}
          <button
            className="flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300"
            style={{
              willChange: 'transform', // Prepare for smooth animation during hover
              transition: 'transform 250ms', // Transition duration for smooth effect
              background: 'linear-gradient(94.76deg, rgb(244, 123, 85) 1.49%, rgb(255, 61, 0) 95.34%)', // Gradient background for button
              transform: 'translateY(-4px)', // Initial button position with slight offset
              height: '58px', // Set button height
              fontWeight: '700', // Set font weight
              fontSize: '29px', // Font size of the button text
              lineHeight: '30px', // Line height for button text
              textTransform: 'uppercase' // Capitalize button text
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(0)'} // Smooth transition to reset position when hovered
            onMouseLeave={(e) => e.target.style.transform = 'translateY(-4px)'} // Reset position when mouse leaves
          >
            HIRE NOW
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative">
          {/* Image container with relative positioning */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            {/* Image showing digital innovation, making it responsive */}
            <img
              src={imageforhero}
              alt="Digital Innovation"
              className="w-full h-full object-contain" // Make sure the image takes up full width and height, but maintains aspect ratio
            />
            {/* You can add more decorative elements here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
