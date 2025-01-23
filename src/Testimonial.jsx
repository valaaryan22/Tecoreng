import { motion } from 'framer-motion';

const Testimonial = ({ image, name, title, text }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-lg shadow-lg overflow-hidden h-full"
        >
            <div className="p-6 space-y-4">
                <div className="relative h-64 w-full">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full rounded-t-lg"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
                    <p className="text-muted-foreground">{title}</p>
                </div>
                <p className="text-muted-foreground">{text}</p>
            </div>
        </motion.div>
    );
};

const TestimonialSection = () => {
    const testimonials = [
        {
            image: 'src/assets/OIP2.jpeg',
            name: 'Denis Cartin',
            title: 'CTO, SoSFba',
            text:
                'They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project\'s progress. They also shared significant insights and suggestions for developing the project.'
        },
        {
            image: 'src/assets/OIP.jpeg',
            name: 'Kean Graham',
            title: 'CEO, MonetizeMore',
            text:
                'What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.'
        },
        {
            image: 'src/assets/OIP.jpeg',
            name: 'Chetan Patwardhan',
            title: 'CEO, HiQuest Group of IT Companies',
            text:
                'What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        image={testimonial.image}
                        name={testimonial.name}
                        title={testimonial.title}
                        text={testimonial.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;