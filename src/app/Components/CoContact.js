import React from 'react'
import { PhoneCall, MessagesSquare, Mail, MapPin } from 'lucide-react';
import { Bruno_Ace_SC } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const brunoAce = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

const CoContact = () => {
    return (
        <div className='grid grid-cols-2 md:grid md:grid-cols-4 gap-5 justify-center items-center px-4 py-10  mt-[100px] overflow-hidden'>
            <div className='  flex flex-col justify-center items-center text-center 
                h-[150px] md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105'>

                <PhoneCall className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Call Us</h1>
                <p className={`${poppins.className} text-[15px] text-gray-600`}>24/7 Customer Support</p>
                <p className={`${poppins.className} text-[13px] text-gray-600  `}>+974 33399288</p>
            </div>

            <div className='flex flex-col justify-center items-center text-center 
                h-[150px] md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105'>

                <MessagesSquare className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Chat With Us</h1>
                <p className={`${poppins.className} text-[15px] text-gray-600`}>Quick Response Guaranteed</p>
                <p className={`${poppins.className} text-[13px] text-gray-600 hidden md:block  `}>+974 33399288</p>
            </div>

            <div className=' flex flex-col justify-center items-center text-center 
                h-[150px] md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105'>


                <Mail className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Email Us</h1>
                <p className={`${poppins.className} text-[15px] text-gray-600`}>Quick Response Guaranteed</p>
                <p className={`${poppins.className} text-[13px] text-gray-600 hidden md:block `}>Homezentradingconstruction@gmail.com</p>
            </div>
            <div className=' flex flex-col justify-center items-center text-center 
                h-[150px] md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105'>


                <MapPin className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Visit Us</h1>
                <p className={`${poppins.className} text-[15px] text-gray-600`}>Main Office</p>
                <p className={`${poppins.className} text-[13px] text-gray-600 `}>Doha, Qatar</p>
            </div>
        </div>
    )
}

export default CoContact;
