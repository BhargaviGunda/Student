import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentProfile.css';

function StudentProfile() {
  const [student, setStudent] = useState(null);
  const studentId = localStorage.getItem('loggedInId');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/student/${studentId}`);
        setStudent(res.data);
      } catch (err) {
        console.error('Error fetching student data:', err);
      }
    };
    fetchStudent();
  }, [studentId]);

  if (!student) return <p>Loading student data...</p>;

  return (
    <div className="profile-split-container">
      <div className="profile-left">
        <div className="profile-card">
          <img src="/images/icon1.jpg" alt="User" className="profile-image" />
          <h2>Welcome, {student.studentId}</h2>
          <p><strong>Student ID:</strong> {student.studentId}</p>
          <p><strong>Full Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      </div>
      <div className="profile-right">
        <img src="/images/icon1.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default StudentProfile;
