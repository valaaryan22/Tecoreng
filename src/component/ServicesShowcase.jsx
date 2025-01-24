import { Player } from "video-react";
import "video-react/dist/video-react.css";

function Card({ children, className }) {
    return <div className={`rounded-lg shadow-lg ${className} bg-[#0e1c31]`}>{children}</div>;
}

function CardContent({ children, className }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function ServicesShowcase() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-100 tracking-wide">
                Our Success Stories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Decreased gap */}
                <div className="h-full">
                    <Card className="overflow-hidden rounded-3xl h-full hover:bg-accent transition-colors duration-300">
                        <CardContent className="p-0">
                            <div className="relative h-64 w-full">
                                <img
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Betting Platform"
                                    className="object-cover w-full h-full rounded-3xl"
                                />
                                <div className="absolute top-0 left-0 w-full h-full rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <Player
                                        playsInline
                                        muted
                                        autoPlay
                                        loop
                                        poster="/assets/poster.png"
                                        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
                                    />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold tracking-tight text-white">
                                    Betting Platform
                                </h3>
                                <p className="text-muted-foreground">
                                    Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.
                                </p>
                                <a
                                    href="/portfolio/betting-platform"
                                    className="inline-block text-primary hover:text-primary/80 transition-colors"
                                >
                                    Learn more → 
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="h-full">
                    <Card className="overflow-hidden rounded-3xl h-full hover:bg-accent transition-colors duration-300">
                        <CardContent className="p-0">
                            <div className="relative h-64 w-full">
                                <img
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Health and Wellness"
                                    className="object-cover w-full h-full rounded-3xl"
                                />
                                <div className="absolute top-0 left-0 w-full h-full rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <Player
                                        playsInline
                                        muted
                                        autoPlay
                                        loop
                                        poster="/assets/poster.png"
                                        src="https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
                                    />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold tracking-tight text-white">
                                    Health and Wellness
                                </h3>
                                <p className="text-muted-foreground">
                                    Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey.
                                </p>
                                <a
                                    href="/portfolio/health-wellness"
                                    className="inline-block text-primary hover:text-primary/80 transition-colors"
                                >
                                    Learn more → 
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="h-full">
                    <Card className="overflow-hidden rounded-3xl h-full hover:bg-accent transition-colors duration-300">
                        <CardContent className="p-0">
                            <div className="relative h-64 w-full">
                                <img
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="E-Commerce"
                                    className="object-cover w-full h-full rounded-3xl"
                                />
                                <div className="absolute top-0 left-0 w-full h-full rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <Player
                                        playsInline
                                        muted
                                        autoPlay
                                        loop
                                        poster="/assets/poster.png"
                                        src="https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
                                    />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold tracking-tight text-white">
                                    E-Commerce
                                </h3>
                                <p className="text-muted-foreground">
                                    Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship.
                                </p>
                                <a
                                    href="/portfolio/ecommerce"
                                    className="inline-block text-primary hover:text-primary/80 transition-colors"
                                >
                                    Learn more → 
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
