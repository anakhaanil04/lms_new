import React from "react";
import { Link } from "react-router-dom";
import "./admindashboard.css";
import Logo from "./logo.png";
import backgroundImage from "./library-background.png";

const AdminDashboard = () => {
  return (
    <div 
      className="admin-dashboard" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="admin-header">
        <div className="header-left">
          <img src={Logo} alt="Skopick Logo" className="logo" />
          <span className="dashboard-title">Dashboard (Admin)</span>
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

      <main className="button-section">
        <Link to="/admin/viewbookdetails">
          <button className="dash-btn">View Book Details</button>
        </Link>
        <Link to="/admin/viewschool">
          <button className="dash-btn">View Schools</button>
        </Link>
        <Link to="/admin/addschool">
          <button className="dash-btn">Add Schools</button>
        </Link>
        <button className="dash-btn">List of Schools</button>
        <button className="dash-btn">Book Catalogue</button>
</main>

    </div>
  );
};

export default AdminDashboard;
