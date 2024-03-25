import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImg from '../../../assets/images/bannerImg.png'
import { ButtonThree } from "../../atoms";
import '../../../shared/Shared.css'
import DropdownButton from "../../../pages/Login/Dropdown";


const Banner = () => {
    const options = ['Student', 'Teacher', 'Supervisior'];
    return (
        <div className="pt-14 parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between dark:bg-boxdark ">
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl font-semibold text-center mb-0 translate-y-[-30%] sm:translate-y-[-0%] text-primary md:text-left">
                    Sistem Penggajian Karyawan Online
                    <br />PT. Humpuss Karbometil Selulosa</h1>
                <p className="pt-8 text-center max-w-xl mb-6 font-medium translate-y-[-60%] sm:translate-y-[-0%] md:text-left dark:text-white">
                    Sebuah platform perusahaan untuk mengelola
                    proses penggajian karyawan secara efisien dan terintegrasi melalui platform digital.
                </p>

                <div className="grid justify-center sm:flex sm:justify-start translate-y-[-170%] sm:translate-y-[-0%]">
                <DropdownButton options={options} className="primary-button w-full text-white">
                    <span>Login</span>
                </DropdownButton>
                </div>
            </motion.div>
            <motion.div
                className="w-full md:w-1/3"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="order-1  lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
                    <img
                        src={bannerImg}
                        title="Banner EducationClick"
                        alt="Banner EducationClick"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
