'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Audiowide, Poppins } from "next/font/google";
import { FileEdit, Home, CheckCircle } from "lucide-react";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const facultyGlyphic = Poppins({ weight: "400", subsets: ["latin"] });




const Howitworks = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-[80px] '>
                <h1 className={`${audiowide.className} text-[30px]`}>
                    Our Service Flow
                </h1>
            </div>
            <div className={`w-full flex flex-col md:flex-row gap-6 px-4 py-10 md:py-20 bg-[#F2EFE7] `}>
                {/* Card 1 */}
                <motion.div
                    className="w-full md:w-1/3 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: isMobile ? 0 : 0.0,
                    }}
                    viewport={{ once: true }}
                >
                    <h5 className={`${audiowide.className} text-[14px] mb-6`}>Step-1</h5>
                    <FileEdit className="h-12 w-16 mb-2" />
                    <h3 className={`text-2xl mb-2 ${audiowide.className}`}>Register Your Service</h3>
                    <p className={`text-sm ${facultyGlyphic.className}`}>
                        Fill Credential, Book Service & Relax.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="w-full md:w-1/3 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: isMobile ? 0 : 0.2,
                    }}
                    viewport={{ once: true }}
                >
                    <h5 className={`${audiowide.className} text-[14px] mb-6`}>Step-2</h5>
                    <Home className='h-12 w-16 mb-2' />
                    <h3 className={`text-2xl mb-2 ${audiowide.className}`}>Service At Your Home</h3>
                    <p className={`text-sm ${facultyGlyphic.className}`}>
                        Keep Calm, We Will Serve At Your Door.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className="w-full md:w-1/3 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: isMobile ? 0 : 0.4,
                    }}
                    viewport={{ once: true }}
                >
                    <h5 className={`${audiowide.className} text-[14px] mb-6`}>Step-3</h5>
                    <CheckCircle className='h-12 w-16 mb-2' />
                    <h3 className={`text-2xl mb-2 ${audiowide.className}`}>Pay After Service</h3>
                    <p className={`text-sm ${facultyGlyphic.className}`}>
                        Make Payment After Job Get Done.
                    </p>
                </motion.div>
            </div>


        </div>
    );
};

export default Howitworks;
