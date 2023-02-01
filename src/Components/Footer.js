import React from "react";
import {FaEnvelope,FaGithub, FaLinkedin,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
            <h2>Lets Connect!</h2>
            <p>You can find me here</p>
            <FaEnvelope/>
            <FaLinkedin/>
            <FaTwitter/>
            <FaGithub/>
        </div>
        <div>
            <h2>Download my Resume here..</h2>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        
      Copyright © 2022 Egwuagha Nonso
      </div>
    </div>
  );
};

export default Footer;
