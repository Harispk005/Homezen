"use client"; 

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon, MailIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const handleCall = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = "tel:+97450225005";
    } else {
        alert("This feature only works on mobile devices.");
    }
};

const handleEmail = () => {
  window.open("mailto:homezentradingconstruction@gmail.com", "_blank");
};

  return (
    <footer
      className="bg-[black] text-white py-10 px-5"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
       
      

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2" onClick={handleCall}>
              <PhoneIcon className="w-5 h-5" /> +974 50225005
            </li>
            <li className="flex items-center gap-2" onClick={handleEmail}>
              <MailIcon className="w-5 h-5" /> Homezentradingconstruction@gmail.com
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a 
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
             <Image src='/twitter.svg' alt='twitter' width={40} height={40} className=' h-[26px] w-[26px] ' />
            </a>
          </div>
        </motion.div>
        
        <motion.div
        className="mt-10 text-center text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Homezen. All rights reserved.
      </motion.div>
      </div>

   
    </footer>
  );
};

export default Footer;
