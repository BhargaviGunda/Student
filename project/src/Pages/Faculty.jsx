// // src/Pages/Faculty.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 import './faculty.css';

// function Faculty() {
//   const [faculty, setFaculty] = useState([]);
//   const [filteredFaculty, setFilteredFaculty] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState('');

//   useEffect(() => {
//     const fetchFaculty = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/faculty');
//         setFaculty(response.data);
//         setFilteredFaculty(response.data);
//       } catch (error) {
//         console.error('Error fetching faculty:', error);
//       }
//     };

//     fetchFaculty();
//   }, []);

//   const handleFilterChange = (e) => {
//     const department = e.target.value;
//     setSelectedDepartment(department);

//     if (department === '') {
//       setFilteredFaculty(faculty);
//     } else {
//       const filtered = faculty.filter(member => member.department === department);
//       setFilteredFaculty(filtered);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Faculty List</h2>

//       <div className="mb-4 text-center">
//         <label htmlFor="department" className="mr-2">Filter by Department:</label>
//         <select
//           id="department"
//           className="form-select"
//           value={selectedDepartment}
//           onChange={handleFilterChange}
//         >
//           <option value="">All Departments</option>
//           <option value="IT">IT</option>
//           <option value="CSE">CSE</option>
//           <option value="AI-MAL">AI-MAL</option>
//           <option value="AI-DS">AI-DS</option>
//           <option value="CYBER">CYBER</option>
//         </select>
//       </div>

//       <div className="row">
//         {filteredFaculty.map((member, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{member.name}</h5>
//                 <p className="card-text"><strong>Date of Joining:</strong> {member.dateOfJoining}</p>
//                 <p className="card-text"><strong>Specialization:</strong> {member.specialization}</p>
//                 <p className="card-text"><strong>Branch:</strong> {member.branch}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Faculty;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './faculty.css'; // Optional for extra custom styling

function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [selectedDept, setSelectedDept] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/faculty');
      setFaculty(res.data);
    };
    fetchData();
  }, []);

  const filtered = selectedDept
    ? faculty.filter(f => f.department === selectedDept)
    : faculty;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Faculty List</h2>

      <div className="mb-4 d-flex justify-content-center">
        <label htmlFor="department" className="me-2 fw-bold">Filter by Department:</label>
        <select
          id="department"
          className="form-select w-auto"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="">All</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="AI-MAL">AI-MAL</option>
        </select>
      </div>

      <div className="row">
        {filtered.map((f, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">{f.name}</h5>
                <p className="card-text"><strong>Department:</strong> {f.department}</p>
                <p className="card-text"><strong>Specialization:</strong> {f.specialization}</p>
                <p className="card-text"><strong>DOJ:</strong> {new Date(f.dateOfJoining).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
