import { FaRegThumbsUp, FaTachometerAlt, FaTools, FaUsers } from "react-icons/fa"; // Importing icons from react-icons library

const WhyChooseUs = () => {
  // Define an array of reasons with optional icons and titles
  const reasons = [
    {
      icon: <FaRegThumbsUp className="text-3xl text-blue-500" />, // Icon for Reporting & Analysis
      title: "Reporting & Analysis",
    },
    {
      icon: <FaTachometerAlt className="text-3xl text-blue-500" />, // Icon for On-Time Delivery
      title: "On-Time Delivery",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />, // Icon for Seamless Communication
      title: "Seamless Communication",
    },
    {
      icon: <FaTools className="text-3xl text-blue-500" />, // Icon for Post Launch Support
      title: "Post Launch Support",
    },
    {
      icon: null, // No icon for this reason
      title: "Agile Methodology",
    },
    {
      icon: null, // No icon for this reason
      title: "Certified Experts",
    },
    {
      icon: null, // No icon for this reason
      title: "Budget Friendly",
    },
    {
      icon: null, // No icon for this reason
      title: "100% Client Expectation",
    },
  ];

  return (
    <div
      className="w-full p-4 bg-gradient-to-b from-[#112542] to-[#112542]" // Full width and height, gradient background
      
     >
      {/* Heading Section */}
      <h2
        className="mb-6 pl-6 text-5xl heading font-bold tracking-widest uppercase text-transparent stroke-white title-font"
        style={{
          WebkitTextStroke: "1px white", // Adding a white stroke effect to the title
        }}
      >
        Why Tecoreng for Your Next Project
      </h2>

      {/* Description Paragraph */}
      <div className="text-left divpagh pl-6 pr-20">
        <p className="text-white text-lg leading-8 mt-9 mb-6 w-4/5 paragraph-font">
          {/* Brief description of Tecoreng's values and mission */}
          Introducing Technical Core Engineers (TCE), the intersection of technology and innovation. At TCE, we excel
          in delivering exceptional IT services customized to fulfill your development requirements. Harnessing our
          expertise and enthusiasm, we breathe life into your ideas. Backed by a team of seasoned developers with
          extensive knowledge in various programming technologies, our dedication is unwavering, ensuring the delivery
          of outstanding results. Our mission is straightforward: decode the language of binary and transform it into
          extraordinary digital solutions that empower your business.
        </p>
      </div>

      {/* Contact Button */}
      <button
        className="flex items-center button justify-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white font-bold text-lg uppercase transform transition-transform duration-300 hover:translate-y-[-4px] ml-6"
      >
        Get in Touch
      </button>

      {/* Reason Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 md:pl-6">
        {/* Loop through the `reasons` array to render each reason card */}
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#0b1b33] Grid text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            style={{
              boxShadow: "rgb(1, 19, 46) 0px 12px 17px", // Shadow effect for card
              borderRadius: "17px", // Rounded corners for cards
              backgroundImage:
                "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)), linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%)", // Custom gradient background
            }}
          >
            {/* Render the icon if it exists */}
            {reason.icon && <div className="mb-4">{reason.icon}</div>}
            {/* Title of the reason */}
            <h3 className="text-sm sm:text-lg font-semibold reason-title-font">{reason.title}</h3>
          </div>
        ))}
      </div>

      {/* Custom CSS Styles for responsiveness */}
      <style>{`
        /* Styles for mobile view */
        @media (max-width: 767px) {
          .paragraph-font {
            width: 100%; // Make the paragraph width full on small screens
            line-height: 20px; // Adjust line-height for readability
            margin: 20px 0px; // Adjust margins for mobile view
          }
            .divpagh{
           padding-left:5px;
           padding-right:1px;
  
           }
           .heading{
           padding-left:5px;
           padding-right:1px;
           } 
           .button{
           margin-left:5px;
           border-radius:12px;
            margin-bottom:5px;
           }
            .Grid{
            padding-left:5px;
            }


        }
 @media (max-width: 480px) {
          .paragraph-font {
            width: 100%; // Make the paragraph width full on small screens
            line-height: 20px; // Adjust line-height for readability
            margin: 20px 0px; // Adjust margins for mobile view
          }
            .divpagh{
           padding-left:5px;
           padding-right:1px;
  
           }
           .heading{
           padding-left:5px;
           padding-right:1px;
           } 
           .button{
           margin-left:5px;
           border-radius:12px;
            margin-bottom:5px;
           }
            .Grid{
            padding-left:10px;
            }


        }

        /* Styles for tablets or small screens */
        @media (max-width: 768px) {
          .paragraph-font {
            font-size: 12px; // Smaller font size for mobile
          }

          .title-font {
            font-family: Arial, sans-serif; // Custom font for title on mobile
            font-size: 24px; // Adjust font size for mobile
          }

          .reason-title-font {
            font-family: Arial, sans-serif; // Custom font for reason titles
            font-size: 14px; // Adjust font size for reason titles on mobile
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
