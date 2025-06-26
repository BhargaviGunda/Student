// src/Pages/FacultyRegister.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function FacultyRegister() {
  const [formData, setFormData] = useState({
    facultyId: '',
    name: '',
    email: '',
    password: '',
    department: '',
    dateOfJoining: '',
    specialization: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register/faculty', formData);
      if (response.status === 201) {
        alert('Faculty registered successfully!');
        navigate('/dashboard/faculty');
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="register-split-container">
      <div className="register-left">
        <h1>Faculty Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="facultyId"
            placeholder="Faculty ID"
            value={formData.facultyId}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="register-right">
        <img src="/images/four.avif" alt="Faculty registration" />
      </div>
    </div>
  );
}

export default FacultyRegister;
