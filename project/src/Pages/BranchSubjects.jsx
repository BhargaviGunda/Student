import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchSubjects.css';

const subjectsData = {
  "Information Technology": [
    { name: "Web Development", youtube: "https://www.youtube.com/watch?v=ZxKM3DCV2kE" },
    { name: "Database Management", youtube: "https://www.youtube.com/watch?v=kEMr7bF5RqQ" }
  ],
  "Computer Science Engineering": [
    { name: "Operating Systems", youtube: "https://www.youtube.com/watch?v=26QPDBe-NB8" },
    { name: "Data Structures", youtube: "https://www.youtube.com/watch?v=8hly31xKli0" }
  ],
  "Artificial Intelligence & Machine Learning": [
    { name: "Neural Networks", youtube: "https://www.youtube.com/watch?v=aircAruvnKk" },
    { name: "Supervised Learning", youtube: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" }
  ],
  "Electronics and Communication Engineering": [
    { name: "Analog Circuits", youtube: "https://www.youtube.com/watch?v=_fN8cZLBPYc" },
    { name: "Digital Signal Processing", youtube: "https://www.youtube.com/watch?v=zjcG-C4jLXY" }
  ],
  "Artificial Intelligence & Data Science": [
    { name: "Big Data Analytics", youtube: "https://www.youtube.com/watch?v=9ElQcdhkEjs" },
    { name: "AI Ethics", youtube: "https://www.youtube.com/watch?v=RqM4EL5XMgY" }
  ]
};

const BranchSubjects = () => {
  const { branchName } = useParams();
  const subjects = subjectsData[branchName] || [];

  return (
    <div className="container">
      <h2>{branchName} Subjects</h2>
      <div className="course-container">
        {subjects.map((subject, index) => (
          <div key={index} className="course-card">
            <h3>{subject.name}</h3>
            <a href={subject.youtube} target="_blank" rel="noopener noreferrer">
              Watch Tutorial
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchSubjects;
