import React, { useEffect, useRef, useState } from 'react';
import Ball from '../assets/Ball.svg';
import ballentry from '../assets/ballentry.svg';
import ballexit from '../assets/ballexit.webp';
import devimg1 from '../assets/devimg1.webp';
import devimg2 from '../assets/devimg2.webp';
import devimg3 from '../assets/devimg3.webp';
import devimg4 from '../assets/devimg4.webp';
import devimg5 from '../assets/devimg5.webp';
import devimg6 from '../assets/devimg6.webp';
import devimg7 from '../assets/devimg7.webp';

const DevelopmentProcess = () => {
    const [ballStyle, setBallStyle] = useState({
        transform: 'translate3d(27.622px, 0.98716px, 0px) rotate(2.37289deg)',
        animation: 'fall 4s ease-out 1, roll 10s linear infinite, bounce 2s ease-in-out infinite', // Slower fall and bounce animation
    });
    const containerRef = useRef(null);

    const handleScroll = () => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const viewportHeight = window.innerHeight;

        // Calculate progress (0 to 1) based on container's position in viewport
        let progress = (viewportHeight - containerTop) / (containerHeight + viewportHeight);
        progress = Math.max(0, Math.min(1, progress));

        // Define control points for the path
        const path = [
            { x: 150, y: -250 },           // Start at ballentry (ball image position)
            { x: 1050, y: 500 },            // Research point
            { x: -50, y: 850 },           // Design point
            { x: 1050, y: 1300 },            // Development point
            { x: -50, y: 1490 },           // Testing point
            { x: 1050, y: 2150 },           // Deployment point
            { x: -125, y: 2400 },          // Evaluation point
            { x: 1050, y: 2690 },           // Maintenance point
            { x: 1000, y: 2700 }            // End at ballexit (exit point)
        ];

        // Find current segment
        const totalSegments = path.length - 1;
        const currentSegment = Math.min(Math.floor(progress * totalSegments), totalSegments - 1);
        const segmentProgress = (progress * totalSegments) % 1;

        // Calculate current position
        const start = path[currentSegment];
        const end = path[currentSegment + 1];
        
        // Interpolate position
        const x = start.x + (end.x - start.x) * segmentProgress;
        const y = start.y + (end.y - start.y) * segmentProgress;

        // Calculate rotation based on movement direction
        const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
        const rotation = 2.37289 + (Math.sin(progress * Math.PI * 2) * 5);

        // Update ball position and rotation with slower fall and added animations
        setBallStyle({
            transform: `translate3d(${x}px, ${y}px, 0px) rotate(${rotation}deg)`,
            transition: 'transform 0.5s ease-out', // Smoother transition for position change
            animation: 'fall 4s ease-out 1, roll 10s linear infinite, bounce 2s ease-in-out infinite', // Slower fall and added bounce animation
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Initial position calculation
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const stages = [
        { title: "Research and Analysis", description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering", imgSrc: devimg1, alt: "kickOff" },
        { title: "Design", description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping", imgSrc: devimg2, alt: "Design" },
        { title: "Development", description: "Functional Implementation, Software Coding & Optimization", imgSrc: devimg3, alt: "Development" },
        { title: "Testing", description: "Quality Assurance, Troubleshooting, & Testing", imgSrc: devimg4, alt: "Testing" },
        { title: "Deployment", description: "Launch, Beta Live, & Live", imgSrc: devimg5, alt: "Deployment" },
        { title: "Evaluation", description: "Performance Evaluation, & Analytics Implementation", imgSrc: devimg6, alt: "Evaluation" },
        { title: "Maintenance", description: "Monitoring, Feedback, Analysis, & Complete Support", imgSrc: devimg7, alt: "Maintenance" },
    ];

    return (
        <div className="mt-8 pt-4" ref={containerRef}>
            <section className="hcygZN" style={{ background: "rgb(17, 37, 66)" }}>
                <div className="container">
                    <div className="Bejbq">
                        <div className="ctezdg">
                            <h1
                                className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
                                style={{
                                    textShadow: "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px"
                                }}
                            >
                                Our Development Process
                            </h1>
                        </div>
                        <div className="stagesProcess position-relative">
                            {/* Ball Entry */}
                            <div className="ballEntry d-none d-lg-block">
                                <img
                                    alt="ball entry"
                                    loading="lazy"
                                    width="65"
                                    height="124"
                                    src={ballentry}
                                    className="entryBall"
                                />
                            </div>

                            {/* Animated Ball */}
                            <div className="ball3d position-absolute d-none d-lg-block" style={{ left: "0%" }}>
                                <div className="ball" style={ballStyle}>
                                    <img
                                        alt="Ball"
                                        loading="lazy"
                                        width="80"
                                        height="80"
                                        src={Ball}
                                        className="mainBall"
                                    />
                                </div>
                            </div>

                            {/* Development Stages */}
                            <div className="stagesBoxes">
                                {stages.map((stage, index) => (
                                    <div
                                        key={index}
                                        className={`lpcpoA ${index % 2 === 1 ? "ms-auto" : ""}`}
                                        style={index % 2 === 1 ? { transform: "scale(-1, 1)" } : {}}
                                    >
                                        <div className="NfKcz">
                                            <div className="leftSide" style={{
                                                width: "100%",
                                                maxWidth: "600px",
                                                height: "285px",
                                                display: "flex",
                                                clipPath: "polygon(0px 0px, 0px 100%, 100% 100%, 100% 50%, 0% -1%)",
                                                background: "linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)",
                                                boxShadow: "rgba(0, 0, 0, 0.25) 0px 8px 10px",
                                                borderRadius: "20px",
                                                marginRight: "20px",
                                                transform: "translateY(40%)"
                                            }}>
                                                <div className="pt-5 pl-3">
                                                    <img
                                                        alt={stage.alt}
                                                        loading="lazy"
                                                        width="96"
                                                        height="96"
                                                        src={stage.imgSrc}
                                                        style={{
                                                            transform: "translateY(40px)"
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="rightSide pb-2" style={{
                                                color: "rgb(255, 255, 255)",
                                                fontFamily: "Poppins, sans-serif",
                                                fontStyle: "normal",
                                                padding: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                maxWidth: "500px",
                                                transform: index % 2 === 1
                                                    ? "scaleX(-1)"
                                                    : "translateY(-35%) translateX(20%)"
                                            }}>
                                                <h3>{stage.title}</h3>
                                                <p className="desc">{stage.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Ball Exit */}
                            <div className="diTaJz d-none d-lg-block">
                                <div className="ballExit" style={{ position: "absolute", bottom: "20px", right: "30px" }}>
                                    <img
                                        alt="ball exit"
                                        loading="lazy"
                                        width="209"
                                        height="83"
                                        src={ballexit}
                                        className="exitBall"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevelopmentProcess;
