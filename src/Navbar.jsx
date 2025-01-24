import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import laptop from './laptop.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: 'Services', link: '/services' },
        { name: 'About Us', link: '/about' },
        { name: 'Career', link: '/careers' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Blog', link: '/blog' },
    ];

    return (
        <div
            className="App min-h-screen flex flex-col bg-[#0b1b33] text-white overflow-x-hidden"
            style={{
                backgroundImage: `url(${laptop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left left',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#001f3d] shadow-md">
                <nav className="navbar flex items-center justify-between px-4 py-3">
                    <div className="logo">
                        <img src={logo} alt="Tecoreng Logo" className="h-10" />
                    </div>

                    <button
                        className="block md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <ul className={`nav-links md:flex gap-6 hidden text-sm`}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.link} className="text-white hover:text-orange-500 no-underline">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-buttons hidden md:flex gap-4">
                        <button className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-orange-500 hover:border-transparent">
                            Hire Developers
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-300 text-white rounded-full hover:from-orange-700 hover:to-orange-500">
                            Get a Quote
                        </button>
                    </div>
                </nav>

                <ul
                    className={`nav-links md:hidden flex flex-col items-center gap-3 px-6 py-4 bg-[#001f3d] shadow-lg ${menuOpen ? 'block' : 'hidden'}`}
                >
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.link} className="text-white hover:text-orange-500 no-underline">
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <div className="flex flex-col gap-4 w-full mt-4">
                        <button className="w-full px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-orange-500 hover:border-transparent">
                            Hire Developers
                        </button>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-300 text-white rounded-full hover:from-orange-700 hover:to-orange-500">
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

            <style jsx>{`
                @media (max-width: 768px) {
                    .App {
                        background-image: url(${laptop});
                        background-size: 100% 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Navbar;
