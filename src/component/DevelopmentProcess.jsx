import React from "react";
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
    const stages = [
        {
            title: "Research and Analysis",
            description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
            imgSrc: devimg1,
            alt: "kickOff",
        },
        {
            title: "Design",
            description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
            imgSrc: devimg2,
            alt: "Design",
        },
        {
            title: "Development",
            description: "Functional Implementation, Software Coding & Optimization",
            imgSrc: devimg3,
            alt: "Development",
        },
        {
            title: "Testing",
            description: "Quality Assurance, Troubleshooting, & Testing",
            imgSrc: devimg4,
            alt: "Testing",
        },
        {
            title: "Deployment",
            description: "Launch, Beta Live, & Live",
            imgSrc: devimg5,
            alt: "Deployment",
        },
        {
            title: "Evaluation",
            description: "Performance Evaluation, & Analytics Implementation",
            imgSrc: devimg6,
            alt: "Evaluation",
        },
        {
            title: "Maintenance",
            description: "Monitoring, Feedback, Analysis, & Complete Support",
            imgSrc: devimg7,
            alt: "Maintenance",
        },
    ];

    return (
        <div className="mt-8 pt-4">
        <section className="hcygZN ">
            <div className="container">
                <div className="Bejbq">
                    <div className="ctezdg">
                        <h1
                            className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
                            style={{
                                textShadow:
                                    "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
                            }}
                        >        Our Development Process



                        </h1>
                    </div>
                    <div className="stagesProcess position-relative">
                        <div className="ballEntry d-none d-lg-block">
                            <img
                                alt="ball entry"
                                loading="lazy"
                                width="65"
                                height="124"
                                src={ballentry}
                            />
                        </div>
                        <div className="ball3d position-absolute d-none d-lg-block" style={{ top: "6px", left: "0%" }}>
                            <div className="ball">
                                <img
                                    alt="Ball"
                                    loading="lazy"
                                    width="88"
                                    height="88"
                                    src={Ball}
                                />
                            </div>
                        </div>
                        <div className="stagesBoxes">
                            {stages.map((stage, index) => (
                                <div
                                    key={index}
                                    className={`lpcpoA ${index % 2 === 1 ? "ms-auto" : ""}`}
                                    style={index % 2 === 1 ? { transform: "scale(-1, 1)" } : {}}
                                >
                                    <div className="NfKcz">
                                        {/* Left Side (Image) */}
                                        <div
                                            className="leftSide"
                                            style={{
                                                width: "750px",
                                                height: "275px",
                                                display: "flex",
                                                clipPath: "polygon(0px 0px, 0px 100%, 100% 100%, 100% 50%, 0% -1%)",
                                                background: "linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)",
                                                boxShadow: "rgba(0, 0, 0, 0.25) 0px 8px 10px",
                                                borderRadius: "20px",
                                                marginRight: "20px",
                                                transform: "translateY(50%)", // Shift image down by 50%
                                            }}
                                        >
                                            <div className="pt-5">
                                                <img
                                                    alt={stage.alt}
                                                    loading="lazy"
                                                    width="96"
                                                    height="96"
                                                    src={stage.imgSrc}
                                                />
                                            </div>
                                        </div>

                                        {/* Right Side (Title & Description) */}
                                        <div
                                            className="rightSide"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                fontFamily: "Poppins, sans-serif",
                                                fontStyle: "normal",
                                                padding: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                maxWidth: "500px",
                                                transform:
                                                    stage.title === "Design" ||
                                                        stage.title === "Testing" ||
                                                        stage.title === "Evaluation"
                                                        ? "scaleX(-1)" // Swap direction for Design, Testing, and Evaluation
                                                        : "translateY(-50%) translateX(15%)", // Default transform for other stages
                                            }}
                                        >
                                            <h3>{stage.title}</h3>
                                            <p className="desc">{stage.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="diTaJz d-none  d-lg-block">
                            <div className="ballExit " style={{ position: "absolute", bottom: "20px", right: "30px" }}>
                                <img
                                    alt="ball exit"
                                    loading="lazy"
                                    width="209"
                                    height="83"
                                    src={ballexit}
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
