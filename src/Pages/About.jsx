import React from 'react'
import Section from "../Components/Section"
import Footer from "../Components/Footer"
const About = () => {
    return (
        <div className='bg-blue min-h-screen text-white'>
            <div className='pt-12 md:pt-16 md:pl-16 md:pr-16 text-center md:text-start px-3 pb-0 md:space-y-1 space-y-3'>
                <h2 className='font-Montserrat font-bold md:text-lg text-2xl'>About me</h2>
                <p className='font-Montserrat font-normal text-lg leading-7'>I am a web developer with 4+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects, including building and maintaining single page applications, integrating with REST APIs, and implementing responsive design principles. I am also proficient in using tools such as Webpack, npm, and Git for development and deployment. In addition to my technical skills, I am a strong communicator and team player. I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed.</p>
            </div>

            <div>
                <Section />
                <Footer />
            </div>

        </div>
    )
}

export default About