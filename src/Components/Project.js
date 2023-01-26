import React from "react";
import wallet from "../Assets/wallet.png";
import react from "../Assets/atom.png";
import cart from "../Assets/shopping-cart.png";

const Project = () => {
  return (
    <>
      <div className="projects">
        <div className="show-projects">
          <div className="project-1">
            <img alt="wallet" src={wallet} />
            <h3>SAVEPRO</h3>
            <p>
              A Web app that provides has a landing page for a money saving
              platform.This was built using React.js
            </p>

            <a
              href="https://savepromax.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
           
              Check it out!!!
            </a>
          </div>
          <div className="project-2">
            <img alt="cart" src={cart} />
            <h3>FAMMS</h3>
            <p>A Fashion store template. This was built using HTML/CSS</p>
            <a
              href="https://ayobamiseun.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
             
              Do have a look!!!
            </a>
          </div>
          <div className="project-3">
            <img src={react} alt="atom" />
            <h3>CALCULATOR</h3>
            <p>
              A simple Arithemetic Calculator. This was built using React.js and
              CSS
            </p>
            <a
              href="https://altschoolfrontendassignment.nonso98.repl.co/"
              target="_blank"
              rel="noreferrer"
            >
             
              Check it out!!!
            </a>
          </div>
        </div>
        <div className="resume">
          <div className="resume-left">
            one part
          </div>
          <div className="resume-right">
            two part
          </div>
        </div>
      </div>

    </>
  );
};

export default Project;
