import React from 'react'
import Section from "../Components/Section"
import Footer from "../Components/Footer"
const About = () => {
    return (
        <div className='bg-blue min-h-screen text-white'>
            <div className='pt-12 md:pt-16 md:pl-16 md:pr-16 text-center md:text-start px-3 pb-0 md:space-y-1 space-y-3'>
                <h2 className='font-Montserrat font-bold md:text-lg text-2xl'>About me</h2>
                <p className='font-Montserrat font-normal text-lg leading-7'>As a computer science student in my sixth semester, I've immersed myself in web development over the past year, primarily focusing on front-end technologies like React and Tailwind. With a keen eye for user-friendly design and responsiveness, I've honed my skills in crafting compelling web applications. Proficient in tools such as npm and Git, I've been involved in various projects, ranging from maintaining single-page applications to ensuring seamless integration with APIs.

                    My journey in web development hasn't stopped there; I'm currently delving into back-end development to round out my skill set. As I eagerly seek an internship opportunity for the summer, I bring not only technical expertise but also strong communication and collaboration skills. I thrive in team environments and am always ready to tackle new challenges and embrace emerging technologies.</p>
            </div>

            <div>
                <Section />
                <Footer />
            </div>

        </div>
    )
}

export default About