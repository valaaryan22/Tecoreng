import React, { useState } from 'react';

const ServiceCards = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const services = [
        {
            id: 'iot',
            title: 'Internet Of Things',
            icon: '⚛',
            description: 'Web of Things(IoT) application advancement interfaces each and every device with the Internet to upgrade an exchange of data. It will in general be engaged through different connection points and devices to make more astute applications.',
        },
        {
            id: 'mobile',
            title: 'Mobile App Development',
            icon: '📱',
            description: 'Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android.',
        },
        {
            id: 'web',
            title: 'Web Development',
            icon: '💻',
            description: 'We team creates high-quality websites as per custom requirements and enhance your business digital. Incoming web papers to continue growing and the team up with technology such as Laravel, Angular, Node.js, and more.',
        }
    ];

    return (
        <div className="bg-[#0B1B33] min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedCard(service.id)}
                            className={`cursor-pointer transition-all duration-500 ease-in-out 
                ${selectedCard && selectedCard !== service.id
                                    ? 'w-64 opacity-50 bg-gray-700/50'
                                    : selectedCard === service.id
                                        ? 'w-96 bg-white transform scale-105'
                                        : 'w-64 bg-gray-700/50 hover:bg-gray-600/50'}
                rounded-lg p-6 text-center ${!selectedCard || selectedCard === service.id ? 'z-10' : 'z-0'}`}
                        >
                            <div className={`text-4xl mb-4 ${selectedCard === service.id ? 'text-[#0B1B33]' : 'text-white'}`}>
                                {service.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${selectedCard === service.id ? 'text-[#0B1B33]' : 'text-white'}`}>
                                {service.title}
                            </h3>
                            <p className={`text-sm ${selectedCard === service.id ? 'text-gray-600' : 'text-gray-300'}`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Reset button */}
                {selectedCard && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setSelectedCard(null)}
                            className="bg-[#F86642] hover:bg-[#e55535] text-white px-6 py-2 rounded-md transition-colors duration-300"
                        >
                            View All Services
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCards;