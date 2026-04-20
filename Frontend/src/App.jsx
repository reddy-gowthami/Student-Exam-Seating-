import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import CourseManagement from "./pages/admin/CourseManagement";

import ExamManagement from "./pages/admin/ExamManagement";


import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import HallManagement from "./pages/admin/HallManagement";
import InvigilatorAssignment from "./pages/admin/InvigilatorAssignment";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentDashboard from "./student/StudentDashboard";  


import SeatingAllocation from "./pages/admin/SeatingAllocation";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/exams" element={<ExamManagement />} />
        <Route path="/admin/halls" element={<HallManagement />} />
        <Route path="/admin/seating" element={<SeatingAllocation />} />   
<Route path="/admin/invigilators" element={<InvigilatorAssignment />} />

<Route path="/faculty" element={<FacultyDashboard />} />
<Route path="/student" element={<StudentDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
