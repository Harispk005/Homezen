'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Audiowide, Poppins } from "next/font/google";
import { motion } from 'framer-motion';


const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const facultyGlyphic = Poppins({ weight: "400", subsets: ["latin"] });
const About = () => {
      const [isMobile, setIsMobile] = useState(false);
    return (
      <div id='about'>
        <div style={{ backgroundColor: "whitesmoke" }} className='mx-5 md:mx-10 py-10 px-5 md:px-10 rounded-[15px] shadow-[0px_5px_15px_rgba(0,0,0,0.5)] my-[50px]'>
            <motion.div
              className=" flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: isMobile ? 0 : 0.4,
              }}
              viewport={{ once: true }}
          >
            <div>
                <h1 className={`text-[30px] md:text-[42px] text-center   font-extrabold ${audiowide.className}`}>About Homezen</h1>
                <p className={`${facultyGlyphic.className} text-gray-500 text-justify md:w-[650px] mt-[15px] `}>
                    HomeZen Trading and Contracting is your trusted partner in Qatar, specializing in AC maintenance, sales, and installation. We provide top-tier solutions for residential, commercial, and industrial air conditioning systems, ensuring optimal performance and efficiency. In addition to AC services, we excel in building construction, home renovations, and property enhancements. Our expertise also extends to plumbing and electrical work, offering complete solutions for all your property needs. With a commitment to quality, affordability, and customer satisfaction, HomeZen delivers excellence in every project we undertake.
                </p>
                <div className="mt-[30px] flex gap-[10px] justify-center md:justify-start">
                    <button className={`px-7 py-2 bg-black text-white border border-black rounded-[10px] hover:bg-white hover:text-black ${facultyGlyphic.className}`}>
                        Learn More
                    </button>
                    <button className={`px-7 py-2  bg-white text-black border border-black rounded-[10px] hover:bg-black hover:text-white ${facultyGlyphic.className}`}>
                        Contact Us
                    </button>
                </div>

            </div>

            <div className='w-full flex items-center justify-center mt-5 md:mt-0'>
                <Image src='/mainlogo.png' alt='mainlogo' height={400} width={400} />
            </div>
            </motion.div>
        </div>
      </div>
    )
}

export default About