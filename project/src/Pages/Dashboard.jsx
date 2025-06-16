import React from 'react';
import './Dashboard.css'; // Make sure you have the correct CSS styling

function Dashboard() {
  const stats = {
    students: 1200,
    courses: 15,
    grades: 5,
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2></h2>
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/dashboard/students">Students</a></li>
          <li><a href="/dashboard/courses">Courses</a></li>
          <li><a href="/dashboard/grades">Grades</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>
      <div className="content">
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
