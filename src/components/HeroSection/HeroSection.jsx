// import React from "react";
import "./HeroSection.scss";
// import curveLeft from "../assets/curve-left.png"; // Replace with your image
// import curveRight from "../assets/curve-right.png"; // Replace with your image

function HeroSection (){
  return (
    <div className="hero">
      {/* <img src={curveLeft} alt="curve-left" className="curve curve-left" />
      <img src={curveRight} alt="curve-right" className="curve curve-right" /> */}

      <div className="content">
        <button className="studio-button">STUDIO SHODWE</button>
        <h1 className="title">METAVERSE</h1>
        <p className="subtitle">PRESENTATION</p>
        <div className="platform"></div>
      </div>

      <div className="footer-info">
        <span className="year">2025</span>
        <span className="page-number">page 01</span>
        <span className="arrows">⏩</span> 

      </div> 
    </div>
  );
}

export default HeroSection;
