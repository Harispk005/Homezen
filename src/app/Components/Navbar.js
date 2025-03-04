'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Audiowide, Manrope } from 'next/font/google';
import { useRouter } from "next/navigation";
import { motion,AnimatePresence } from "framer-motion";

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, Setdropdown] = useState(false);
  const [homedropdown,Sethomedropdown] =useState(false);
  const[openhomedropdown,Setopenhomedropdown]=useState(false);

  const router = useRouter();
  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ac_service=()=>{
    router.push('/ac_services');
}

const construction=()=>{
    router.push('/construction')
}

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex items-center px-3 justify-between py-3 ${audiowide.className}`}>
      <Image src="/homezenlogo.png" alt="logo" width={50} height={50} />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-5">
        <ul className="flex gap-8 text-sm">
          <li
            className=" cursor-pointer font-normal relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105"
            onClick={()=>Sethomedropdown(!homedropdown)}
          >
            Home
          </li>
          <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: homedropdown ? 1 : 0, y: homedropdown ? 0 : -10 }} 
            transition={{ duration: 0.3 }}
            className={`absolute top-[50px] right-[210px] shadow-lg rounded-[5px] w-[130px] h-auto bg-white p-4 ${homedropdown ? "block" : "hidden"}`}
          >
            <ul>
              <li onClick={ac_service} className="text-black mt-2 cursor-pointer hover:font-semibold">AC Home</li>
              <li onClick={construction} className="text-black mt-2 cursor-pointer hover:font-semibold">Construction Home</li>
            </ul>
          </motion.div>
          </AnimatePresence>
          <li
            className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('services')}
          >
            Services
          </li>
          <li
            className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('about')}
          >
            About
          </li>
          <li onClick={() => Setdropdown(!dropdown)} className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full transition-transform duration-300 hover:scale-105">
            <Languages />
          </li>
          <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: dropdown ? 1 : 0, y: dropdown ? 0 : -10 }} 
            transition={{ duration: 0.3 }}
            className={`absolute top-[50px] right-[10px] shadow-lg rounded-[5px] w-[95px] h-auto flex justify-center bg-white p-4 ${dropdown ? "block" : "hidden"}`}
          >
              <ul>
                <li className="bg-none text-black mt-2 cursor-pointer">English</li>
                <li className="bg-none text-black mt-2 cursor-pointer">English</li>
                <li className="bg-none text-black mt-2 cursor-pointer">English</li>
                <li className="bg-none text-black mt-2 cursor-pointer">English</li>
              </ul>

 

         
          </motion.div>
           </AnimatePresence>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex gap-2 md:hidden">
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
          <li className="cursor-pointer" onClick={() => Setopenhomedropdown(!openhomedropdown)}>Home</li>
          <AnimatePresence>
          {openhomedropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <li className="pl-4 text-sm" onClick={ac_service}>AC Home</li>
                <br/>
                <li className="pl-4 text-sm" onClick={construction}>Construction Home</li>
              </motion.div>
            )}
            </AnimatePresence>
          <li className="cursor-pointer" onClick={() => { scrollToSection('services'); setIsOpen(false); }}>Services</li>
          <li className="cursor-pointer" onClick={() => { scrollToSection('about'); setIsOpen(false); }}>About</li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 md:hidden"></div>}
    </div>
  );
};

export default NavBar;
