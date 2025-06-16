import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function StudentDetails() {
  const { studentid } = useParams();
  const { studentname } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch(`/api/students/${studentid}`)
      .then(response => response.json())
      .then(data => setStudent(data[0]));
  }, [studentid]);

  return (
    <div className="container">
      <h2>Student Details</h2>
      <p>ID: {student.id}</p>
      <p>Name: {studentname}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentDetails;
