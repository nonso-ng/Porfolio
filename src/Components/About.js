import React from "react";
import avatar from "../Assets/avatar.png";
import { FaAddressCard } from "react-icons/fa";
import html from "../Assets/html-5.png"
import css from "../Assets/css-3.png"
import js from "../Assets/js.png"
import react from"../Assets/physics.png"
import tailwind from "../Assets/tailwind-css-icon.png"
import vue from "../Assets/icons8-vue-js-240.png"

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <div className="about-img">
          <img alt="" src={avatar} />
        </div>

        <div className="about-me">
          <div>
            <FaAddressCard />
          </div>
          <h2>About Me</h2>
        </div>
      </div>
      <div className="framework-section">
        <h2>Some languages and Frameworks that i use</h2>
        <div className="frameworks">
            <img src={html} alt="html icon" className="html"/>
            <img src={css} alt="css icon" className="css"/>
            <img src={js} alt="js icon" className="js"/>
            <img src={react} alt="react icon" className="react"/>
            <img src={vue} alt="vue icon" className="vuejs"/>
            <img src={tailwind} alt="tailwindicon" className="tailwind"/>


        </div>
      </div>
    </div>
  );
};

export default About;
