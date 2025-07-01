import React from "react";
import "./HeroSection.scss";
import curveLeft from "../../assets/images/curve-left.png"; 
import curveRight from "../../assets/images/curve-right.png"; 

function HeroSection () {
  return (
    <div className="hero">
      <img src={curveLeft} alt="curve-left" className="curve curve-left" />
      <img src={curveRight} alt="curve-right" className="curve curve-right" />
      <div className="content">
        <button className="studio-button">VIEW PROJECTS</button>
        <h1 className="title">CODE BY PARISA</h1>
        <p className="subtitle">PARISA MIRHOSSEINI</p>
        <div className="platform"></div>
      </div>
    </div>
  );
}

export default HeroSection;
