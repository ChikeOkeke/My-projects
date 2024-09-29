/*
File Name: App.css
Student's Name: Chike Okeke
Student ID: 301496352
Date: 29th September 2024
*/

import React from 'react';
import passportImage from '../assets/Passport.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={passportImage} alt="Passport" />
      <p>
        My name is Chike Okeke, and I'm a passionate Information Security Specialist. I am interested in seeing how AI can be leveraged in keeping enterises safe.
      </p>
      <p>
        You can download my resume from the link below:
      </p>
      <a 
        href="/Chike Onyeka Resume (RMF).pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;


