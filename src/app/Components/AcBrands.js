import React from 'react'
import { Bruno_Ace_SC } from "next/font/google";
import Image from 'next/image';

const brunoAce = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

const AcBrands = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <h1 className={`text-[20px] md:text-[25px] text-center font-extrabold ${brunoAce.className}`} style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                WebkitTextStroke: "1px black",
            }}>
                Authorized Dealer for Premium Brands
            </h1>

           
            <div className='flex flex-wrap justify-center items-center gap-6 mt-5 px-4'>
                <Image src="/samsung.png" alt='samsung' width={100} height={30} className='h-[20px] w-[80px]' />
                <Image src="/lg.png" alt='lg' width={100} height={90} className='h-[65px] w-[70px]' />
                <Image src="/gree.png" alt='gree' width={120} height={30} className='h-[20px] w-[80px]' />
                <Image src="/mistubushi.png" alt='mistubushi' width={70} height={60} className='h-[40px] w-[50px]' />
                <Image src="/daikin.png" alt='daikin' width={100} height={30} className='h-[20px] w-[80px]' />
                <Image src="/general.png" alt='general' width={120} height={150} className='h-[100px] w-[100px]' />
            </div>
        </div>
    )
}

export default AcBrands;
