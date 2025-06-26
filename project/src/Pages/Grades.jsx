import React from 'react';
import './Grades.css';

function Grades() {
  const grades = [
    { range: '90 - 100', grade: 'A+', description: 'Outstanding Performance' },
    { range: '80 - 89', grade: 'A', description: 'Excellent' },
    { range: '70 - 79', grade: 'B+', description: 'Very Good' },
    { range: '60 - 69', grade: 'B', description: 'Good' },
    { range: '50 - 59', grade: 'C', description: 'Average' },
    { range: '35 - 49', grade: 'D', description: 'Needs Improvement' },
    { range: 'Below 35', grade: 'F', description: 'Fail' },
  ];

  return (
    <div className="grades-container">
      <h1 className="grades-title">Grading Criteria</h1>
      <div className="grades-table">
        <div className="grades-header">
          <span>Score Range</span>
          <span>Grade</span>
          <span>Description</span>
        </div>
        {grades.map((item, index) => (
          <div key={index} className="grades-row">
            <span>{item.range}</span>
            <span className={`grade-tag grade-${item.grade}`}>{item.grade}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grades;
