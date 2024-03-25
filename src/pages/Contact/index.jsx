import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import {
    FaUserAlt,
    FaPhoneAlt,
    FaLocationArrow,
    FaLinkedin,
    FaTwitterSquare,
    FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import '../../shared/Shared.css'
import { BottomLine, ButtonThree } from "../../components/atoms";
import { Footer, Navbar } from "../../components";
import axios from 'axios';

const Contact = () => {
    // const navigate = useNavigate();
    const form = useRef();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/email/sendEmail', formData);
          console.log(response.data);
          // Reset form after successful submission
          setFormData({name: '', email: '', subject: '', message: '' });
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };
    
    useEffect(() => {
        if (inView) {
            setViewDiv(true);
        } else {
            setViewDiv(false);
        }
    }, [inView, animation]);

    return (
        <>
            <div className="dark:bg-boxdark">
                <Navbar />
                <div className="parent py-16 my-16 dark:bg-boxdark">
                    <motion.div
                        initial="hidden"
                        animate={viewDiv && "visible"}
                        variants={headingAnimation}
                    >
                        <h3 className="text-neutral text-center dark:text-white">Contact</h3>
                        <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                            Education <span className="text-primary">Click</span>
                        </h1>
                        <BottomLine />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <motion.div
                            className=""
                            ref={ref}
                            initial="hidden"
                            animate={viewDiv && "visible"}
                            variants={contactAnimation}
                        >
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                    <input
                                        className="input-field"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input-field"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    className="input-field"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <ButtonThree
                                    type="submit"
                                    value="Send Message"
                                    className=""
                                >
                                    <span>Send Message</span>
                                    <span><MdSend /></span>
                                </ButtonThree>
                            </form>
                        </motion.div>
                        <motion.div
                            className=""
                            initial={{ y: 50, opacity: 0 }}
                            animate={viewDiv && "visible"}
                            variants={contactAnimation}
                        >
                            <div className="flex items-center my-6">
                                <FaUserAlt className="text-2xl mr-8 text-primary duration-300"></FaUserAlt>
                                <h3 className="font-medium dark:text-white">Mr. Director</h3>
                            </div>
                            <div className="flex items-center my-6">
                                <FaPhoneAlt className="text-2xl mr-8 text-primary duration-300"></FaPhoneAlt>
                                <h3 className="font-medium dark:text-white">021-044</h3>
                            </div>
                            <div className="flex items-center my-6">
                                <MdEmail className="text-3xl mr-8 text-primary duration-300"></MdEmail>
                                <h3 className="font-medium dark:text-white">info@educationclick.com</h3>
                            </div>
                            <div className="flex items-center my-6">
                                <FaLocationArrow className="text-2xl mr-8 text-primary duration-300"></FaLocationArrow>

                                <h3 className="font-medium dark:text-white">
                                    Colombo, Sri Lanka
                                </h3>
                            </div>
                            <div className="mt-8 flex items-center">
                                <h3 className="text-xl dark:text-white">Social</h3>
                                <div className="bg-black dark:bg-white w-10 h-[2px] mx-4"></div>
                                <a
                                    href="/"
                                    target="blank"
                                    className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                                >
                                    <FaLinkedin></FaLinkedin>
                                </a>
                                <a
                                    href="/"
                                    target="blank"
                                    className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                                >
                                    <FaTwitterSquare></FaTwitterSquare>
                                </a>
                                <a
                                    href="/"
                                    target="blank"
                                    className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                                >
                                    <FaInstagramSquare></FaInstagramSquare>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
