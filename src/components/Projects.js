/*
File Name: App.css
Student's Name: Chike Okeke
Student ID: 301496352
Date: 29th September 2024
*/

import React from 'react';
import project1Img from '../assets/images/project1.jpg'; 
import project2Img from '../assets/images/project2.jpg'; 
import project3Img from '../assets/images/project3.jpg'; 

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div>
        <h3>Project 1: AI Chatbot</h3>
        <img src={project1Img} alt="AI Chatbot Project" style={{ width: '300px' }} />
        <p>Developed an AI-powered chatbot using Python and Natural Language Processing.</p>
      </div>
      <div>
        <h3>Project 2: Web Application</h3>
        <img src={project2Img} alt="Web Application Project" style={{ width: '300px' }} />
        <p>Created a responsive web application using React and Node.js.</p>
      </div>
      <div>
        <h3>Project 3: Security Assessment</h3>
        <img src={project3Img} alt="Security Assessment Project" style={{ width: '300px' }} />
        <p>Conducted a security audit and fixed vulnerabilities in a web application.</p>
      </div>
    </section>
  );
}

export default Projects;
