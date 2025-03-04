"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { Bruno_Ace_SC } from "next/font/google";
import { Poppins } from "next/font/google";
import AcService from '../Components/AcService';
import AcContact from '../Components/AcContact';
import Footer from '../Components/Footer';
import AcBrands from '../Components/AcBrands';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const brunoAce = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });






const page = () => {
  const acsales=useRef(null);
  const acservice=useRef(null);
  const acaccessories=useRef(null);
  const accontact=useRef(null);
  const scrollToSection = (ref) => {
    if(ref && ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
      <div className='flex flex-col justify-center items-center '>

        <Image src="/Acbg.jpg" alt=' acbg' width={1920} height={1000} className='w-full  md:h-screen object-cover rounded-b-lg ' priority />

        <h1 className={`md:absolute absolute text-[23px] text-white md:text-black text-center md:text-[42px] font-extrabold mt-[50px] md:mt-[100px] px-[10px]  ${brunoAce.className}`}
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            WebkitTextStroke: "1px black"
          }}
        >
          Reliable AC Solutions for Ultimate Comfort
        </h1>
        <p className={`md:absolute text-black  mt-[10px] md:mt-[250px] w-[85%] sm:w-[500px] md:w-[900px] mx-auto text-l md:text-xl text-justify justify-center md:text-center  hidden md:block ${poppins.className}`}>We provide expert AC maintenance, sales, and installation for homes, businesses, and industries, ensuring efficient cooling, energy savings, and lasting reliability.</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h2 className={`block  ${brunoAce.className} text-[30px] mt-[20px] md:text-[42px] md:mt-[100px] `} style={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          WebkitTextStroke: "1px black"
        }}>AC Services</h2>
        <div className='grid grid-cols-2 gap-4 mt-4 sm:flex sm:gap-4'>
          <button onClick={() => scrollToSection(acsales)} className='mx-6 my-4  text-black font-semibold border-b-2 border-black hover:font-bold '>Sales</button>
          <button onClick={() => scrollToSection(acservice)} className='mx-6 my-4  text-black font-semibold border-b-2 border-black hover:font-bold '>Installation & Maintenance</button>
          <button onClick={() => scrollToSection(acaccessories)} className='mx-6 my-4  text-black font-semibold border-b-2 border-black hover:font-bold '>Accessories & Parts</button>
          <button onClick={() => scrollToSection(accontact)} className='mx-6 my-4  text-black font-semibold border-b-2 border-black hover:font-bold '>Contact</button>

        </div>
      </div>


      <div  >
        {/* 1st section */}
        <div ref={acsales} className='flex flex-col w-full h-[950px] md:h-auto  mt-[50px]  rounded-[5px]'>
          <div className=' md:grid md:grid-cols-2'>
            <div>
              <h1 className={`text-[25px] md:text-[35px] text-center font-extrabold mt-[30px] ${brunoAce.className}`}
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  WebkitTextStroke: "1px black"
                }}>AC Sales</h1>

              <p className={`text-justify mt-[25px] text-gray-600 mx-3 md:mx-8 my-[50px] ${poppins.className}`}>At HomeZen, we specialize in AC sales, offering a wide range of high-quality air conditioning units to suit your needs. Choosing the right AC can be challenging, but with our expert guidance, you can find the perfect system for your home or business. Our team considers factors like room size, energy efficiency, cooling capacity, and budget to recommend the ideal solution. Whether you need a split AC, window unit, or central cooling system, we ensure you get the best performance and long-term savings. Trust HomeZen for reliable products and professional advice to keep your space cool and comfortable.</p>

            </div>

            <div className='relative md:w-full sm:w-1/2 h-64 sm:h-[400px]'>
              <Image src='/acsales.jpg' alt='acsales' fill className='  object-cover  ' />
            </div>
          </div>

          <div className='flex justify-center items-center px-[20px] py-[20px]'>
            {/* <AcBrands /> */}
          </div>

        </div>
        {/* 2nd section */}
        <div ref={acservice} className=' flex flex-col-reverse md:grid md:grid-cols-2  mt-[50px] rounded-[5px]'>

        <div className='relative md:w-full sm:w-1/2 h-64 sm:h-[400px]'>
            <Image src='/ac1.jpg' alt='acsales' fill className=' object-cover ' priority />
          </div>

          <div >
            <h1 className={`text-[25px] md:text-[35px] text-center font-extrabold mt-[30px] ${brunoAce.className}`}
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                WebkitTextStroke: "1px black"
              }}>AC installation & Maintenance</h1>

            <p className={`text-justify mt-[25px] text-gray-600 mx-3 md:mx-8 my-[50px] ${poppins.className}`}>Proper AC installation ensures efficient cooling, energy savings, and durability. Selecting the right unit based on room size and insulation, positioning the indoor unit for even airflow, and ensuring proper ventilation for the outdoor unit are crucial. Correct refrigerant levels, secure mounting, and proper insulation prevent leaks and inefficiencies, while a stable power source and drainage system help avoid electrical and water issues.

              Regular maintenance extends the AC’s lifespan and performance. Cleaning filters, coils, and checking refrigerant levels prevent inefficiencies and damage. Inspecting electrical connections and lubricating parts reduces wear and tear, ensuring consistent cooling and lower energy costs.</p>

          </div>
        </div>

        {/* 3rd section */}


        <div ref={acaccessories} className='flex flex-col w-full  md:h-auto  mt-[50px] rounded-[5px]'>

          <div className=' md:grid md:grid-cols-2'>
            <div >
              <h1 className={`text-[25px] md:text-[35px] text-center font-extrabold mt-[30px] ${brunoAce.className}`}
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  WebkitTextStroke: "1px black"
                }}>AC Accessories & Parts Sales</h1>

              <p className={`text-justify mt-[25px] text-gray-600 mx-3 md:mx-8 my-[50px] ${poppins.className}`}>We offer a wide range of high-quality AC accessories and spare parts to ensure the smooth functioning and longevity of your air conditioning system. Our collection includes remote controls, air filters, copper pipes, stabilizers, condensers, compressors, and other essential components. Whether you need replacement parts for repairs or accessories to enhance performance, we provide reliable and durable products from trusted brands. Our expert team can also assist in selecting the right parts to match your AC model, ensuring efficiency and optimal cooling.</p>

            </div>

            <div className='relative md:w-full sm:w-1/2 h-64 sm:h-[400px]'>
              <Image src='/ac2.jpg' alt='acsales'fill className=' object-cover ' />
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center px-[20px] py-[20px]'>
          <AcBrands />
        </div>
      </div>
      <AcContact ref={accontact} />
      <Footer />

    </>
  )
}

export default page