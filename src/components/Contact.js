/*
File Name: App.css
Student's Name: Chike Okeke
Student ID: 301496352
Date: 29th September 2024
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/');
  };

  return (
    <section>
      <h1>Contact Information</h1>
      <p>Phone: +1 (639) 999-0907</p>
      <p>Email: u2chyco@yahoo.com</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number: </label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message: </label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
