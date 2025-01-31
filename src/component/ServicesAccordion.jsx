import { useState } from "react"; // Importing the useState hook from React to manage the state
import angular from '../assets/angular.svg'; // Importing icons for different technologies
import ionic from '../assets/ionic.svg';
import laravel from '../assets/laravel.svg';
import nodejs from '../assets/nodejs.svg';
import react from '../assets/react.svg';

const ServicesAccordion = () => {
  // Array of service objects that will populate the accordion
  const services = [
    { 
      titleIcon: ionic, // Service icon
      title: "Web Development", // Title of the service
      details: "Transform your business concepts with our web development services, crafting innovative and next-generation websites.", // Description of the service
      technologies: [ // List of technologies used in the service
        { name: "React JS", icon: react, alt: "React Logo" },
        { name: "Angular", icon: angular, alt: "Angular Logo" },
        { name: "Laravel", icon: laravel, alt: "Laravel Logo" },
        { name: "Node JS", icon: nodejs, alt: "NodeJS Logo" }
      ]
    },
    { 
      titleIcon: ionic,
      title: "Mobile App Development",
      details: "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
      technologies: [
        { name: "React JS", icon: react, alt: "React Logo" },
        { name: "Angular", icon: angular, alt: "Angular Logo" },
        { name: "Laravel", icon: laravel, alt: "Laravel Logo" },
        { name: "Node JS", icon: nodejs, alt: "NodeJS Logo" }
      ]
    },
    { 
      titleIcon: ionic,
      title: "Graphic Designing",
      details: "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
      technologies: [
        { name: "React JS", icon: react, alt: "React Logo" },
        { name: "Angular", icon: angular, alt: "Angular Logo" },
        { name: "Laravel", icon: laravel, alt: "Laravel Logo" },
        { name: "Node JS", icon: nodejs, alt: "NodeJS Logo" }
      ]
    },
    { 
      titleIcon: ionic,
      title: "UI/UX Design",
      details: "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
      technologies: [
        { name: "React JS", icon: react, alt: "React Logo" },
        { name: "Angular", icon: angular, alt: "Angular Logo" },
        { name: "Laravel", icon: laravel, alt: "Laravel Logo" },
        { name: "Node JS", icon: nodejs, alt: "NodeJS Logo" }
      ]
    },
    { 
      titleIcon: ionic,
      title: "Quality Assurance",
      details: "Explore our user-friendly and seamless website and app development services, designed for easy management.",
      technologies: [
        { name: "React JS", icon: react, alt: "React Logo" },
        { name: "Angular", icon: angular, alt: "Angular Logo" },
        { name: "Laravel", icon: laravel, alt: "Laravel Logo" },
        { name: "Node JS", icon: nodejs, alt: "NodeJS Logo" }
      ]
    },
    { 
      titleIcon: ionic,
      title: "Digital Marketing",
      details: "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
      technologies: [
        { name: "React JS", icon: react, alt: "React Logo" },
        { name: "Angular", icon: angular, alt: "Angular Logo" },
        { name: "Laravel", icon: laravel, alt: "Laravel Logo" },
        { name: "Node JS", icon: nodejs, alt: "NodeJS Logo" }
      ]
    }
  ];

  // State hook to keep track of the active accordion index (expanded state)
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full serviceData max-w-[90%] mx-auto p-2 sm:p-4">
      {/* Section Heading */}
      <h1
        className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
        style={{
          textShadow:
            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
        }}
      >
        Services We Offer
      </h1>

      {/* Service Description */}
      <div className="mb-20 text-white text-left text-sm">
        <p>
          We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services. We specialise in the following services:
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-10 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)} // Expand the service on hover
            onMouseLeave={() => setActiveIndex(null)} // Collapse the service when the mouse leaves
            className={`w-full border rounded-3xl shadow-md overflow-hidden transition-all duration-300 ease-out transform
              ${activeIndex === index ? 'bg-gradient-to-r from-[#2e415c] to-[#051c3f] border-[#6ec1e4] translate-y-[-5px] scale-105' : 'bg-gradient-to-r from-[#0b1b33] to-[#01132E] border-white hover:bg-gradient-to-r hover:from-[#0b1b33] hover:to-[#01132E] scale-105'}`}
            style={{ borderWidth: '0.5px' }}
          >
            {/* Accordion Header - This contains the service title and icon */}
            <div className="flex items-center p-4 text-lg font-semibold text-white">
              <img src={service.titleIcon} alt="Service Icon" className="w-8 h-8 mr-3" /> {/* Title Icon */}
              <span>{service.title}</span> {/* Service Title */}
            </div>

            {/* Accordion Content */}
            <div
              className={`px-4 text-white text-sm transition-all duration-300 ease-out
                ${activeIndex === index ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col md:flex-row items-center space-x-8">
                {/* Left side: Details about the service */}
                <div className="flex-1 text-left md:w-1/2">{service.details}</div>

                {/* Right side: List of technologies used in the service */}
                <div className="flex flex-wrap md:flex-row sm:flex-row justify-start space-x-6 sm:space-x-4 md:space-x-6">
                  {service.technologies.map((tech, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <img
                        src={tech.icon}
                        alt={tech.alt}
                        className="w-9 h-9 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 object-contain transition-transform transform hover:scale-110" // Responsive sizes and hover effect
                      />
                      <span className="text-xs mt-2 text-center text-white group-hover:text-[#17252b]">
                        {tech.name} {/* Technology Name */}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
