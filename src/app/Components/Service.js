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

    const construction = () => {
        router.push('/construction')
    }
    return (
        <div id='services'>
            <div className='flex flex-col justify-center items-center mt-[80px] '>
                <h1 className={`${audiowide.className} text-[30px]`}>What We Offer</h1>
                <div className={` w-full flex flex-col md:flex-row md:justify-evenly gap-10 px-2 md:py-20 `}>

                    <div className="w-[400px] md:w-[550px] h-[420px] md:h-[380px] mt-[50px] md:mt-0">
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
                                <Cog className='h-10 w-10 mb-2 text-gray-700 mt-[10px]' />
                                <h3 className={`${audiowide.className} text-2xl mb-2 mt-[20px]`}>AC Sales, Installation & Maintenance</h3>
                                <p className={`${facultyGlyphic.className} text-sm text-gray-600 text-justify mt-[20px]`}>
                                    We offer professional AC sales, installation, repair, and maintenance to ensure optimal performance and longevity. Our experts provide precise installation, reliable repairs, and thorough maintenance services to keep your system running efficiently. Whether you're looking for a new AC unit, need servicing, or require regular maintenance, we've got you covered. We prioritize your comfort and satisfaction with prompt and dependable service, ensuring a comfortable environment year-round with our trusted AC solutions. </p>

                                <button className='mt-[10px] w-[120px] h-[40px] bg-black text-white border border-black rounded-[10px] hover:bg-white hover:text-black' onClick={ac_service}>Explore</button>
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-[400px] md:w-[550px] h-[420px] md:h-[380px] mt-[50px] md:mt-0">
                        <div className="border border-transparent rounded-[5px] px-3 py-5 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-300 bg-white h-full" onClick={construction}>
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
                                <Hammer className='h-10 w-10 mb-2 text-gray-700 mt-[10px]' />
                                <h3 className={`${audiowide.className} text-2xl mb-2 mt-[20px]`}>Expert Construction & Renovation </h3>
                                <p className={`${facultyGlyphic.className} text-sm text-gray-600 text-justify mt-[20px]`}>
                                We provide top-quality construction, renovation, wiring, and plumbing solutions to ensure durability and modern design. Whether you're building a new space or upgrading an existing one, our experts deliver robust structures with a contemporary aesthetic. We also ensure safe electrical systems and efficient plumbing for seamless functionality. With a focus on quality workmanship and reliable service, we create well-integrated spaces that meet your needs while maintaining safety and efficiency.
                                </p>
                                <button className='mt-[30px] w-[120px] h-[40px] bg-black text-white border border-black rounded-[10px] hover:bg-white hover:text-black' onClick={construction}>Explore</button>
                            </motion.div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Service