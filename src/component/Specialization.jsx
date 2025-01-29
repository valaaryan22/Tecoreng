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

const Specialization = () => {
  const [selectedCard, setSelectedCard] = useState(2); // Initially selected card (centered)

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

  const handleCardClick = (direction) => {
    if (direction === 'left') {
      setSelectedCard((prev) => (prev - 1 + services.length) % services.length); // Move to the previous card
    } else if (direction === 'right') {
      setSelectedCard((prev) => (prev + 1) % services.length); // Move to the next card
    }
  };

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
          >
            Our Specialization
          </h1>
          <p className="text-lg leading-relaxed text-left max-w-3xl text-gray-300">
            We offer a full range of web app development services that make things better for enterprises and companies we work with.
            Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services.
            We specialize in the following services:
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative w-full max-w-8xl h-[320px] flex text-center items-center mb-11 justify-center">
        {visibleCards.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => setSelectedCard(service.id)} // You can still click to change the card
              className={`service-card absolute p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105
                ${index === 1 ? 'bg-white scale-150 z-30' : 'bg-white scale-90 z-20 opacity-70 hover:opacity-90'}`}
              style={{
                transform: `translateX(${(index - 1) * 220}px) translateY(-10%) ${index === 1 ? 'scale(1.6)' : 'scale(0.9)'}`,
              }}
            >
              {/* Icon on top */}
              <div className="flex justify-center mb-4">
                <Icon size={40} className={`${index === 1 ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              {/* Title below icon */}
              <h2 className="text-lg font-bold text-center mb-4 text-black">{service.title}</h2>
              {/* Description */}
              <p className={`text-xs leading-relaxed text-center ${index === 1 ? 'text-gray-700' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Arrow Navigation */}
      <div className="flex justify-between absolute top-1/2 left-0 right-0 px-5">
        <button onClick={() => handleCardClick('left')} className="bg-blue-500 text-white p-2 rounded-full">
          ←
        </button>
        <button onClick={() => handleCardClick('right')} className="bg-blue-500 text-white p-2 rounded-full">
          →
        </button>
      </div>

      {/* Custom Breakpoints for Responsive Design */}
      <style>{`
        .service-card {
          max-width: 280px;
          min-width: 230px;
          overflow: hidden; /* Prevent overflow */
           /* Add ellipsis for overflow text */
           /* Prevent text wrapping */
        }

        /* For smaller devices (like iPhone 12 with width: 390px) */
        @media (max-width: 391px) {
          .service-card {
            height: auto; /* Allow height to adjust dynamically */
            transform: scale(0.8); /* Scale cards down slightly */
            max-width: 160px;
            min-width: 150px;
            white-space: nowrap;
          }

          /* Adjust title font size */
          .service-card h2 {
            font-size: 0.6rem; /* Smaller font size */
            word-wrap: break-word; /* Allow word wrapping for the title */
          }

          /* Adjust description font size */
          .service-card p {
            font-size: 0.5rem; /* Smaller font size */
            word-wrap: break-word; /* Allow word wrapping for the description */
            display: block; /* Ensure description wraps properly */
            overflow: hidden;
            text-overflow: ellipsis; /* Add ellipsis for overflowed text */
          }
        }

        /* Small screen styles */
        @media (max-width: 576px) {
          .service-card {
            max-width: 180px;
            min-width: 150px;
            width: 90%;  /* Increased width to 90% */
            height: auto; /* Allow height to adjust dynamically */
            transform: scale(0.85);
            margin-left: 0px; /* Adjusted margin */
            margin-right: 0px; /* Adjusted margin */
            white-space: nowrap;
          }

          .service-card h2 {
            font-size: 1rem; /* Reduced font size */
          }

          .service-card p {
            font-size: 0.75rem; /* Reduced font size */
          }
        }

        /* Tablet size */
        @media (min-width: 576px) and (max-width: 768px) {
          .service-card {
            width: 90%;
            height: auto;
            transform: scale(0.9);
            white-space: nowrap;
          }

          .service-card h2 {
            font-size: 1.2rem;
          }

          .service-card p {
            font-size: 0.9rem;
          }
        }

        /* Larger tablets */
        @media (min-width: 768px) and (max-width: 992px) {
          .service-card {
            width: 90%;
            height: auto;
            transform: scale(1);
          }
        }

        /* Desktops and larger */
        @media (min-width: 992px) {
          .service-card {
            width: 280px; /* Ensure full width of the card is visible */
            transform: scale(1); /* Ensure no scaling */
          }

          .service-card-wrapper {
            display: flex;
            justify-content: space-between;
            width: 45%;
          }
        }
      `}</style>
    </>
  );
};

export default Specialization;
