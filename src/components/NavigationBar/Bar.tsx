"use client";

import { useState } from "react";
import { NavigationButton } from "@/components";

export const Bar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex justify-between items-center p-4 bg-blue-950 bg-opacity-50">
            <h1 className="p-4 text-2xl font-bold text-cyan-400">Deep Diver Matteo</h1>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            <nav className={`absolute top-full left-0 lg:static lg:flex lg:items-center lg:gap-2 ${isOpen ? "block w-full" : "hidden"} lg:block`}>
                <div className="lg:hidden bg-blue-950 bg-opacity-90 p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <NavigationButton text="About" link="/#about" onClick={toggleMenu} />
                    <NavigationButton text="Projects" link="/#projects" onClick={toggleMenu} />
                    <NavigationButton text="Technologies" link="/#technologies" onClick={toggleMenu} />
                    <NavigationButton text="Contact" link="/#contact" onClick={toggleMenu} />
                </div>
                <div className="hidden lg:flex lg:items-center lg:gap-2">
                    <NavigationButton text="About" link="/#about" />
                    <NavigationButton text="Technologies" link="/#technologies" />
                    <NavigationButton text="Projects" link="/#projects" />
                    <NavigationButton text="Contact" link="/#contact" />
                </div>
            </nav>
        </div>
    );
};