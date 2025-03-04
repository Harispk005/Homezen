import { PhoneCall, MessagesSquare, Mail, MapPin } from 'lucide-react';
import { Bruno_Ace_SC } from "next/font/google";
import { Poppins } from "next/font/google";
import React, { forwardRef } from 'react';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const brunoAce = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

const AcContact = forwardRef((props, ref) => {
    const handleCall = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = "tel:+97450225005";
        } else {
            alert("This feature only works on mobile devices.");
        }
    };
    
    const handleMessage = () => {
        const message = encodeURIComponent("Hello, I'm interested in learning more about your AC sales and services. Could you provide me with more details?");
        window.open(`https://wa.me/+97450225005?text=${message}`, "_blank");
    };

    const handleEmail = () => {
        window.open("mailto:homezentradingconstruction@gmail.com", "_blank");
    };

    const handleLocation=()=>{
        const langtitude=25.2928630
        const longitude=51.4238980
        const url="https://maps.app.goo.gl/Y3a3Sm137AiBHPyg6"
        window.open(url, "_blank");
    }
    
    return (
   <>
   <h1 className={`text-[20px] md:text-[25px] text-center font-extrabold mt-[50px] ${brunoAce.className}`} style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                WebkitTextStroke: "1px black",
            }}>Contact Us</h1>
        <div ref={ref} className='grid grid-cols-2 md:grid md:grid-cols-4 gap-5 justify-center items-center px-4 py-10 overflow-hidden'>
            
            <div className='  flex flex-col justify-center items-center text-center 
                h-[150px]  md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105 cursor-pointer' onClick={handleCall}>

                <PhoneCall className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[17px] md:text-[20px] text-gray-600 `}>Call Us</h1>
                <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600`}>24/7 Customer Support</p>
                <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600  `}>+974 50225005</p>
            </div>

            <div className='flex flex-col justify-center items-center text-center 
                h-[150px]   md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105 cursor-pointer' onClick={handleMessage}>

                <MessagesSquare className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Chat With Us</h1>
                <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600`}>Quick Response Guaranteed</p>
                <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600 hidden md:block  `}>+974 50225005</p>
            </div>

            
                <div className=' flex flex-col justify-center items-center text-center 
                h-[150px]  md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105 cursor-pointer' onClick={handleEmail}>


                    <Mail className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                    <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Email Us</h1>
                    <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600 `}>Quick Response Guaranteed</p>
                    <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600 hidden md:block `}>Homezentradingconstruction@gmail.com</p>
                </div>
          
            <div className=' flex flex-col justify-center items-center text-center 
                h-[150px]  md:h-[230px] md:w-[300px] md:rounded-[5px] md:shadow-lg transition-all duration-300 
                md:hover:shadow-2xl hover:scale-105 cursor-pointer' onClick={handleLocation}>


                <MapPin className='w-7 h-7 md:w-10 md:h-10 mb-[10px]' />
                <h1 className={`${poppins.className} text-[20px] text-gray-600 `}>Visit Us</h1>
                <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600`}>Main Office</p>
                <p className={`${poppins.className} text-[12px] md:text-[15px] text-gray-600 `}>Doha, Qatar</p>
            </div>
        </div>
   </>
    )
});

export default AcContact;
