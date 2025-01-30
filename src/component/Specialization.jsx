import { Globe2, Megaphone, Palette, Radio, Smartphone } from 'lucide-react'; // Importing icons from lucide-react
import { useState } from 'react'; // Importing useState for state management
import '../css/Specialization.css'; // Importing custom CSS for styling the component

// Array of services, each with an id, title, description, and icon
const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts continue growing with the latest technology such as Laravel, Angular, Node.Js, and more.',
    icon: Globe2, // Icon for web development
  },
  {
    id: 2,
    title: 'UI/UX Graphics & Design',
    description:
      'Tecoreng is the best UI/UX graphics design agency. We build smooth and high-quality designs with our UI/UX team, focusing on creating a strong brand identity and enhancing product awareness.',
    icon: Palette, // Icon for UI/UX design
  },
  {
    id: 3,
    title: 'Internet of Things',
    description:
      'IoT application development connects physical devices to the Internet, enabling seamless data exchange. It supports various interfaces and devices to make life convenient.',
    icon: Radio, // Icon for IoT
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description:
      'Tecoreng is a leading mobile app development company in India. Our expert team creates high-quality mobile apps for multiple platforms, including iOS and Android.',
    icon: Smartphone, // Icon for mobile app development
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description:
      'Technical Core Engineers is a digital organization offering services to create your brand identity by refining ideas and focusing on getting your products and services to the ever-growing digital market, increasing brand awareness, sales, and demand.',
    icon: Megaphone, // Icon for digital marketing
  },
];

const Specialization = () => {
  // State hook to track the selected card (which card is clicked)
  const [selectedCard, setSelectedCard] = useState(2); // Initially set to 2 (center card)

  // Function to get the visible cards based on the currently selected card
  const getVisibleCards = () => {
    // Find the index of the currently selected card
    const currentIndex = services.findIndex((service) => service.id === selectedCard);
    // Get the previous card (wrap around if the index is out of bounds)
    const previousIndex = (currentIndex - 1 + services.length) % services.length;
    // Get the next card (wrap around if the index is out of bounds)
    const nextIndex = (currentIndex + 1) % services.length;
    // Return the previous, current, and next card
    return [
      services[previousIndex],
      services[currentIndex],
      services[nextIndex],
    ];
  };

  // Get the cards that should be visible based on the selected card
  const visibleCards = getVisibleCards();

  return (
    <div>
      <div className="flex flex-col items-start ml-5 justify-start w-full py-16 px-4" style={{ backgroundColor: '#01132E' }}>
        {/* Header Section */}
        <div className="max-w-4xl w-full mb-16">
          {/* Main Heading */}
          <h1
            className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
            style={{
              textShadow:
                "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
            }}
          >
            Our Specialization
          </h1>
          {/* Description Paragraph */}
          <p className="text-lg leading-relaxed text-left max-w-3xl text-gray-300">
            We offer a full range of web app development services that make things better for enterprises and companies we work with.
            Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services.
            We specialize in the following services:
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative w-full max-w-8xl h-[320px] flex text-center items-center mb-11 justify-center">
        {/* Loop through the visible cards and display them */}
        {visibleCards.map((service, index) => {
          // Destructure to get the icon component for each service
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => setSelectedCard(service.id)} // Click to select and update the active card
              className={`service-card absolute p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-105
                ${index === 1 ? 'bg-white scale-150 z-30' : 'bg-white scale-90 z-20 opacity-70 hover:opacity-90'}`} // Conditional styles for the selected (centered) card
              style={{
                transform: `translateX(${(index - 1) * 220}px) translateY(-10%) ${index === 1 ? 'scale(1.6)' : 'scale(0.9)'}`, // Position and scale cards differently
              }}
            >
              {/* Icon on top of each card */}
              <div className="flex justify-center mb-4">
                <Icon size={40} className={`${index === 1 ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              {/* Title below icon */}
              <h2 className="text-lg font-bold text-center mb-4 text-black">{service.title}</h2>
              {/* Description below title */}
              <p className={`text-xs leading-relaxed text-center ${index === 1 ? 'text-gray-700' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Arrow Navigation (Future feature or to be added later) */}

      {/* Custom Breakpoints for Responsive Design */}
      
    </div>
  );
};

export default Specialization;
