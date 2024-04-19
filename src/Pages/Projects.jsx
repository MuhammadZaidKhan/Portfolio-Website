import React from 'react'
import Slider from '../Components/Slider';
import Section from "../Components/Section"
import Footer from "../Components/Footer"
const Projects = () => {
    return (
        <div className='bg-blue lg:min-h-screen text-white'>
            <h2 className='font-Montserrat font-bold text-2xl pt-16 md:pl-32 text-center md:text-start'>Projects</h2>

            <div>
                <Slider />
            </div>

            <div>
                <Section />
                <Footer />
            </div>
        </div>
    )
}

export default Projects