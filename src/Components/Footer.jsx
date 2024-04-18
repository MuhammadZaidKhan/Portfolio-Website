import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
    return (
        <div className='footer text-white'>
            <div className='flex flex-col justify-center items-center pt-4 pb-10  border'>
                <h2 className='font-Montserrat font-normal text-xl'>Contact Me</h2>

                <ul className='grid grid-cols-2 gap-8 md:grid-cols-4 md:space-x-10 pt-5 font-Montserrat font-normal'>
                    <li >
                        <a href="https://github.com/MuhammadZaidKhan" target="_blank" className='ml-1 md:pl-12'>Github<MdArrowOutward className="icon ml-1" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mzaidkhan/" target="_blank">Linkedin<MdArrowOutward className="icon ml-1" /></a>
                    </li>
                    <li>
                        <a href="" target="_blank">Facebook<MdArrowOutward className="icon ml-1" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Instagram<MdArrowOutward className="icon ml-1" /></a>
                    </li>
                </ul>
            </div>
            <p className='font-Montserrat font-normal pl-5 md:pl-10 py-1'>© 2024 mzaidkhan All rights reserved.</p>
        </div>
    )
}

export default Footer