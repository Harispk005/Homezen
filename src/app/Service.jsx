'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Hammer, Drill, Cog, Wrench } from 'lucide-react';
import { Audiowide, Poppins } from 'next/font/google';
import { useRouter } from "next/navigation"

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const facultyGlyphic = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});



const Service = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const ac_service = () => {
    router.push('/ac_services')
  }
  return (
    <div className='flex flex-col items-center mt-[80px] '>
      <h1 className={`${audiowide.className} text-[30px]`}>What We Offer</h1>
      <div className={`w-full flex flex-col md:flex-row md:justify-evenly gap-10 px-2 md:py-20 `}>

        <div className=" md:w-[550px]  mt-[50px] md:mt-0">
          <div className="border border-transparent rounded-[5px] px-3 py-5 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-300 bg-white h-full" onClick={ac_service}>
            <motion.div
              className="text-center flex flex-col items-center "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: isMobile ? 0 : 0.4,
              }}
              viewport={{ once: true }}
            >
              <Cog className='h-10 w-10 mb-2 text-gray-700 mt-[20px]' />
              <h3 className={`${audiowide.className} text-2xl mb-2 mt-[20px]`}>AC Installation & Setup</h3>
              <p className={`${facultyGlyphic.className} text-sm text-gray-600 text-justify mt-[20px]`}>
                Professional AC installation, repair, and maintenance for optimal performance and longevity. Our experts ensure precise installation, reliable repairs, and thorough maintenance to keep your system running efficiently. We prioritize your comfort and satisfaction, providing prompt and dependable service every time. Enjoy a comfortable environment year-round with our trusted AC solutions. </p>

              <button className='mt-[30px] w-[120px] h-[40px] bg-black text-white border border-black rounded-[10px] hover:bg-white hover:text-black' onClick={ac_service}>Explore</button>
            </motion.div>
          </div>
        </div>

        <div className=" md:w-[550px]  mt-[50px] md:mt-0">
          <div className="border border-transparent rounded-[5px] px-3 py-5 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-300 bg-white h-full">
            <motion.div
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: isMobile ? 0 : 0.4,
              }}
              viewport={{ once: true }}
            >
              <Hammer className='h-10 w-10 mb-2 text-gray-700 mt-[20px]' />
              <h3 className={`${audiowide.className} text-2xl mb-2 mt-[20px]`}>Building Construction</h3>
              <p className={`${facultyGlyphic.className} text-sm text-gray-600 text-justify mt-[20px]`}>
                Expert construction and renovation services ensuring durability and modern design, along with reliable wiring and plumbing solutions. Whether building new or renovating existing spaces, we deliver robust structures with a contemporary aesthetic while ensuring safe electrical systems and efficient plumbing. Choose us for quality workmanship and seamless integration of essential utilities.
              </p>
              <button className='mt-[30px] w-[120px] h-[40px] bg-black text-white border border-black rounded-[10px] hover:bg-white hover:text-black' onClick={ac_service}>Explore</button>
            </motion.div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Service