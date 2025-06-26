import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentProfile.css'; // Reusing the same styles

function FacultyProfile() {
  const [faculty, setFaculty] = useState(null);
  const facultyId = localStorage.getItem('loggedInId');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/faculty/${facultyId}`);
        setFaculty(res.data);
      } catch (err) {
        console.error('Error fetching faculty data:', err);
      }
    };
    fetchFaculty();
  }, [facultyId]);

  if (!faculty) return <p>Loading faculty data...</p>;

  return (
    <div className="profile-split-container">
      <div className="profile-left">
        <div className="profile-card">
          <img src="/images/icon1.jpg" alt="User" className="profile-image" />
          <h2>Welcome, {faculty.facultyId}</h2>
          <p><strong>Faculty ID:</strong> {faculty.facultyId}</p>
          <p><strong>Full Name:</strong> {faculty.name}</p>
          <p><strong>Email:</strong> {faculty.email}</p>
          <p><strong>Department:</strong> {faculty.department}</p>
          <p><strong>Specialization:</strong> {faculty.specialization}</p>
        </div>
      </div>
      <div className="profile-right">
        <img src="/images/icon1.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default FacultyProfile;
