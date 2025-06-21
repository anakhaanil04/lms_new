// userdashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./userdashboard.css";
import Logo from "./logo.png";

function UserDashboard() {
  return (
    <div className="user-dashboard">
      {/* Header */}
      <header className="user-header">
        <div className="header-left">
          <img src={Logo} alt="Skopick Logo" className="logo" />
          <span className="dashboard-title">Main Dashboard</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Books</a>
          <a href="#">Papers</a>
          <a href="#">Online</a>
          <a href="#">About</a>
          <a href="#">Help</a>
        </nav>
      </header>

      {/* Buttons Section */}
      <main className="button-section">
        <button className="dash-btn">BOOK DETAILS</button>
        <button className="dash-btn">STUDENT DETAILS</button>
        <button className="dash-btn">ADD STUDENT</button>
        <button className="dash-btn">BATCH</button>
      </main>
    </div>
  );
}

export default UserDashboard;
