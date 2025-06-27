import React from "react";
import "./userstudentdetails.css";
import Logo from "./logo.png";

const UserStudentDetails = () => {
  return (
    <div className="user-student-container">
      <header className="student-header">
        <div className="logo-title">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="title">Student Details</h2>
        </div>
        <nav className="student-nav">
          <ul>
            <li>Home</li>
            <li>Books</li>
            <li>Papers</li>
            <li>Online</li>
            <li>About</li>
            <li>Help</li>
          </ul>
        </nav>
      </header>

      <div className="student-buttons">
        <button>Update Student Details</button>
        <button>Borrow History</button>
        <button>Student Info</button>
        <button>Current Status</button>
      </div>
    </div>
  );
};

export default UserStudentDetails;
