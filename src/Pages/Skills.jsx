import React from "react";
import Section from "../Components/Section";
import Footer from "../Components/Footer";
const Skills = () => {
  return (
    <div className="bg-blue min-h-screen text-white">
      <div>
        <h2 className="font-Montserrat font-bold text-2xl pt-16 md:pt-24 md:pl-16 md:text-start text-center">
          Skills
        </h2>

        <div className="flex justify-center items-center md:items-start">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 md:mr-44 md:text-start text-center">
            {/* starts */}
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                HTML
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                CSS
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                Bootstrap Css
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                Tailwind Css
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                JavaScript
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                React Js
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                MongoDB
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                Dialogflow
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                Express JS
              </p>
            </div>
            <div className="w-36 h-7 rounded-lg mt-8 md:ml-16 md:pl-2 skills-border">
              <p className="font-Montserrat font-normal text-base leading-7">
                NodeJS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
