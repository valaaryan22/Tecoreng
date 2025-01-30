import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import laptop from "../laptop.svg";
import logo from "../logo.svg";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: "Services", link: "/services" },
        {
            name: "About Us",
            link: "/about",
            hasDropdown: true,
            dropdownItems: [
                { name: "Who we are", link: "/about/who-we-are" },
                { name: "Industries we serve", link: "/about/industries" }
            ]
        },
        { name: "Career", link: "/careers" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Blog", link: "/blog" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
                setShowDropdown(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <> <div
            className="App min-h-screen flex flex-col bg-[#01132E] text-white overflow-x-hidden"
        >
            <header
                className={`top-0 left-0 right-0 z-50 bg-[#01132E] shadow-md transition-all duration-700 ease-in-out transform ${showNavbar
                    ? "fixed top-0 opacity-100 translate-y-0"
                    : "fixed top-[-100px] opacity-0 translate-y-[-100%]"
                    }`}
            >
                <nav className="navbar flex items-center gap-4 justify-between px-4 py-3">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="h-10" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="block md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="nav-links md:flex gap-8 hidden text-sm">
                        {navItems.map((item) => (
                            <li key={item.name} className="text-lg relative">
                                {item.hasDropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setShowDropdown(true)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                    >
                                        <button className="text-white hover:text-orange-500 no-underline flex items-center gap-1">
                                            {item.name}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                        {/* Dropdown Menu */}
                                        {showDropdown && (
                                            <div className="absolute top-full left-0 mt-2 no-underline w-48 bg-[#011e3d] rounded-lg shadow-lg py-2 z-50">
                                                {item.dropdownItems.map((dropItem) => (
                                                    <a
                                                        key={dropItem.name}
                                                        href={dropItem.link}
                                                        className="block px-4 py-2 no-underline text-white hover:bg-[#022b54] hover:text-orange-500 text-sm"
                                                    >
                                                        {dropItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        href={item.link}
                                        className="text-white hover:text-orange-500 no-underline"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="nav-buttons hidden md:flex gap-4">
                        <button className="px-4 py-2 bg-transparent border border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                            Hire Developers
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                            Get a Quote
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation Menu */}
                <ul
                    className={`nav-links md:hidden flex flex-col items-center gap-3 px-6 py-4 bg-[#001f3d] shadow-lg ${menuOpen ? "block" : "hidden"
                        }`}
                >
                    {navItems.map((item) => (
                        <li key={item.name}>
                            {item.hasDropdown ? (
                                <div className="w-full">
                                    <button
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="text-white hover:text-orange-500 no-underline flex items-center gap-1 w-full"
                                    >
                                        {item.name}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {showDropdown && (
                                        <div className="mt-2 pl-4 space-y-2">
                                            {item.dropdownItems.map((dropItem) => (
                                                <a
                                                    key={dropItem.name}
                                                    href={dropItem.link}
                                                    className="block text-white hover:text-orange-500 text-sm py-1"
                                                >
                                                    {dropItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    href={item.link}
                                    className="text-white hover:text-orange-500 no-underline"
                                >
                                    {item.name}
                                </a>
                            )}
                        </li>
                    ))}
                    <div className="flex flex-col gap-4 w-full mt-4">
                        <button className="w-full px-4 py-2 bg-transparent border-2 border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                            Hire Developers
                        </button>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                            Get a Quote
                        </button>
                    </div>
                </ul>
            </header>

            <div
                className="container mt-5 mx-auto px-4 min-h-screen flex items-center relative z-10"
                style={{
                    backgroundImage: `url(${laptop})`,
                    backgroundSize: "contain",
                    backgroundPosition: "right bottom",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                }}
            >
                {/* Added a wrapper to position the content correctly */}
                <div className="absolute  top-[120px] sm:top-[120px] md:top-[120px] left-10 w-full px-4 z-20">
                    <div className="w-full pl-2 text-center ml-8 mb-8 md:w-1/2 pt-20">
                        <h1 className="text-5xl  md:text-6xl font-bold leading-tight mb-8 text-white sm:text-left sm:ml-4 md:text-left md:ml-8">
                            Web & Mobile App
                            <br className=" md:hidden" />
                            Development
                            <br />
                            Company
                        </h1>
                        <button
                            className="flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 sm:ml-4 md:ml-8"
                            style={{
                                willChange: "transform",
                                transition: "transform 250ms",
                                background:
                                    "linear-gradient(94.76deg, rgb(244, 123, 85) 1.49%, rgb(255, 61, 0) 95.34%)",
                                transform: "translateY(-4px)",
                                height: "58px",
                                fontWeight: "700",
                                fontSize: "29px",
                                lineHeight: "30px",
                                textTransform: "uppercase",
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = "translateY(0)")}
                            onMouseLeave={(e) => (e.target.style.transform = "translateY(-4px)")}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>


            {/* Counter Section */}

            <style>{`
                        .hero h1 {
                            text-align: left;
                            color: white;
                            margin-left: 10%;
                            margin-top: 10%;
                        }

                        @media (max-width: 1024px) {
                            .App {
                                background-size: contain;
                                background-position: center;
                            }

                            .hero h1 {
                                font-size: 4rem;
                                margin-left: 5%;
                                margin-top: 5%;
                                line-height: 1.4;
                            }
                                .hero .button-container {
                                margin-left: 5%;
                                margin-top: 10px;
                                }
                        }

                        @media (max-width: 768px) {
                            .App {
                                background-size: 150% 150%;
                                background-position: top center;
                            }

                            .hero h1 {
                                font-size: 3rem;
                                margin-left: 5%;
                                margin-top: 5%;
                                line-height: 1.4;
                            }
                        }

                        @media (max-width: 480px) {
                            .App {
                                background-size: 200% 200%;
                                background-position: center;
                            }

                            .hero h1 {
                                font-size: 2rem;
                                margin-left: 2%;
                                margin-top: 2%;
                            }
                        }

                        .project-success {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 1rem;
                        }

                        .counter {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 10px;
                            border: 2px solid rgb(0, 196, 213);
                            border-radius: 15px;
                            background-color: rgba(0, 0, 0, 0.6);
                        }

                        .title {
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: white;
                        }

                        .details {
                            font-size: 2rem;
                            font-weight: 800;
                            color: white;
                        }

                        /* Responsive Styles */
                        @media (max-width: 1024px) {
                            .counter .title {
                                font-size: 1.125rem;
                            }
                            .counter .details {
                                font-size: 2.25rem;
                            }
                        }

                        @media (max-width: 768px) {
                            .counter .title {
                                font-size: 1.125rem;
                            }
                            .counter .details {
                                font-size: 2rem;
                            }
                        }

                        @media (max-width: 480px) {
                            .counter .title {
                                font-size: 1rem;
                            }
                            .counter .details {
                                font-size: 1.75rem;
                            }
                                 @media (max-width: 1024px) {
                    .App {
                        background-size: contain;
                        background-position: center;
                    }
                }

                @media (max-width: 768px) {
                    .App {
                        background-size: 150% 150%;
                        background-position: top center;
                    }
                }

                @media (max-width: 480px) {
                    .App {
                        background-size: 200% 200%;
                        background-position: center;
                    }
                        }
                    `}</style>

        </div>
            <div className="relative z-10 mb-3 border-2 rounded-3xl md:mt-0 md:pt-0 border-cyan-400 max-w-6xl mx-auto mt-16 sm:mt-8 xs:mt-4 px-4">
                <div className="backdrop-blur-sm rounded-3xl p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Successful Projects */}
                        <div className="text-center">
                            <div className="text-white text-xl">Successful Projects</div>
                            <div className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-2">100+</div>
                        </div>

                        {/* Repeated Client */}
                        <div className="text-center">
                            <div className="text-white text-xl">Repeated Client</div>
                            <div className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-2">80%</div>
                        </div>

                        {/* Years in Industry */}
                        <div className="text-center">
                            <div className="text-white text-xl">Years in Industry</div>
                            <div className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-2">9+</div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Navbar;  