import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'student', // default value
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the endpoint based on userType
    const endpoint = formData.userType === 'student' ? '/register/student' : '/register/faculty';

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Check if the response is successful
      if (!response.ok) {
        const errorMessage = await response.text();
        alert(errorMessage); // Display the server's error message
        return;
      }

      // Success: Registration successful
      alert('Registration successful! Please log in.');
      navigate('/'); // Redirect to the login page
    } catch (error) {
      console.error('Registration error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email field */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password field */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* User Type selection */}
        <label htmlFor="userType">Register as:</label>
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
