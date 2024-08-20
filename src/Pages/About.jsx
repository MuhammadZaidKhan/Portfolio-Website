import React from "react";
import Section from "../Components/Section";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <div className="bg-blue min-h-screen text-white">
      <div className="pt-12 md:pt-16 md:pl-16 md:pr-16 text-center md:text-start px-3 pb-0 md:space-y-1 space-y-3">
        <h2 className="font-Montserrat font-bold md:text-lg text-2xl">
          About me
        </h2>
        <p className="font-Montserrat font-normal text-lg leading-7">
          As a dedicated computer science student in my seventh semester, I've
          developed a strong foundation in web development, particularly in
          front-end technologies like React and Tailwind. Over the past year,
          I've focused on creating responsive and user-friendly web
          applications, refining my skills in crafting seamless digital
          experiences. My proficiency in tools like npm and Git has allowed me
          to contribute to various projects, from maintaining single-page
          applications to continuously enhancing their performance. Currently,
          I'm expanding my knowledge into back-end development to become a
          well-rounded developer, with a goal to build more comprehensive
          applications. Alongside my technical abilities, I excel in
          communication and teamwork, always eager to collaborate and embrace
          new challenges. Whether working independently or within a team, I am
          passionate about leveraging my skills to solve problems and contribute
          to innovative projects. I'm continuously learning and evolving in this
          dynamic field, ready to make meaningful contributions wherever I go.
        </p>
      </div>

      <div>
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default About;
