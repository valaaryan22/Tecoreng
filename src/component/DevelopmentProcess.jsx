import { useEffect, useRef, useState } from 'react';
import Ball from '../assets/Ball.svg';
import BallEntry from '../assets/DevlopmentItems/ballentry.svg';
import ballexit from '../assets/DevlopmentItems/ballexit.webp';
import devimg1 from '../assets/DevlopmentItems/devimg1.webp';
import devimg2 from '../assets/DevlopmentItems/devimg2.webp';
import devimg3 from '../assets/DevlopmentItems/devimg3.webp';
import devimg4 from '../assets/DevlopmentItems/devimg4.webp';
import devimg5 from '../assets/DevlopmentItems/devimg5.webp';
import devimg6 from '../assets/DevlopmentItems/devimg6.webp';
import devimg7 from '../assets/DevlopmentItems/devimg7.webp';
import '../css/DevelopmentProcess.css';

const DevelopmentProcess = () => {
  const [ballStyle, setBallStyle] = useState({
    transform: 'translate3d(27.622px, 0.98716px, 0px) rotate(2.37289deg)',
    opacity: 0,
  });
  const containerRef = useRef(null); // To refer to the container

  const steps = [
    { title: "Research and Analysis", description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering", imageSrc: devimg1, position: "left" },
    { title: "Design", description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping", imageSrc: devimg2, position: "right" },
    { title: "Development", description: "Functional Implementation, Software Coding & Optimization", imageSrc: devimg3, position: "left" },
    { title: "Testing", description: "Quality Assurance, Troubleshooting, & Testing", imageSrc: devimg4, position: "right" },
    { title: "Deployment", description: "Launch, Beta Live, & Live", imageSrc: devimg5, position: "left" },
    { title: "Evaluation", description: "Performance Evaluation, & Analytics Implementation", imageSrc: devimg6, position: "right" },
    { title: "Maintenance", description: "Monitoring, Feedback, Analysis, & Complete Support", imageSrc: devimg7, position: "left" },
  ];

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
      { x: 100, y: 55 },           // Start at ballentry (ball image position)
      { x: 1050, y: 500 },            // Research point
      { x: -50, y: 900 },             // Design point
      { x: 1050, y: 1400 },           // Development point
      { x: -50, y: 1700 },            // Testing point
      { x: 1050, y: 2000 },           // Deployment point
      { x: -125, y: 2600 },           // Evaluation point
      { x: 1050, y: 2850 },           // Maintenance point
      { x: 1050, y: 2900 }            // End at ballexit (exit point)
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
    const rotation = 2.37289 + (Math.sin(progress * Math.PI * 2) * 5);

    // Update ball position and rotation with slower   and added animations
    setBallStyle({
      transform: `translate3d(${x}px, ${y}px, 0px) rotate(${rotation}deg)`,
      opacity: 1,  // Make the ball visible when in motion
      transition: 'transform 0.4s ease-out', // Smoother transition for position change
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

  return (
    <div className="development-container" ref={containerRef}>
      <h1
        className="text-5xl  font-extrabold ml-10 text-left mb-8 text-gray-100 tracking-wide"
        style={{
          textShadow: "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px"
        }}
      >
        Our Development Process
      </h1>

      <div className="svg-container">
        <img src={BallEntry} alt="Ball Entry" className="ball-entry ml-5 mb-8" />
        <img
          src={Ball}
          alt="Ball"
          
          className="ball"
          style={ballStyle}
        />
      </div>

      {steps.map((step, index) => (
        <div key={index} className={`development-step ${step.position}`}>
          <div className="development-box">
            {step.position === 'left' ? (
              <>
                <div className="image-container">
                  <img src={step.imageSrc} alt={step.title} className="step-image" />
                </div>
                <div className="text-container">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-container">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
                <div className="image-container">
                  <img src={step.imageSrc} alt={step.title} className="step-image" />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Ball Exit Section */}
      <div className="diTaJz d-none d-lg-block">
        <div className="ballExit" style={{ position: "absolute", bottom: "20px", right:'140px'
         }}>
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
  );
};

export default DevelopmentProcess;
