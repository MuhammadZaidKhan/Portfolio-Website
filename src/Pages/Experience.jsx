import React from 'react'
import Section from "../Components/Section"
import Footer from "../Components/Footer"
import bytewise from "../assets/bytewise.png"
import atomcamp from "../assets/atomcamp.png"
import mlsa from "../assets/mlsa.jpeg"
import gdsc from "../assets/gdsc.jpeg"
const Experience = () => {
    return (
        <div className='bg-blue min-h-screen text-white'>
            <div>
                <h2 className='font-Montserrat font-bold text-2xl pt-20 md:pl-12 text-center md:text-start'>Experience</h2>
                {/* Main div of 4 circles */}
                <div className='flex flex-col md:flex-row md:space-x-72 pb-0'>
                    {/* Div of first 2 circles */}
                    <div className='flex flex-col'>
                        {/* 1 */}
                        <div className='flex md:flex-row md:pl-0 pl-6'>
                            <div className='md:gap-y-8 pt-10 pl-10'>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full">
                                    <div
                                        className="w-full h-full rounded-full bg-contain bg-center"
                                        style={{
                                            backgroundImage: `url(${bytewise})`,
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className='pt-8 md:pt-10 pl-5'>
                                <h2 className='font-poppins font-bold text-xl'>Bytewise</h2>
                                <p className='font-poppins md:text-lg font-light md:leading-6'>Front-End Fellow</p>
                                <p className='font-Montserrat text-lg font-light leading-6'>2024</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex md:flex-row md:pl-0 pl-6'>
                            <div className='md:gap-y-8 pt-10 pl-10'>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full">
                                    <div
                                        className="w-full h-full rounded-full bg-contain bg-center"
                                        style={{
                                            backgroundImage: `url(${mlsa})`,
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className='pt-10 pl-5'>
                                <h2 className='font-poppins font-bold text-xl'>MLSA</h2>
                                <p className='font-poppins text-lg font-light leading-6'>Social Media Volunteer</p>
                                <p className='font-Montserrat text-lg font-light leading-6'>2024</p>
                            </div>
                        </div>

                    </div>
                    {/* Div of last 2 circles */}
                    <div className='flex flex-col'>
                        {/* 3 */}
                        <div className='flex md:flex-row md:pl-0 pl-6'>
                            <div className='md:gap-y-8 pt-10 pl-10'>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full">
                                    <div
                                        className="w-full h-full rounded-full bg-contain bg-center"
                                        style={{
                                            backgroundImage: `url(${atomcamp})`,
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className='pt-10 pl-5'>
                                <h2 className='font-poppins font-bold text-xl'>Atomcamp</h2>
                                <p className='font-poppins text-lg font-light leading-6'>Student</p>
                                <p className='font-Montserrat text-lg font-light leading-6'>2024</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='flex md:flex-row md:pl-0 pl-6'>
                            <div className='md:gap-y-8 pt-10 pl-10'>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full">
                                    <div
                                        className="w-full h-full rounded-full bg-contain bg-center"
                                        style={{
                                            backgroundImage: `url(${gdsc})`,
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className='pt-10 pl-5'>
                                <h2 className='font-poppins font-bold text-xl'>GDSC</h2>
                                <p className='font-poppins text-lg font-light leading-6'>Web dev Core Team Member</p>
                                <p className='font-Montserrat text-lg font-light leading-6'>2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Section />
                <Footer />
            </div>
        </div>
    )
}

export default Experience