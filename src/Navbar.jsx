import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import logo from "./logo.svg";
import logo2 from './logo2.png';
import logo3 from './logo3.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            className="App min-h-screen flex flex-col bg-[#112542] text-white overflow-x-hidden"
            style={{
                backgroundImage: `url(${logo2})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',                backgroundRepeat: 'no-repeat',
            }}
        >
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#112542] text-wxhite shadow-md">
                <nav className="navbar flex items-center justify-between px-6 py-4">
                    <div className="logo flex items-center">
                        <img src={logo} alt="Technical Core Engineers" className="h-10 pl-6" />
                    </div>

                    <button
                        className="block md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    <ul className="nav-links hidden md:flex gap-6 text-sm">
                        <li><a href="#services" className="text-white hover:text-orange-500 no-underline">Services</a></li>
                        <li><a href="#about" className="text-white hover:text-orange-500 no-underline">About Us</a></li>
                        <li><a href="#career" className="text-white hover:text-orange-500 no-underline">Career</a></li>
                        <li><a href="#portfolio" className="text-white hover:text-orange-500 no-underline">Portfolio</a></li>
                        <li><a href="#blog" className="text-white hover:text-orange-500 no-underline">Blog</a></li>
                    </ul>

                    <div className="nav-buttons hidden md:flex gap-4">
                        <button className="hire-developers px-4 py-2 bg-[#112542] text-white rounded-xl hover:bg-orange-500">
                            Hire Developers
                        </button>
                        <button className="get-quote px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-700">
                            Get a Quote
                        </button>
                    </div>
                </nav>

                <ul
                    className={`nav-links md:hidden flex flex-col items-center gap-3 px-6 py-4 bg-[#112542] shadow-lg ${menuOpen ? 'block' : 'hidden'
                        }`}
                >
                    <li><a href="#services" className="hover:text-orange-500 no-underline">Services</a></li>
                    <li><a href="#about" className="hover:text-orange-500 no-underline">About Us</a></li>
                    <li><a href="#career" className="hover:text-orange-500 no-underline">Career</a></li>
                    <li><a href="#portfolio" className="hover:text-orange-500 no-underline">Portfolio</a></li>
                    <li><a href="#blog" className="hover:text-orange-500 no-underline">Blog</a></li>
                    <div className="flex flex-col gap-4 w-full mt-4">
                        <button className="hire-developers w-full px-4 py-2 bg-[#1a1a40] text-white rounded-xl  hover:bg-orange-500">
                            Hire Developers
                        </button>
                        <button className="get-quote w-full px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-700">
                            Get a Quote
                        </button>
                    </div>
                </ul>
            </header>

            <main className="flex-grow flex items-center justify-start">
                <section className="hero flex flex-col justify-center items-start ml-10 h-full text-center">
                    <h1 className="data font-extrabold text-3xl md:text-5xl mb-4">
                        Web & Mobile App
                    </h1>
                    <h1 className="data font-extrabold text-3xl md:text-5xl mb-4">
                        Development Company
                    </h1>
                </section>
            </main>

            {/* Media Queries for Mobile */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .App {
                        background-image: url(${logo3});
                        background-size: 100% 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Navbar;
