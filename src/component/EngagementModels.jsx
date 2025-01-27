import React from 'react';

const EngagementModels = () => {
  const cardData = [
    {
      title: 'Hire Full-time Developer',
      description:
        "Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals.",
    },
    {
      title: 'Hire Part-time Developer',
      description:
        "Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire.",
    },
    {
      title: 'Professional Services',
      description:
        "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale.",
    },
  ];

  return (
    <div className="p-8 bg-[#01132E] text-white">
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Flexible Engagement Models</h2>
        <p className="text-gray-300">
          Our team is your partner for the next big digital leap. Our customized and highly flexible engagement models are designed to meet business objectives. All of our service engagements are focused on customer satisfaction, and we ensure that clear communication is maintained throughout.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-[#01132E] text-white shadow-md rounded-2xl border-4 border-white overflow-hidden group"
          >
            {/* Gradient overlay with hover effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

            {/* Title with consistent sky-500 background */}
            <h3 className="text-xl font-semibold mb-2 p-2 bg-sky-500 text-white rounded-t-2xl relative z-10">
              {card.title}
            </h3>

            {/* Content */}
            <p className="p-4 relative z-10 group-hover:text-white transition-colors duration-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementModels;
