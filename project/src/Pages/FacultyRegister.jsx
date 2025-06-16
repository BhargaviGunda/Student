import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Register.css'; 

function FacultyRegister() {
  const [formData, setFormData] = useState({
    facultyId: '',
    name: '',
    email: '',
    password: '',
    department: '',
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
      console.log(response.data);
      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {
      alert(error.response.data.error || 'Registration failed');
    }
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