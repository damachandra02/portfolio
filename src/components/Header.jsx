import React from 'react'

//* Node modules
import { useState } from 'react'; 

//* Components
import Navbar from './Navbar';

const Header = () => {
const [navOpen, setNavOpen] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-transparent backdrop-blur-md shadow-lg">
    <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo with soft glow effect */}
        <h1>
            <a href="/" className="logo">
                <img 
                    src="/images/logo.svg" 
                    width={40} 
                    height={40} 
                    alt="Homepage of Damachandra N" 
                    className="rounded-full shadow-lg hover:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.6)] transition-shadow duration-300 style={{ backgroundColor: 'white' }}" 
                />
            </a>
        </h1>

        {/* Centered navigation/menu button area */}
        <div className="relative md:justify-self-center">
            <button 
                className="menu-btn md:hidden p-2 rounded-full transition duration-300 hover:bg-white/10"
                aria-label="Toggle menu"
                onClick={() => setNavOpen((prev) => !prev)}
            >
                <span className="material-symbols-rounded text-white text-2xl">
                    {navOpen ? 'close' : 'menu'}
                </span>
            </button>

            {/* Navbar with smooth slide-in effect */}
            <Navbar 
                navOpen={navOpen} 
                className={`transition-transform duration-500 ${navOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} md:translate-y-0 md:opacity-100`} 
            />
        </div>

        {/* Contact Button */}
        <a
            href="#contact"
            className="btn btn-secondary max-md:hidden md:justify-self-end bg-gradient-to-r from-white to-gray-100 text-zinc-900 rounded-full text-[17px] font-medium px-10 py-3 cursor-pointer border border-gray-300 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-400 active:translate-y-0 active:shadow-none hover:bg-gradient-to-r hover:from-gray-100 hover:to-white"
        >
            Contact Me
        </a>

    </div>
</header>

  )
}

export default Header