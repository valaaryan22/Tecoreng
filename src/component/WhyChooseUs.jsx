import { FaRegThumbsUp, FaTachometerAlt, FaTools, FaUsers } from "react-icons/fa"; // Importing icons

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaRegThumbsUp className="text-3xl text-blue-500" />,
      title: "Reporting & Analysis",
    },
    {
      icon: <FaTachometerAlt className="text-3xl text-blue-500" />,
      title: "On-Time Delivery",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Seamless Communication",
    },
    {
      icon: <FaTools className="text-3xl text-blue-500" />,
      title: "Post Launch Support",
    },
    {
      icon: null,
      title: "Agile Methodology",
    },
    {
      icon: null,
      title: "Certified Experts",
    },
    {
      icon: null,
      title: "Budget Friendly",
    },
    {
      icon: null,
      title: "100% Client Expectation",
    },
  ];

  return (
    <div
      className="w-full min-h-screen p-4 bg-gradient-to-b from-[#112542] to-[#112542]"
    >
      {/* Heading */}
      <h2
        className="mb-6 pl-6 text-5xl font-bold tracking-widest uppercase text-transparent stroke-white title-font"
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        Why Tecoreng for Your Next Project
      </h2>

      {/* Description */}
      <div className="text-left pl-6 pr-20">
        <p className="text-white text-lg leading-8 mt-9 mb-6 w-4/5 paragraph-font">
          Introducing Technical Core Engineers (TCE), the intersection of technology and innovation. At TCE, we excel
          in delivering exceptional IT services customized to fulfill your development requirements. Harnessing our
          expertise and enthusiasm, we breathe life into your ideas. Backed by a team of seasoned developers with
          extensive knowledge in various programming technologies, our dedication is unwavering, ensuring the delivery
          of outstanding results. Our mission is straightforward: decode the language of binary and transform it into
          extraordinary digital solutions that empower your business.
        </p>
      </div>

      {/* Button */}
      <button
        className="flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white font-bold text-lg uppercase transform transition-transform duration-300 hover:translate-y-[-4px] ml-6"
      >
        Get in Touch
      </button>

      {/* Reason Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 pl-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#0b1b33] text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            style={{
              boxShadow: "rgb(1, 19, 46) 0px 12px 17px",
              borderRadius: "17px",
              backgroundImage:
                "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)), linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%)",
            }}
          >
            {reason.icon && <div className="mb-4">{reason.icon}</div>}
            <h3 className="text-lg font-semibold reason-title-font">{reason.title}</h3>
          </div>
        ))}
      </div>

      <style >{`
        @media (max-width: 767px) {
          .paragraph-font {
            width: 100%;
            line-height: 20px;
            margin: 20px 0px;
          }
        }

        @media (max-width: 768px) {
          .paragraph-font {
            font-size: 12px;
          }

          .title-font {
            font-family: Arial, sans-serif;
            font-size: 24px;
          }

          .reason-title-font {
            font-family: Arial, sans-serif;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;