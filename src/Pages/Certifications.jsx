import React from "react";
import Section from "../Components/Section";
import Footer from "../Components/Footer";
import Slider2 from "../Components/Slider2";
const Projects = () => {
  return (
    <div className="bg-blue min-h-screen text-white">
      <h2 className="font-Montserrat font-bold text-2xl pt-16 md:pl-32 text-center md:text-start">
        Certifications
      </h2>

      <div>
        <Slider2 />
      </div>

      <div>
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
