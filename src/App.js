import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import ProtectedRoute from './Pages/ProtectedRoute';
import Unauthorized from './Pages/Unauthorized';

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
      { path: 'profile/student', element: <StudentProfile /> }, // Relative path
      { path: 'profile/faculty', element: <FacultyProfile /> }, // Relative path
       {
        path: 'students',
        element: (
          <ProtectedRoute allowedRole="faculty">
            <Students />
          </ProtectedRoute>
        ),
      },
       // ✅ Student details can also be protected if needed
      {
        path: 'students/:id/:name',
        element: (
          <ProtectedRoute allowedRole="faculty">
            <StudentDetails />
          </ProtectedRoute>
        ),
      },
      { path: 'students/:id/:name', element: <StudentDetails /> },
      { path: 'students', element: <Students /> },
      { path: 'courses', element: <Course /> },
      { path: 'grades', element: <Grades /> },
      { path: 'faculty', element: <Faculty /> },
      { path: 'logout', element: <Logout /> },
      
    ],
  },
  { path: '/register/student', element: <StudentRegister /> },
  { path: '/register/faculty', element: <FacultyRegister /> },
    { path: '/unauthorized', element: <Unauthorized /> },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
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
// import './global.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/dashboard',
//     element: <Navbar />,
//     children: [
//       { path: '', element: <Dashboard /> },
//       { path: 'profile/student', element: <StudentProfile /> },
//       { path: 'profile/faculty', element: <FacultyProfile /> },
//       { path: 'students/:id/:name', element: <StudentDetails /> },
//       { path: 'students', element: <Students /> },
//       { path: 'courses', element: <Course /> },
//       { path: 'grades', element: <Grades /> },
//       { path: 'faculty', element: <Faculty /> },
//       { path: 'logout', element: <Logout /> },
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
