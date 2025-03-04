import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_ctsaqjd",
            "template_7ugaqye",
            {
                user_name: formData.name,
                user_email: formData.email,
                message: formData.message,
            },
            "xyg2tgnpyC91L2KIh"
        )
            .then((response) => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    };

    return (
        <motion.footer
            className="bg-[#125a77] text-white py-10 px-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                        We provide top-notch AC services across Doha, ensuring year-round comfort. We also specialize in construction, renovation, building works, wiring, and plumbing, delivering exceptional craftsmanship and modern design.
                    </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="text-gray-300 space-y-2 mb-4">
                        <li className="flex items-center gap-2">
                            <Phone className="w-5 h-5" /> +974 1234 5678
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-5 h-5" /> info@example.com
                        </li>
                    </ul>
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
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                        <motion.input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        />
                        <motion.textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                        <motion.button
                            type="submit"
                            className="bg-black text-white py-2 rounded-md transition transform hover:scale-105"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            <motion.div
                className="mt-10 text-center text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
            >
                © {new Date().getFullYear()} Homezen. All rights reserved.
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
