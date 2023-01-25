import React from "react";
import { FaGithub, FaLinkedin,FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <nav className="navbar">
          <div className="logo">
            NONSO EGWUAGHA
            </div>
          <div className="nav-link">
            <ul>
              <li>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"> <FaLinkedin/> </a>
              </li>
              <li>
                <a href="https://twitter.com/Mazi__nonso" target="_blank" rel="noreferrer"> <FaTwitter/> </a>
              </li>
              <li>
                <a href="https://github.com/nonso-ng" target="_blank" rel="noreferrer"> <FaGithub/> </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">

            <h1> Hello and Welcome to my</h1>
            <h1 className="web">Website.</h1>
            <p>My name is Chinonso. Everyone calls me Nonso. I am a Frontend developer based in Lagos,</p>
            <p>Nigeria.</p>
            <p className="intro"> Here's some of my work.....</p>

        </div>

        
      </div>
    
    </>
  );
};

export default Hero;
