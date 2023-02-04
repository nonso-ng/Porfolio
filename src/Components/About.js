import React from "react";
import profile from "../Assets/profile.jpg";
import { FaAddressCard } from "react-icons/fa";
import html from "../Assets/html-5.png";
import css from "../Assets/css-3.png";
import js from "../Assets/js.png";
import react from "../Assets/physics.png";
import tailwind from "../Assets/tailwind-css-icon.png";
import vue from "../Assets/icons8-vue-js-240.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <div className="about-img">
          <img alt="" src={profile} />
        </div>

        <div className="about-me">
          <div className="card">
            <FaAddressCard />
          </div>
          <h2>About Me</h2>

          <p className="lead">
            I'm a mission-driven front-end Web Developer based in Lagos,
            Nigeria. With a passion for bringing thoughtful UI/Ux design to
            life. I make use of current and efficient technologies like React Js
            and Vue js in breathing life into designs.
          </p>
          <p className="lead">
            As a web developer/Designer, I enjoy using my obsessive attention to
            detail, my unequivocal love for making things, and my mission-driven
            work ethic to literally change the world.
          </p>
          <p className="lead">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skills one design problem at a time. I love listening
            to music, watching Documentaries,History and surfing Youtube
            generally.
          </p>
        </div>
      </div>
      <div className="framework-section">
        <h1>Some languages and Frameworks that i use</h1>
        <div className="frameworks">
          <img src={html} alt="html icon" className="html" />
          <img src={css} alt="css icon" className="css" />
          <img src={js} alt="js icon" className="js" />
          <img src={react} alt="react icon" className="react" />
          <img src={vue} alt="vue icon" className="vuejs" />
          <img src={tailwind} alt="tailwindicon" className="tailwind" />
        </div>
      </div>
    </div>
  );
};

export default About;
