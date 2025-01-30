import { useState } from 'react';
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import ane from '../assets/ane.png';
import betting from '../assets/betting.png';
import helthe from '../assets/helthe.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import '../css/SuccessStories.css'; // Import the external CSS file for custom styles

const SuccessStories = () => {
  // State to track which story is being hovered over
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array of stories with title, image, video, and description
  const stories = [
    {
      title: "Betting Platform",
      image: betting,
      video: video1,
      description: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more."
    },
    {
      title: "Health and Wellness",
      image: helthe,
      video: video2,
      description: "Excitement fills the air as we proudly unveil our Health and Wellness Platform-a pivotal portal toward maximizing your health journey."
    },
    {
      title: "E-Commerce",
      image: ane,
      video: video3,
      description: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header of the section */}
      <h1 className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide">
        Our Success Stories
      </h1>

      {/* Grid to display the success stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Loop through each story and display its content */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 relative"
            style={{ width: 'calc(100% + 5%)' }}  // Increase the width slightly using inline style
            onMouseEnter={() => setHoveredIndex(index)} // Set hoveredIndex when mouse enters the card
            onMouseLeave={() => setHoveredIndex(null)}  // Reset hoveredIndex when mouse leaves the card
          >
            <div className="relative h-80 w-full overflow-hidden rounded-xl">
              {/* If the card is being hovered, display the video */}
              {hoveredIndex === index ? (
                <div className="absolute inset-0 z-0">
                  <Player
                    playsInline
                    muted
                    autoPlay
                    src={story.video}  // Video source for the story
                    className="w-full h-full object-cover rounded-xl" // Ensure the video covers the whole area of the card
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  {/* If it's the third story, show overlay text */}
                  {index === 2 ? (
                    <div className="relative w-full h-full">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover rounded-xl opacity-50"
                      />
                      <div className="image-overlay">An E-commerce Store</div>  {/* Overlay text for E-Commerce */}
                    </div>
                  ) : (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-xl"  // Display the image as a background when not hovered
                    />
                  )}
                </div>
              )}
            </div>
            {/* Story details section */}
            <div className="p-8 z-10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {story.title}  {/* Story title */}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {story.description}  {/* Story description */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
