import React from "react";
import {FaEnvelope,FaGithub, FaLinkedin,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-content">
            <h2>Lets Connect!</h2>
            <p>You can find me here</p>
          <div>
          <a href="https://github.com/nonso-ng" target="_blank" rel="noreferrer"> <FaEnvelope/></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"> <FaLinkedin/> </a>
            <a href="https://twitter.com/Mazi__nonso" target="_blank" rel="noreferrer"> <FaTwitter/> </a>
            <a href="https://github.com/nonso-ng" target="_blank" rel="noreferrer"> <FaGithub/> </a>
          </div>
            
        </div>
        <div className="footer-right">
            <h2>Download my Resume here..</h2>
            <button>Resume</button>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        
      Copyright © 2023 Egwuagha Nonso
      </div>
    </div>
  );
};

export default Footer;
