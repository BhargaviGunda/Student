import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './students.css'; 

function Students() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', course: '' });

  useEffect(() => {
    // Fetch the initial list of students from the backend
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    // Add the new student to the list
    setStudents([...students, { id: students.length + 1, ...newStudent }]);

    // Optionally, you can send the new student data to the backend
    fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
    .then(response => response.json())
    .then(data => console.log('Student added:', data))
    .catch(error => console.error('Error:', error));

    // Clear the input fields after adding the student
    setNewStudent({ name: '', course: '' });
  };

  return (
    <div className="container">
      <h2>Students List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Link to={`/dashboard/students/${student.id}/${student.name}`}>{student.name}</Link>
          </li>
        ))}
      </ul>

      <h3>Add New Student</h3>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={newStudent.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={newStudent.course}
        onChange={handleInputChange}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default Students;
