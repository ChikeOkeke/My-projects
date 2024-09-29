/*
File Name: App.css
Student's Name: Chike Okeke
Student ID: 301496352
Date: 29th September 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to My Portfolio!</h1>
      <p>Explore my projects, learn about my services, and get in touch!</p>
      <p>Mission Statement: Empowering businesses and individuals through technology.</p>
      <Link to="/about"><button>Learn More About Me</button></Link>
    </section>
  );
}

export default Home;
