import React from 'react';
import './AboutPage.scss';
import avatar from '../../assets/images/avatar.png'; 

function AboutPage() {
  return (
  <div>
    <div className="About">
      <h1 className="About-title">
      <span className="About-title__about">About </span> 
      <span className="About-title__me">ME</span>
        </h1>
      <div className="About-title_container">
      <h2 className="About-title_container-text">Hi, I’m Parisa Mirhosseini</h2>
      <img src={avatar} alt="Parisa Mirhosseini" className="About-title_container-avatar" />
      </div>
      <p className="About-content"> A Software Engineer with a background in architectural design and a passion for creating thoughtful, user-centered digital experiences.

Before stepping into tech, I spent several years bringing spaces to life as an architectural designer. That experience taught me how to balance form and function a mindset I now bring to every line of code. Whether it’s building responsive UIs, planning user flows, or collaborating with teams, I approach each project with a designer’s eye and a developer’s precision.

After completing an intensive Software Engineering diploma at BrainStation, I’ve worked on diverse projects ranging from e-commerce platforms to full-stack web applications. I enjoy solving real-world problems with clean code, modern JavaScript frameworks, and a strong sense of design.

I’m especially interested in opportunities where technology intersects with creativity from crafting beautiful front-end interfaces to exploring how AI can enhance the way we build and interact with digital tools.

When I’m not coding, you’ll probably find me exploring new cafes, sketching ideas, or planning my next travel adventure.

Thanks for stopping by feel free to reach out if you’d like to connect, collaborate, or just say hello!</p>
      <div className="About__content">
      </div>
    </div>
    </div>
	
  );
}

export default AboutPage;


