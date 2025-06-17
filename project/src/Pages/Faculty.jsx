// src/Pages/Faculty.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './faculty.css';

function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/faculty');
        setFaculty(response.data);
        setFilteredFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, []);

  const handleFilterChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);

    if (department === '') {
      setFilteredFaculty(faculty);
    } else {
      const filtered = faculty.filter(member => member.department === department);
      setFilteredFaculty(filtered);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Faculty List</h2>

      <div className="mb-4 text-center">
        <label htmlFor="department" className="mr-2">Filter by Department:</label>
        <select
          id="department"
          className="form-select"
          value={selectedDepartment}
          onChange={handleFilterChange}
        >
          <option value="">All Departments</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="AI-MAL">AI-MAL</option>
          <option value="AI-DS">AI-DS</option>
          <option value="CYBER">CYBER</option>
        </select>
      </div>

      <div className="row">
        {filteredFaculty.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text"><strong>Date of Joining:</strong> {member.dateOfJoining}</p>
                <p className="card-text"><strong>Specialization:</strong> {member.specialization}</p>
                <p className="card-text"><strong>Branch:</strong> {member.branch}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
