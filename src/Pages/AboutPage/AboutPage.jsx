import React from 'react';
import './AboutPage.scss';
import avatar from '../../assets/images/avatar.png'; 

function AboutPage() {
  return (
    <div className="page-container">
    <div className="About">
      <h1 className="About-title">
      <span className="About-title__about">About </span> 
      <span className="About-title__me">ME</span>
        </h1>
      <div className="About-title_container">
      <h2 className="About-title_container-text">Hi, I’m Parisa Mirhosseini</h2>
      <img src={avatar} alt="Parisa Mirhosseini" className="About-title_container-avatar" />
      </div>
      <p className="About-content"> I’m a frontend developer with a background in architectural design and a strong interest in creating thoughtful, user-centered digital experiences. Before transitioning into tech, I spent several years working as an architectural designer, where I learned how to balance form and function a mindset I now bring to every line of code.

      <br />
      Whether I’m building responsive UIs, planning user flows, or collaborating with cross-functional teams, I approach each project with a designer’s eye and a developer’s precision. After completing an intensive Software Engineering diploma at BrainStation, I’ve worked with React, JavaScript, SCSS, WordPress, and I've built projects ranging from e-commerce platforms to full-stack web applications using React, modern JavaScript, and backend tools like Node.js and MySQL.

      <br />
      I’m especially interested in opportunities where technology intersects with creativity from crafting polished frontend interfaces to exploring how AI can enhance the way we build and interact with digital products.

When I’m not coding, you’ll probably find me exploring new cafes, sketching ideas, or planning my next travel adventure.<br /> Feel free to reach out if you’d like to connect or collaborate.</p>
      <div className="About__content">
      </div>
    </div>
    </div>
	
  );
}

export default AboutPage;


