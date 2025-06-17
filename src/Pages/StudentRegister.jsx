// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import './Register.css';
// import './Login';
// function StudentRegister() {
//   const [formData, setFormData] = useState({
//     studentId: '',
//     name: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Initialize navigate

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit form data to server or backend here

//     // Redirect to login page after successful registration
//     navigate('/'); // Adjust '/login' to the route for your login page
//   };

//   return (
//     <div className="register-container">
//       <h1>Student Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="studentId"
//           placeholder="Student ID"
//           value={formData.studentId}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default StudentRegister;
// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function StudentRegister() {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload for server including the role
    const payload = {
      user_id: formData.studentId,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'student' // 👈 Ensure role is included
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Student registered successfully! Please log in.');
        navigate('/'); // Redirect to login page
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error registering student:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="register-container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentRegister;
