// import React from 'react';
// import './Dashboard.css'; // Make sure you have the correct CSS styling

// function Dashboard() {
//   const stats = {
//     students: 1200,
//     courses: 15,
//     grades: 5,
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <h2>Sidebar</h2>
//         <ul>
//           <li><a href="/dashboard">Home</a></li>
//           <li><a href="/dashboard/students">Students</a></li>
//           <li><a href="/dashboard/courses">Courses</a></li>
//           <li><a href="/dashboard/grades">Grades</a></li>
//           <li><a href="/profile">Profile</a></li>
//         </ul>
//       </div>
//       <div className="content">
//         <h1>Dashboard</h1>
//         <div className="stats-container">
//           <div className="stat-item">
//             <h2>Students</h2>
//             <p>{stats.students}</p>
//           </div>
//           <div className="stat-item">
//             <h2>Courses</h2>
//             <p>{stats.courses}</p>
//           </div>
//           <div className="stat-item">
//             <h2>Grades</h2>
//             <p>{stats.grades}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const stats = {
    students: 1200,
    courses: 15,
    grades: 5,
  };

  const role = localStorage.getItem('role'); // "student" or "faculty"

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li><Link to="/dashboard">Home</Link></li>

          {/* 👇 Only show this if user is NOT a student */}
          {role !== 'student' && (
            <li><Link to="/dashboard/students">Students</Link></li>
          )}

          <li><Link to="/dashboard/courses">Courses</Link></li>
          <li><Link to="/dashboard/grades">Grades</Link></li>

          {/* Profile based on role */}
          {role === 'student' && (
            <li><Link to="/dashboard/profile/student">Student Profile</Link></li>
          )}
          {role === 'faculty' && (
            <li><Link to="/dashboard/profile/faculty">Faculty Profile</Link></li>
          )}
        </ul>
      </div>

      <div className="content">
        <h1>Dashboard</h1>
        <div className="stats-container">
          <div className="stat-item">
            <h2>Students</h2>
            <p>{stats.students}</p>
          </div>
          <div className="stat-item">
            <h2>Courses</h2>
            <p>{stats.courses}</p>
          </div>
          <div className="stat-item">
            <h2>Grades</h2>
            <p>{stats.grades}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

