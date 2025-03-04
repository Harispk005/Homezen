'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Audiowide, Poppins } from "next/font/google";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const facultyGlyphic = Poppins({ weight: "400", subsets: ["latin"] });

const slides = [
    { image: '/bld3.jpg', title: "Your Trusted Partner in Construction & AC Solutions", description: "Delivering excellence in construction and AC solutions with reliability and expertise." },
    { image: '/ac6.png', title: "Having Troubles with your AC? We are here to help!", description: "Our expert technicians provide quick and efficient AC repair and maintenance services." },
    { image: '/bld2.jpg', title: "Need expert guidance for your commercial or residential project? We’ve got you covered!", description: "From planning to execution, we offer top-notch construction and renovation solutions." },
    { image: '/house.jpg', title: "Planning to build your dream home? We’re here to make it a reality!", description: "Let’s bring your vision to life with high-quality craftsmanship and attention to detail." },
    { image: '/renovation2.jpg', title: "Thinking about renovating or expanding your space? Let’s bring your vision to life!", description: "Upgrade your home or office with our professional renovation services tailored to your needs." },
    { image: '/electrical.jpg', title: "Facing electrical or plumbing problems? Stay safe—let our professionals handle it!", description: "Trust our skilled electricians and plumbers to fix issues safely and efficiently." }
];

const Middleview = () => {
    return (
        <div className='flex justify-center items-center'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={2000}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, EffectFade]}
                className='w-full h-[600px] md:h-screen'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <Image src={slide.image} alt='background' width={1920} height={1000} priority className='w-full h-screen object-cover rounded-b-lg' />
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-6 min-h-full">
                            <div className="flex flex-col justify-center items-center flex-grow">
                                <h1 className={`text-[30px] md:text-[42px] text-white font-bold ${audiowide.className}`}>
                                    {slide.title}
                                </h1>
                                <p className={`text-white mt-6 w-[90%] sm:w-[500px] md:w-[800px] mx-auto text-xl ${facultyGlyphic.className}`}>
                                    {slide.description}
                                </p>
                            </div>
                            <div className="flex justify-center items-center gap-4 mb-20">
                                <button className={`bg-black text-white px-4 py-2 rounded-[10px] hover:bg-white hover:text-black transition duration-500 w-[130px] h-[40px] ${facultyGlyphic.className}`}>
                                    Get Started
                                </button>
                                <button className={`bg-white text-black px-4 py-2 rounded-[10px] hover:bg-black hover:text-white transition duration-500 w-[130px] h-[40px] ${facultyGlyphic.className}`}>
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Middleview;
