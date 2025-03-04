import Image from "next/image";
import React, { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import { Menu, X } from "lucide-react";
import { Audiowide,Manrope } from 'next/font/google';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const facultyGlyphic = Manrope({
  subsets: ['latin'],
  weight: '600', 
  display: 'swap',
});

const NavBar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50   flex items-center px-3 justify-between py-3 ${audiowide.className}`}>
      <Image src="/logo1.png" alt="logo" width={50} height={50} />

      {/* Desktop Menu */}

      <div className="hidden md:flex gap-5">
        <ul className="flex gap-8 text-sm">
          <li
            className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('body1')}
          >
            Home
          </li>
          <li
            className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('body2')}
          >
            Services
          </li>
          <li
            className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('body3')}
          >
            About
          </li>
        </ul>
        <LanguageSelect />
      </div>

      <div className="flex gap-2 md:hidden">
        <LanguageSelect />
        <button onClick={() => setIsOpen(true)} className="text-2xl">
          <Menu />
        </button>
      </div>


      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#F2EFE7] shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <X />
          </button>
        </div>
        <ul className={`flex flex-col gap-6 text-lg p-4 ${facultyGlyphic.className}`}>
          <li className="cursor-pointer" onClick={() => { scrollToSection('body1'); setIsOpen(false) }}>Home</li>
          <li className="cursor-pointer" onClick={() => { scrollToSection('body2'); setIsOpen(false) }}>Services</li>
          <li className="cursor-pointer" onClick={() => { scrollToSection('body3'); setIsOpen(false) }}>About</li>
        </ul>
      </div>

      {/* Overlay (Click to close sidebar) */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 md:hidden"></div>
      )}
    </div>
  );
};

export default NavBar;
