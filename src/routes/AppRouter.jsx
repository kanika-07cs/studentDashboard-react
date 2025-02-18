import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import StudentDashboard from "../pages/StudentDashboard.jsx";
import FacultyDashboard from "../pages/FacultyDashboard.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
