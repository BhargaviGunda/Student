import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Login.css'; 

function Login() {
  const [userType, setUserType] = useState('student'); // Default to 'student'
  const [studentID, setStudentID] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [facultyID, setFacultyID] = useState('');
  const [facultyPassword, setFacultyPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (userType === 'student') {
        const response = await axios.post('http://localhost:5000/login', {
          userType: 'student',
          id: studentID,
          password: studentPassword,
        });
        console.log(response.data);
        if (response.status === 200) {
          navigate('/dashboard/profile/student'); // Redirect to student profile after login
        }
      } else if (userType === 'faculty') {
        const response = await axios.post('http://localhost:5000/login', {
          userType: 'faculty',
          id: facultyID,
          password: facultyPassword,
        });
        console.log(response.data);
        if (response.status === 200) {
          navigate('/dashboard/profile/faculty'); // Redirect to faculty profile after login
        }
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-options">
        <button 
          onClick={() => setUserType('student')} 
          className={userType === 'student' ? 'active' : ''}
        >
          Student Login
        </button>
        <button 
          onClick={() => setUserType('faculty')} 
          className={userType === 'faculty' ? 'active' : ''}
        >
          Faculty Login
        </button>
      </div>
      {userType === 'student' ? (
        <StudentLogin 
          studentID={studentID} 
          setStudentID={setStudentID} 
          studentPassword={studentPassword} 
          setStudentPassword={setStudentPassword} 
          onLogin={handleLogin} 
        />
      ) : (
        <FacultyLogin 
          facultyID={facultyID} 
          setFacultyID={setFacultyID} 
          facultyPassword={facultyPassword} 
          setFacultyPassword={setFacultyPassword} 
          onLogin={handleLogin} 
        />
      )}
    </div>
  );
}

function StudentLogin({ studentID, setStudentID, studentPassword, setStudentPassword, onLogin }) {
  return (
    <div className="login-form">
      <h2>Student Login</h2>
      <form onSubmit={onLogin}>
        <input 
          type="text" 
          placeholder="Student ID" 
          value={studentID} 
          onChange={(e) => setStudentID(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={studentPassword} 
          onChange={(e) => setStudentPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register/student">Register</a></p>
    </div>
  );
}

function FacultyLogin({ facultyID, setFacultyID, facultyPassword, setFacultyPassword, onLogin }) {
  return (
    <div className="login-form">
      <h2>Faculty Login</h2>
      <form onSubmit={onLogin}>
        <input 
          type="text" 
          placeholder="Faculty ID" 
          value={facultyID} 
          onChange={(e) => setFacultyID(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={facultyPassword} 
          onChange={(e) => setFacultyPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register/faculty">Register</a></p>
    </div>
  );
}

export default Login;