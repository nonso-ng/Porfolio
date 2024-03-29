import React from "react";
import wallet from "../Assets/wallet.png";
import react from "../Assets/atom.png";
import cart from "../Assets/shopping-cart.png";
import code from "../Assets/tag.jpeg";
import { FaBlackTie } from "react-icons/fa";

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
            <div>
              <FaBlackTie />
            </div>
            <h2>Get ready to bring your Ideas to life!</h2>
            <p>
              I can help you start something new, improve on old project or give
              them new
              <br /> directions
            </p>
            <p>And i will make an excelent addition to your team.</p>
            <h3>
              <a
                href="../Assets/resume.pdf"
                alt="resume"
                target="_blank"
                download
              >
                {" "}
                Check out my Resume!
              </a>{" "}
            </h3>
          </div>
          <div className="resume-right">
            <img alt="" src={code}></img>
            <div>
              I code things from scratch using clean, readabale and reuseable
              codes.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
