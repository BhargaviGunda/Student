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
    branch: '',
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

    const payload = {
      user_id: formData.facultyId,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'faculty',
      department: formData.department,
      dateOfJoining: formData.dateOfJoining,
      specialization: formData.specialization,
      branch: formData.branch,
    };

    try {
      const response = await axios.post('http://localhost:5000/register', payload);
      if (response.status === 201 || response.status === 200) {
        alert('Faculty registered successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h1>Faculty Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="facultyId" placeholder="Faculty ID" value={formData.facultyId} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <input type="date" name="dateOfJoining" placeholder="Date of Joining" value={formData.dateOfJoining} onChange={handleChange} required />
        <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required />
        <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FacultyRegister;
