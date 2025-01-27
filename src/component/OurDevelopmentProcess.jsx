import React from 'react';

const OurDevelopmentProcess = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Development Process
        </h2>

        {/* Right-Angled Triangle Shape Card */}
        <div
          className="relative p-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-lg"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Right-angled triangle
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">Research and Analysis</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Idea</li>
            <li>Consultation</li>
            <li>Research</li>
            <li>Goal Definition</li>
            <li>Requirements Gathering</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurDevelopmentProcess;
