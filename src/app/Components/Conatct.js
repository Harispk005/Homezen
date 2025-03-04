    'use client'
    import React, { useState } from 'react'
    import { Audiowide, Poppins } from "next/font/google";
    import { Phone, Mail, MapPin, Clock } from 'lucide-react';
    import emailjs from "@emailjs/browser";

    const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
    const facultyGlyphic = Poppins({ weight: "400", subsets: ["latin"] });

    const Contact = () => {
        const [formData, setFormData] = useState({
            fullname: "",
            phone: "",
            email: "",
            message: "",
        })

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
        
            const serviceId = "service_mjyw55c";
            const templateId = "template_bzar4qz";
            const userId = "1nWFm1U56mSZdX6Nl";
            const emailParams = {
                from_name: formData.fullname,  
                from_email: formData.email,  // Ensure EmailJS template uses this
                reply_to: formData.email,    // Helps when replying
                to_email: "homezentradingconstruction@gmail.com", 
                phone: formData.phone,
                message: formData.message
            };
        
            // console.log(emailParams);            
    
        
        
            emailjs.send(serviceId, templateId, emailParams, userId)
                .then((response) => {
                    console.log("Email sent successfully!", response);
                    alert("Email sent successfully!");
                    setFormData({ fullname: "", phone: "", email: "", message: "" });
        
                    // After sending email, send WhatsApp message
                    sendWhatsappmessage(emailParams);
                })
                .catch((error) => {
                    console.error("Failed to send email:", error);
                    alert("Failed to send email.");
                });
        };
        const sendWhatsappmessage = ({ fullname, phone, email, message }) => {
            const number = "+97450225005"; 
        
        
            const whatsappMessage = `Hello,\n\nYou got a new message from: ${fullname}\nEmail: ${email}\nContact Number: ${phone}\n\nMessage:\n ${message}`;
        
            const encodedMessage = encodeURIComponent(whatsappMessage);
        
            const url = `https://wa.me/${number}?text=${encodedMessage}`;
        
            window.open(url, "_blank");
        };
        

        return (
            <div id='contact' className="mx-5 md:mx-10 my-[50px]">
                <div
                    style={{ backgroundColor: "whitesmoke" }}
                    className="py-10 px-5 md:px-10 rounded-[15px] shadow-[0px_5px_15px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {/* Left Section - Contact Details */}
                    <div>
                        <h1 className={`text-[30px] text-center md:text-[42px] font-extrabold ${audiowide.className}`}>
                            Contact Us
                        </h1>
                        <p className={`${facultyGlyphic.className} text-gray-500 text-justify  mt-[15px]`}>
                            Get in touch with us for any inquiries or service requests. We're here to help!
                        </p>

                        <ul className="flex flex-col gap-2 mt-[20px] ml-8">
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-500">+974 12345678</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-500">Homezen@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-500">Available 24/7 for emergencies</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-500">Doha, Qatar</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className='w-full md:px-20'>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="md:flex md:gap-4">
                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                    <label className="text-gray-500 text-[14px]">Full Name:</label>
                                    <input
                                        type="text"
                                        name="fullname"  
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                        required
                                    />
                                </div>

                                <div className="w-full md:w-1/2">
                                    <label className="text-gray-500 text-[14px]">Number:</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your number"
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-500 text-[14px]">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-gray-500 text-[14px]">Your Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="border border-gray-300 p-2 rounded-md w-full h-[100px] resize-none"
                                    required
                                />
                            </div>

                            <button
                                className="bg-black hover:bg-white hover:text-black border border-black text-white py-2 px-4 rounded-md mt-4 transition duration-300"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

    export default Contact;
