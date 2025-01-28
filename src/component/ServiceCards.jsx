import { Globe2, Megaphone, Palette, Radio, Smartphone } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts continue growing with the latest technology such as Laravel, Angular, Node.Js, and more.',
    icon: Globe2
  },
  {
    id: 2,
    title: 'UI/UX Graphics & Design',
    description:
      'Tecoreng is the best UI/UX graphics design agency. We build smooth and high-quality designs with our UI/UX team, focusing on creating a strong brand identity and enhancing product awareness.',
    icon: Palette
  },
  {
    id: 3,
    title: 'Internet of Things',
    description:
      'IoT application development connects physical devices to the Internet, enabling seamless data exchange. It supports various interfaces and devices to make life convenient.',
    icon: Radio
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description:
      'Tecoreng is a leading mobile app development company in India. Our expert team creates high-quality mobile apps for multiple platforms, including iOS and Android.',
    icon: Smartphone
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description:
      'Technical Core Engineers is a digital organization offering services to create your brand identity by refining ideas and focusing on getting your products and services to the ever-growing digital market, increasing brand awareness, sales, and demand.',
    icon: Megaphone
  },
];

const ServiceCards = () => {
  const [selectedCard, setSelectedCard] = useState(2);

  const getVisibleCards = () => {
    const currentIndex = services.findIndex((service) => service.id === selectedCard);
    const previousIndex = (currentIndex - 1 + services.length) % services.length;
    const nextIndex = (currentIndex + 1) % services.length;
    return [
      services[previousIndex],
      services[currentIndex],
      services[nextIndex],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <>
      <div className="flex flex-col items-start ml-5 justify-start w-full py-16 px-4" style={{ backgroundColor: '#01132E' }}>
        {/* Header Section */}
        <div className="max-w-4xl w-full mb-16">
        <h1
        className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
        style={{
          textShadow:
            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
        }}
      >     Our Specialization
      </h1>
          <p className="text-lg leading-relaxed text-left max-w-3xl text-gray-300">
            We offer a full range of web app development services that make things better for enterprises and companies we work with.
            Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services.
            We specialize in the following services:
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative w-full max-w-8xl h-[320px] flex text-center items-center mb-5 justify-center">
        {visibleCards.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => setSelectedCard(service.id)}
              className={`service-card absolute p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105
                ${index === 1 ? 'bg-white scale-150 z-30' : 'bg-white scale-90 z-20 opacity-60 hover:opacity-80'}`}
              style={{
                transform: `translateX(${(index - 1) * 340}px) ${index === 1 ? 'scale(1.5)' : 'scale(0.9)'}`,
              }}
            >
              {/* Icon on top */}
              <div className="flex justify-center mb-4">
                <Icon size={40} className={`${index === 1 ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              {/* Title below icon (black color) */}
              <h2 className="text-lg font-bold text-center mb-4 text-black">{service.title}</h2>
              {/* Description */}
              <p className={`text-xs leading-relaxed text-center ${index === 1 ? 'text-gray-700' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Custom Breakpoints for Responsive Design */}
      <style>{`
        .service-card {
          max-width: 320px;
          min-width: 270px;
        }

        @media (max-width: 576px) {
          .service-card {
            width: 100%;
          }

          .service-card-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
          }
        }
        @media (min-width: 576px) and (max-width: 768px) {
          .service-card {
            width: 100%;
          }

          .service-card-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }
        @media (min-width: 768px) and (max-width: 992px) {
          .service-card {
            width: 100%;
          }
        }
        @media (min-width: 992px) {
          .service-card-wrapper {
            display: flex;
            justify-content: space-between;
            width: 50%;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceCards;
