import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './faculty.css';

function Faculty() {
    const [faculty, setFaculty] = useState([
        { id: 1, name: "Dr. John Doe", department: "CSE", dateOfJoining: "2010-08-15", specialization: "AI and Machine Learning", branch: "CS" },
        { id: 2, name: "Dr. Jane Smith", department: "AI-MAL", dateOfJoining: "2015-03-12", specialization: "Power Systems", branch: "EE" },
        { id: 3, name: "Dr. Emily Clark", department: "IT", dateOfJoining: "2018-06-21", specialization: "Robotics", branch: "ME" },
        { id: 4, name: "Dr. William Lee", department: "CYBER", dateOfJoining: "2012-11-30", specialization: "Cybersecurity", branch: "CS" }
    ]);
    
    const [filteredFaculty, setFilteredFaculty] = useState(faculty);
    const [selectedDepartment, setSelectedDepartment] = useState('');

    // Handle department filter change
    const handleFilterChange = (event) => {
        const department = event.target.value;
        setSelectedDepartment(department);

        if (department === '') {
            setFilteredFaculty(faculty); // Show all faculty if no department is selected
        } else {
            const filtered = faculty.filter(member => member.department === department);
            setFilteredFaculty(filtered); // Filter faculty based on department
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Faculty List</h2>

            {/* Filter Dropdown */}
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

            {/* Faculty Cards */}
            <div className="row">
                {filteredFaculty.map((member, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text"><strong>Date of Joining:</strong> {member.dateOfJoining}</p>
                                <p className="card-text"><strong>Specialization:</strong> {member.specialization}</p>
                                <p className="card-text"><strong>Branch:</strong> {member.branch}</p>
                                {/* <Link to={/faculty/${member.id}/${member.name}} className="btn btn-primary">
                                    View Details
                                </Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faculty;