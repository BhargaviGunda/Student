// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './Register.css'; // Import CSS for styling

// function FacultyRegister() {
//   const [formData, setFormData] = useState({
//     facultyId: '',
//     name: '',
//     email: '',
//     password: '',
//     department: '',
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
//     // Add form submission logic (e.g., API call)
//     console.log('Form submitted:', formData);

//     // Redirect to Login.jsx after successful registration
//     navigate('/'); // Adjust the route path as per your setup
//   };

//   return (
//     <div className="register-container">
//       <h1>Faculty Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="facultyId"
//           placeholder="Faculty ID"
//           value={formData.facultyId}
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
//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={formData.department}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default FacultyRegister;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './Register.css'; // Import CSS for styling

// function FacultyRegister() {
//   const [formData, setFormData] = useState({
//     facultyId: '',
//     name: '',
//     email: '',
//     password: '',
//     department: '',
//   });

//   const navigate = useNavigate(); // Initialize navigate

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/register/faculty', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Faculty registered successfully! Please log in.');
//         navigate('/'); // Redirect to the login page
//       } else {
//         const errorMessage = await response.text();
//         alert(`Error: ${errorMessage}`);
//       }
//     } catch (error) {
//       console.error('Error registering faculty:', error);
//       alert('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <h1>Faculty Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="facultyId"
//           placeholder="Faculty ID"
//           value={formData.facultyId}
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
//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={formData.department}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default FacultyRegister;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    // Prepare payload to match unified "users" schema
    const payload = {
      user_id: formData.facultyId,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'faculty', // 👈 Required for role-based access
      department: formData.department
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('Faculty registered successfully! Please log in.');
        navigate('/');
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error registering faculty:', error);
      alert('Server error. Please try again later.');
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
