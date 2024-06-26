import React from 'react'
import Section from "../Components/Section"
import Footer from "../Components/Footer"
import me from "../assets/me.jpg"
const Home = () => {
    return (
        <div className='bg-blue min-h-screen text-white overflow-auto'>

            {/* Picture Circle */}
            <div className='flex flex-col md:flex-row'>
                <div className="pt-10 flex justify-center items-center md:pt-20 md:pl-5">
                    <div className="w-40 h-40 md:w-52 md:h-52 bg-black rounded-full flex items-center justify-center">
                        <div
                            className="w-full h-full rounded-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${me})`,
                            }}
                        >
                        </div>
                    </div>
                </div>
                {/* Text */}
                <div className='pt-10 text-center md:text-start md:pt-20 md:pl-8 space-y-3'>
                    <h1 className='font-Montserrat font-normal text-4xl'>Muhammad Zaid Khan</h1>
                    <h2 className='font-Montserrat font-light text-2xl'>Full Stack Developer</h2>
                    <p className='px-3 md:px-0 md:w-5/6 font-Montserrat font-light text-base pt-4 leading-6'>Welcome to my portfolio website! I'm a versatile web developer skilled in both front-end and back-end development, dedicated to crafting exceptional digital experiences. Let's build something amazing together.</p>
                </div>
            </div>

            <div>
                <Section />
                <Footer />
            </div>
        </div>
    )
}

export default Home