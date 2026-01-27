import React from "react";
import "./HeroSection.scss";
import curveLeft from "../../assets/images/curve-left.png";
import curveRight from "../../assets/images/curve-right.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero">
      <img src={curveLeft} alt="curve-left" className="curve curve-left" />
      <img src={curveRight} alt="curve-right" className="curve curve-right" />
      <div className="content">
        <h1 className="title">PARISA MIRHOSSEINI</h1>
        <p className="role">
        Frontend Developer with a Product Mindset
            </p>
        <h1 className="home__title">WELCOME TO MY PORTFOLIO</h1>
        <button className="studio-button">
          <Link to="/projects" className="studio-button-link">VIEW PROJECTS</Link>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
