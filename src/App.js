import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import AdminDashboard from "./pages/admindashboard.jsx";
import UserDashboard from "./pages/userdashboard.jsx";
import UserLogin from "./pages/userlogin.jsx";
import ViewBookDetails from "./pages/viewbookdetails.jsx";
import ViewSchool from "./pages/viewschool.jsx";
import AddSchool from "./pages/addschool.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/viewbookdetails" element={<ViewBookDetails />} />
        <Route path="/admin/viewschool" element={<ViewSchool />} />
        <Route path="/admin/addschool" element={<AddSchool />} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
