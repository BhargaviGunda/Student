import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './navbar.css'; // Ensure to add styles for active links and layout

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active-link">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/students" activeClassName="active-link">
              Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/courses" activeClassName="active-link">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/grades" activeClassName="active-link">
              Grades
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/faculty" activeClassName="active-link">
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/logout" activeClassName="active-link">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Add the Outlet to render child routes */}
    </div>
  );
}

export default Navbar;
