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
            <section className="hcygZN">
                <div className="container">
                    <div className="Bejbq">
                        <div className="ctezdg">
                            <h1
                                className="text-5xl font-extrabold text-left mb-8 text-gray-100 tracking-wide"
                                style={{
                                    textShadow:
                                        "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
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

                            {/* Ball 3D */}
                            <div className="ball3d position-absolute d-none d-lg-block" style={{ top: "6px", left: "0%" }}>
                                <div className="ball">
                                    <img
                                        alt="Ball"
                                        loading="lazy"
                                        width="88"
                                        height="88"
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
                                            {/* Left Side (Image) */}
                                            <div
                                                className="leftSide"
                                                style={{
                                                    width: "100%",
                                                    maxWidth: "600px",
                                                    height: "285px",
                                                    display: "flex",
                                                    clipPath: "polygon(0px 0px, 0px 100%, 100% 100%, 100% 50%, 0% -1%)",
                                                    background: "linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)",
                                                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 8px 10px",
                                                    borderRadius: "20px",
                                                    marginRight: "20px",
                                                    transform: "translateY(40%)", // Shift image down by 50%
                                                }}
                                            >
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

                                            {/* Right Side (Title & Description) */}
                                            <div
                                                className="rightSide pb-2"
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
                                                            : "translateY(-35%) translateX(20%)", // Default transform for other stages
                                                }}
                                            >
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

            {/* Media Queries for Responsiveness */}
            <style>{`
                @media (max-width: 1200px) {
                    .container {
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .stagesBoxes {
                        flex-direction: column;
                        align-items: center;
                    }
                    .leftSide {
                        width: 80%;
                        max-width: 600px;
                        height: 285px;
                        margin-bottom: 20px;
                    }
                    .rightSide {
                        max-width: 100%;
                        text-align: center;
                    }
                    .entryBall, .exitBall, .mainBall {
                        display: none;  /* Hide balls on medium and smaller screens */
                    }
                    h1 {
                        font-size: 2.5rem; /* Reduce font size */
                    }
                    .leftSide img {
                        width: 80px; /* Adjust image size */
                        height: 80px;
                    }
                    .rightSide h3 {
                        font-size: 1.5rem; /* Adjust title font size */
                    }
                    .rightSide p {
                        font-size: 1rem; /* Adjust description font size */
                    }
                }

                @media (max-width: 768px) {
                    .text-5xl {
                        font-size: 2rem; /* Smaller text */
                    }
                    .leftSide {
                        width: 75%;
                        max-width: 500px;
                        height: 250px;
                        margin-bottom: 20px;
                    }
                    .rightSide {
                        padding: 10px;
                    }
                    .leftSide {
                        margin: 0;
                        width: 100%;
                        height: auto;
                    }
                    h1 {
                        font-size: 2rem; /* Smaller header */
                        text-align: center;
                    }
                    .ballEntry {
                        position: absolute;
                        top: 5%;
                        left: 5%;
                        width: 50px;
                        height: 80px;
                    }
                    .ballExit {
                        position: absolute;
                        bottom: 10%;
                        right: 10%;
                        width: 100px;
                        height: 50px;
                    }
                    .mainBall {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 60px;
                        height: 60px;
                        transform: translate(-50%, -50%);
                    }
                    .leftSide img {
                        width: 70px; /* Adjust image size */
                        height: 70px;
                    }
                    .rightSide h3 {
                        font-size: 1.3rem; /* Smaller title */
                    }
                    .rightSide p {
                        font-size: 0.9rem; /* Smaller description */
                    }
                }

                @media (max-width: 576px) {
                    .rightSide {
                        padding: 10px;
                    }
                    .leftSide {
                        width: 75%;
                        max-width: 450px;
                        height: 225px;
                        margin-bottom: 20px;
                    }
                  
                    h1 {
                        font-size: 1.8rem; /* Further reduce header size */
                    }
                    .ballEntry {
                        position: absolute;
                        top: 5%;
                        left: 5%;
                        width: 40px;
                        height: 70px;
                    }
                    .ballExit {
                        position: absolute;
                        bottom: 5%;
                        right: 5%;
                        width: 80px;
                        height: 40px;
                    }
                    .mainBall {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 50px;
                        height: 50px;
                        transform: translate(-50%, -50%);
                    }
                    .leftSide img {
                        width: 60px; /* Adjust image size */
                        height: 60px;
                    }
                    .rightSide h3 {
                        font-size: 1.1rem; /* Further reduce title font size */
                    }
                    .rightSide p {
                        font-size: 0.8rem; /* Further reduce description font size */
                    }
                }

                @media (max-width: 320px) {
                    .rightSide {
                        padding: 8px;
                    }
                   .leftSide {
                        width: 75%;
                        max-width: 300px;
                        height: 200px;
                        margin-bottom: 20px;
                    }
                         .rightSide {
                        max-width: 50%;
                        text-align: center;
                    }
                    h1 {
                        font-size: 1.5rem; /* Even smaller header for 320px */
                    }
                    .ballEntry {
                        position: absolute;
                        top: 5%;
                        left: 25%;
                        width: 35px;
                        height: 100px;
                    }
                    .ballExit {
                        position: absolute;
                        bottom: 5%;
                        right: 5%;
                        width: 70px;
                        height: 35px;
                    }
                    .mainBall {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 45px;
                        height: 45px;
                        transform: translate(-50%, -50%);
                    }
                    .leftSide img {
                        width: 50px; /* Further reduce image size */
                        height: 50px;
                    }
                    .rightSide h3 {
                        font-size: 1rem; /* Small title for 320px screen */
                    }
                    .rightSide p {
                        font-size: 0.7rem; /* Small description for 320px screen */
                    }
                }
            `}</style>
        </div>
    );
};

export default DevelopmentProcess;
