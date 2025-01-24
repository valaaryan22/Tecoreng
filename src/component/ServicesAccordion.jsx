import React, { useState } from "react";

const ServicesAccordion = () => {
  const services = [
    {
      title: "Web Development",
      details: "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    },
    {
      title: "Mobile App Development",
      details: "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
    },
    {
      title: "Graphic Designing",
      details: "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
    },
    {
      title: "UI/UX Design",
      details: "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
    },
    {
      title: "Quality Assurance",
      details: "Explore our user-friendly and seamless website and app development services, designed for easy management.",
    },
    {
      title: "Digital Marketing",
      details: "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full max-w-[90%] mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Services We Offer</h2>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`w-full border rounded-3xl shadow-md overflow-hidden transition-all duration-300 ease-out transform
              ${activeIndex === index ? 'bg-gradient-to-r from-[#6ec1e4] to-[#0b1b33] border-[#6ec1e4] translate-y-[-5px]' : 'bg-[#0b1b33] border-white hover:border-[#6ec1e4]'}`}
            style={{ borderWidth: '0.5px' }}
          >
            {/* Accordion Header */}
            <div className="p-4 text-lg font-semibold text-white">
              {service.title}
            </div>

            {/* Accordion Content */}
            <div
              className={`px-4 text-white text-sm transition-all duration-300 ease-out
                ${activeIndex === index ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
              style={{ overflow: 'hidden' }}
            >
              {service.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
