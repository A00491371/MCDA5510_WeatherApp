import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-page">
      {/* Left Profile Card */}
      <div className="profile-card">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="about-profile-pic"
        />
        <h1 className="about-name">Soundarya Venkataraman</h1>
        <p className="about-role">Data Analyst | Software Developer</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/soundaryavenkataraman" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/A00491371/" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
      </div>

      {/* Right Content Card */}
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-question">About Myself</h2>
          <p className="about-answer">
            I am a Software Developer with around 3.5 years of experience in building scalable web applications using
            technologies such as Java, Spring Boot, IBM DB2, MySQL, and React. Over the years, I have contributed to various
            phases of the software development life cycle, focusing on developing efficient and high-performing backend systems.
            Known for being a quick learner and a resilient problem solver, I bring both technical expertise and perseverance to
            every project I work on. Having taken a short career break for health reasons, I am now re-energized and eager to
            transition into the field of Data Analytics—an area where I can combine my technical foundation with analytical
            thinking to uncover meaningful insights. Outside of work, I enjoy drawing and find watching pottery and ceramic
            cup-making videos incredibly relaxing—it’s like therapy without the price tag!
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-question">Why I am pursuing a career in Data Analytics?</h2>
          <p className="about-answer">
            Data has always fascinated me—how raw numbers can tell powerful stories when analyzed correctly. With my background in
            software development, I believe transitioning into Data Analytics is a natural next step. I am currently enhancing my
            skills in Python, data visualization, and front-end tools to build interactive analytical applications. Additionally,
            I am exploring DevOps concepts to understand how automation can streamline the development and deployment of data-driven
            solutions. My goal is to grow as a Data Analyst, leveraging both my technical and analytical abilities to help
            organizations make smarter, data-informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

