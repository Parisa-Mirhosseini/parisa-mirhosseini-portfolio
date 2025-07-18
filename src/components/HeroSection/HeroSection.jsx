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
        <h1 className="title">CODE BY PARISA</h1>
        <h1 className="home__title">Welcome to My Portfolio</h1>
        <p className="subtitle">PARISA MIRHOSSEINI</p>
        <button className="studio-button">VIEW PROJECTS</button>
        <div className="platform"></div>
      </div>
    </div>
  );
}

export default HeroSection;
