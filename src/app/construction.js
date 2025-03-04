"use client";

import React from 'react'
import Image from 'next/image'
import { Bruno_Ace_SC } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const brunoAce = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const page = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Image src="/Caro1.jpg" alt='acbg' width={1920} height={1000} className='w-full md:h-screen object-cover rounded-b' priority />
        
        <h1 className={`md:absolute absolute text-[23px] text-white md:text-black text-center md:text-[42px] font-extrabold mt-[0px] md:mt-[100px] ${brunoAce.className}`}
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            WebkitTextStroke: "1px black"
          }}
        >
          Complete Construction & Utilities Solutions
        </h1>
        <p className={`md:absolute text-black mt-[10px] md:mt-[250px] w-[85%] sm:w-[500px] md:w-[900px] mx-auto text-l md:text-xl text-justify justify-center md:text-center hidden md:block ${poppins.className}`}>
          We provide expert building construction, renovation, wiring, and plumbing services for homes, businesses, and industries, ensuring quality craftsmanship, structural integrity, and long-term reliability.
        </p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h2 className={`block ${brunoAce.className} text-[23px] mt-[20px] md:text-[42px] md:mt-[100px]`} style={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          WebkitTextStroke: "1px black"
        }}>Services</h2>

        <div className='grid grid-cols-2 gap-4 mt-4 sm:flex sm:gap-4'>
          <button onClick={() => scrollToSection('wiring')} className='px-6 py-2 text-black font-semibold border-b-2 border-black hover:font-bold '>Wiring</button>
          <button onClick={() => scrollToSection('plumbing')} className='px-6 py-2 text-black font-semibold border-b-2 border-black hover:font-bold '>Plumbing</button>
          <button onClick={() => scrollToSection('construction')} className='px-6 py-2 text-black font-semibold border-b-2 border-black hover:font-bold '>Construction</button>
          <button onClick={() => scrollToSection('renovation')} className='px-6 py-2 text-black font-semibold border-b-2 border-black hover:font-bold '>Renovation</button>
        </div>

        {/* Wiring Services */}
        <div id="wiring" className='flex flex-col sm:flex-row sm:justify-between mt-5'>
          <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
            <h3 className={`text-3xl ${brunoAce.className}`}>Wiring Services</h3>
            <p className='text-justify'>
              We offer professional electrical wiring solutions for homes, businesses, and industries, ensuring safe, efficient, and long-lasting electrical systems. Our expert team handles new installations, upgrades, and repairs while following industry standards for maximum safety and energy efficiency.
            </p>
          </div>
          <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
            <Image src="/construction1.jpg" alt="image" fill className="object-cover" />
          </div>
        </div>

        {/* Plumbing Services */}
        <div id="plumbing" className='flex flex-col-reverse sm:flex-row sm:justify-between mt-5'>
          <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
            <Image src="/construction1.jpg" alt="image" fill className="object-cover" />
          </div>
          <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
            <h3 className={`text-3xl ${brunoAce.className}`}>Plumbing Services</h3>
            <p className='text-justify'>
              Our plumbing solutions cover everything from installations to repairs, ensuring a seamless water supply and drainage system. Whether it’s residential, commercial, or industrial plumbing, we provide durable piping, leak detection, and efficient water flow management for long-term reliability.
            </p>
          </div>
        </div>

        {/* Construction Services */}
        <div id="construction" className='flex flex-col sm:flex-row sm:justify-between mt-5'>
          <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
            <h3 className={`text-3xl ${brunoAce.className}`}>Construction Services</h3>
            <p className='text-justify'>
              We specialize in building high-quality residential, commercial, and industrial structures with superior craftsmanship and durable materials. From foundation to finishing, our expert team ensures strong, safe, and efficient constructions tailored to your needs.
            </p>
          </div>
          <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
            <Image src="/construction2.jpg" alt="image" fill className="object-cover" />
          </div>
        </div>

        {/* Renovation Services */}
        <div id="renovation" className='flex flex-col-reverse sm:flex-row sm:justify-between mt-5'>
          <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px]">
            <Image src="/construction3.jpg" alt="image" fill className="object-cover" />
          </div>
          <div className="w-full sm:w-1/2 p-4 flex flex-col gap-3 justify-center items-center px-5 sm:px-10">
            <h3 className={`text-3xl ${brunoAce.className}`}>Renovation Services</h3>
            <p className='text-justify'>
              Upgrade and transform your space with our expert renovation services. Whether it’s modernizing interiors, expanding structures, or enhancing functionality, we provide innovative solutions that improve aesthetics, efficiency, and overall value.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page;