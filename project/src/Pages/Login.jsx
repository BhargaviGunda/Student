// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function StudentLogin({ studentID, setStudentID, studentPassword, setStudentPassword, onLogin }) {
//   return (
//     <div className="login-form">
//       <h2>Student Login</h2>
//       <form onSubmit={onLogin}>
//         <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} required />
//         <input type="password" placeholder="Password" value={studentPassword} onChange={(e) => setStudentPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/register/student">Register</a></p>
//     </div>
//   );
// }

// function FacultyLogin({ facultyID, setFacultyID, facultyPassword, setFacultyPassword, onLogin }) {
//   return (
//     <div className="login-form">
//       <h2>Faculty Login</h2>
//       <form onSubmit={onLogin}>
//         <input type="text" placeholder="Faculty ID" value={facultyID} onChange={(e) => setFacultyID(e.target.value)} required />
//         <input type="password" placeholder="Password" value={facultyPassword} onChange={(e) => setFacultyPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/register/faculty">Register</a></p>
//     </div>
//   );
// }

// function Login() {
//   const [userType, setUserType] = useState('student');
//   const [studentID, setStudentID] = useState('');
//   const [studentPassword, setStudentPassword] = useState('');
//   const [facultyID, setFacultyID] = useState('');
//   const [facultyPassword, setFacultyPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const loginData = {
//         userType,
//         id: userType === 'student' ? studentID : facultyID,
//         password: userType === 'student' ? studentPassword : facultyPassword,
//       };

//       const response = await axios.post('http://localhost:5000/login', loginData);
//       if (response.status === 200) {
//         navigate(userType === 'student' ? '/dashboard/profile/student' : '/dashboard/profile/faculty');
//       }
//     } catch (error) {
//       alert(error.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div className="login-split-container">
//       <div className="login-left">
//         <h1>Login</h1>
//         <div className="login-options">
//           <button onClick={() => setUserType('student')} className={userType === 'student' ? 'active' : ''}>
//             Student Login
//           </button>
//           <button onClick={() => setUserType('faculty')} className={userType === 'faculty' ? 'active' : ''}>
//             Faculty Login
//           </button>
//         </div>
//         {userType === 'student' ? (
//           <StudentLogin
//             studentID={studentID}
//             setStudentID={setStudentID}
//             studentPassword={studentPassword}
//             setStudentPassword={setStudentPassword}
//             onLogin={handleLogin}
//           />
//         ) : (
//           <FacultyLogin
//             facultyID={facultyID}
//             setFacultyID={setFacultyID}
//             facultyPassword={facultyPassword}
//             setFacultyPassword={setFacultyPassword}
//             onLogin={handleLogin}
//           />
//         )}
//       </div>
//       <div className="login-right">
//         <img src="/images/three.jpg" alt="Login visual" />
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function StudentLogin({ studentID, setStudentID, studentPassword, setStudentPassword, onLogin }) {
  return (
    <div className="login-form">
      <h2>Student Login</h2>
      <form onSubmit={onLogin}>
        <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} required />
        <input type="password" placeholder="Password" value={studentPassword} onChange={(e) => setStudentPassword(e.target.value)} required />
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
        <input type="text" placeholder="Faculty ID" value={facultyID} onChange={(e) => setFacultyID(e.target.value)} required />
        <input type="password" placeholder="Password" value={facultyPassword} onChange={(e) => setFacultyPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register/faculty">Register</a></p>
    </div>
  );
}

function Login() {
  const [userType, setUserType] = useState('student');
  const [studentID, setStudentID] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [facultyID, setFacultyID] = useState('');
  const [facultyPassword, setFacultyPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        userType,
        id: userType === 'student' ? studentID : facultyID,
        password: userType === 'student' ? studentPassword : facultyPassword,
      };

      const response = await axios.post('http://localhost:5000/login', loginData);

      if (response.status === 200) {
        localStorage.setItem('userType', userType);
        localStorage.setItem('loggedInId', loginData.id);

        navigate(userType === 'student' ? '/dashboard/profile/student' : '/dashboard/profile/faculty');
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-split-container">
      <div className="login-left">
        <h1>Login</h1>
        <div className="login-options">
          <button onClick={() => setUserType('student')} className={userType === 'student' ? 'active' : ''}>
            Student Login
          </button>
          <button onClick={() => setUserType('faculty')} className={userType === 'faculty' ? 'active' : ''}>
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
      <div className="login-right">
        <img src="/images/three.jpg" alt="Login visual" />
      </div>
    </div>
  );
}

export default Login;
