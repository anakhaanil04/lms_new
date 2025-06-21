import React from "react";
import './addschool.css';
import Logo from "./logo.png";
function AddSchool() {
  return (
    <div className="add-school-page">
      {/* Logo and Heading placed above the box */}
      <header className="add-school-header">
        {/* If logo is in src/public, src should be "/logo.png"*/}
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2>Add School</h2>
      </header>

      {/* Box with form fields */}
      <div className="add-school-form">
        <label>School Name:</label>
        <input type="text" />

        <label>No of Students:</label>
        <input type="text" />

        <label>No. of Donated Books:</label>
        <input type="text" />

        <label>Address:</label>
        <input type="text" />

        <label>Pin Code:</label>
        <input type="text" />

        <div className="button-group">
          <button>Add School</button>
          <button onClick={() => window.history.back()}>
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSchool;
