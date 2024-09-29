/*
File Name: App.css
Student's Name: Chike Okeke
Student ID: 301496352
Date: 29th September 2024
*/

import React from 'react';
import webDevServiceImage from '../assets/images/web-dev-service.jpg'; 
import securityServiceImage from '../assets/images/security-service.jpg'; 

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <div>
        <img src={webDevServiceImage} alt="Web Development Service" />
        <p>Web Development</p>
      </div>
      <div>
        <img src={securityServiceImage} alt="Security Service" />
        <p>Security Services</p>
      </div>
      {}
    </div>
  );
};

export default Services;
