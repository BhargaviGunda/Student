import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Register.css'; // Import CSS for styling

function FacultyRegister() {
  const [formData, setFormData] = useState({
    facultyId: '',
    name: '',
    email: '',
    password: '',
    department: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., API call)
    console.log('Form submitted:', formData);

    // Redirect to Login.jsx after successful registration
    navigate('/'); // Adjust the route path as per your setup
  };

  return (
    <div className="register-container">
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FacultyRegister;
