import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import './BranchSubjects.jsx';
const Course = () => {
  const navigate = useNavigate();
  const courses = [
    { name: "Information Technology", description: "Learn about IT basics and software." },
    { name: "Computer Science Engineering", description: "CSE fundamentals and applications." },
    { name: "Artificial Intelligence & Machine Learning", description: "AI and ML principles." },
    { name: "Electronics and Communication Engineering", description: "ECE concepts and projects." },
    { name: "Artificial Intelligence & Data Science", description: "AI and Data insights." }
  ];

  const handleCourseClick = (courseName) => {
    // URL encode the course name to handle spaces or special characters
    navigate(`/dashboard/branch/${encodeURIComponent(courseName)}`);
  };


  return (
    <div className="container">
      <h2>Available Courses</h2>
      <div className="course-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card" onClick={() => handleCourseClick(course.name)}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
