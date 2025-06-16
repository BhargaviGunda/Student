// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './Pages/Navbar';
// import Dashboard from './Pages/Dashboard';
// import StudentProfile from './Pages/StudentProfile';
// import FacultyProfile from './Pages/FacultyProfile';
// import Course from './Pages/Course';
// import Grades from './Pages/Grades';
// import Faculty from './Pages/Faculty';
// import Students from './Pages/Students';
// import StudentDetails from './Pages/StudentDetails';
// import Logout from './Pages/Logout';
// import StudentRegister from './Pages/StudentRegister';
// import FacultyRegister from './Pages/FacultyRegister';
// import Login from './Pages/Login';
// import BranchSubjects from './Pages/BranchSubjects';
// import './global.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/dashboard',
//     element: <Navbar />, // Navbar wraps these child components
//     children: [
//       { path: '', element: <Dashboard /> }, // Default child route for /dashboard
//       { path: 'profile/student', element: <StudentProfile /> }, // Relative path
//       { path: 'profile/faculty', element: <FacultyProfile /> }, // Relative path
//       { path: 'students/:id/:name', element: <StudentDetails /> },
//       { path: 'students', element: <Students /> },
//       { path: 'courses', element: <Course /> },
//       { path: 'grades', element: <Grades /> },
//       { path: 'faculty', element: <Faculty /> },
//       { path: 'logout', element: <Logout /> },
//       {path:'branch/:branchName' ,element:<BranchSubjects />}

//     ],
//   },
//   { path: '/register/student', element: <StudentRegister /> },
//   { path: '/register/faculty', element: <FacultyRegister /> },
// ]);

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Dashboard from './Pages/Dashboard';
import StudentProfile from './Pages/StudentProfile';
import FacultyProfile from './Pages/FacultyProfile';
import Course from './Pages/Course';
import Grades from './Pages/Grades';
import Faculty from './Pages/Faculty';
import Students from './Pages/Students';
import StudentDetails from './Pages/StudentDetails';
import Logout from './Pages/Logout';
import StudentRegister from './Pages/StudentRegister';
import FacultyRegister from './Pages/FacultyRegister';
import Login from './Pages/Login';
import BranchSubjects from './Pages/BranchSubjects';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Navbar />, // Navbar wraps these child components
    children: [
      { path: '', element: <Dashboard /> }, // Default child route for /dashboard
      { path: 'profile/student', element: <StudentProfile /> },
      { path: 'profile/faculty', element: <FacultyProfile /> },
      { path: 'students/:id/:name', element: <StudentDetails /> },
      { path: 'students', element: <Students /> },
      { path: 'courses', element: <Course /> },
      { path: 'grades', element: <Grades /> },
      { path: 'faculty', element: <Faculty /> },
      { path: 'logout', element: <Logout /> },
      { path: 'branch/:branchName', element: <BranchSubjects /> },
    ],
  },
  { path: '/register/student', element: <StudentRegister /> },
  { path: '/register/faculty', element: <FacultyRegister /> },

  // Handle undefined routes with a fallback route
  {
    path: '*', // Catch-all for any undefined route
    element: <div>Page Not Found</div>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;