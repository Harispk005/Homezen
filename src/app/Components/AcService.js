// import React from 'react'
// import Image from 'next/image'
// import { Bruno_Ace_SC } from "next/font/google";
// import { Poppins } from "next/font/google";
// import AcBrands from './AcBrands';




// const poppins = Poppins({ weight: "400", subsets: ["latin"] });

// const brunoAce = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });
// const AcService = ({ id }) => {
//     return (
//         <div className='mx-3 md:mx-8 my-[50px]' id={id}>
//             <div className='flex flex-col w-full h-[950px] md:h-auto bg-[#F2EFE7] mt-[50px]  rounded-[5px]'>

//                 {/* 1st section */}
//                 <div className=' md:grid md:grid-cols-2'>
//                     <div className='mx-[20px] my-[20px]'>
//                         <h1 className={`text-[25px] md:text-[35px] text-center font-extrabold mt-[30px] ${brunoAce.className}`}
//                             style={{
//                                 textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                                 WebkitTextStroke: "1px black"
//                             }}>AC Sales</h1>

//                         <p className={`text-justify mt-[25px] text-gray-600 ${poppins.className}`}>At HomeZen, we specialize in AC sales, offering a wide range of high-quality air conditioning units to suit your needs. Choosing the right AC can be challenging, but with our expert guidance, you can find the perfect system for your home or business. Our team considers factors like room size, energy efficiency, cooling capacity, and budget to recommend the ideal solution. Whether you need a split AC, window unit, or central cooling system, we ensure you get the best performance and long-term savings. Trust HomeZen for reliable products and professional advice to keep your space cool and comfortable.</p>

//                     </div>

//                     <div>
//                         <Image src='/acsales.jpg' alt='acsales' width={1920} height={1000} className=' h-[420px] w-full py-[30px] px-[30px] object-cover  ' />
//                     </div>
//                 </div>

//                 <div className='flex justify-center items-center px-[20px] py-[20px]'>
//                     {/* <AcBrands /> */}
//                 </div>

//                 </div>
//                 {/* 2nd section */}
//                 <div className=' flex flex-col-reverse md:grid md:grid-cols-2  bg-[#F2EFE7] mt-[50px] rounded-[5px]'>

//                     <div>
//                         <Image src='/ac1.jpg' alt='acsales' width={1920} height={1000} className=' h-[420px] w-full py-[30px] px-[30px] object-cover ' priority />
//                     </div>

//                     <div className='mx-[20px] my-[20px]'>
//                         <h1 className={`text-[25px] md:text-[35px] text-center font-extrabold mt-[30px] ${brunoAce.className}`}
//                             style={{
//                                 textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                                 WebkitTextStroke: "1px black"
//                             }}>AC installation & Maintenance</h1>

//                         <p className={`text-justify mt-[25px] text-gray-600 ${poppins.className}`}>Proper AC installation ensures efficient cooling, energy savings, and durability. Selecting the right unit based on room size and insulation, positioning the indoor unit for even airflow, and ensuring proper ventilation for the outdoor unit are crucial. Correct refrigerant levels, secure mounting, and proper insulation prevent leaks and inefficiencies, while a stable power source and drainage system help avoid electrical and water issues.

//                             Regular maintenance extends the AC’s lifespan and performance. Cleaning filters, coils, and checking refrigerant levels prevent inefficiencies and damage. Inspecting electrical connections and lubricating parts reduces wear and tear, ensuring consistent cooling and lower energy costs.</p>

//                     </div>
//                 </div>

//                 {/* 3rd section */}


//            <div className='flex flex-col w-full  md:h-auto bg-[#F2EFE7] mt-[50px] rounded-[5px]'>

//                 <div className=' md:grid md:grid-cols-2'>
//                     <div className='mx-[20px] my-[20px]'>
//                         <h1 className={`text-[25px] md:text-[35px] text-center font-extrabold mt-[30px] ${brunoAce.className}`}
//                             style={{
//                                 textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                                 WebkitTextStroke: "1px black"
//                             }}>AC Accessories & Parts Sales</h1>

//                         <p className={`text-justify mt-[25px] text-gray-600 ${poppins.className}`}>We offer a wide range of high-quality AC accessories and spare parts to ensure the smooth functioning and longevity of your air conditioning system. Our collection includes remote controls, air filters, copper pipes, stabilizers, condensers, compressors, and other essential components. Whether you need replacement parts for repairs or accessories to enhance performance, we provide reliable and durable products from trusted brands. Our expert team can also assist in selecting the right parts to match your AC model, ensuring efficiency and optimal cooling.</p>

//                     </div>

//                     <div>
//                         <Image src='/ac2.jpg' alt='acsales' width={1920} height={1000} className=' h-[420px] w-full py-[30px] px-[30px] object-cover ' />
//                     </div>
//                 </div>
//                 </div>

//                 <div className='flex justify-center items-center px-[20px] py-[20px]'>
//                     <AcBrands />
//                 </div>
//         </div>
//     )
// }

// export default AcService