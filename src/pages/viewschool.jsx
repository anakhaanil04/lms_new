import React from "react";
import './viewschool.css';
import Logo from "./logo.png";

function ViewSchool() {
  return (
    <div className="view-school-page">
      {/* Logo and Heading placed above the box */}
      <header className="school-header">
        {/* If logo is in src/public, src should be "/logo.png"*/}
        <img src={Logo} alt="Logo" className="logo" />
        <h2>View School</h2>
      </header>

      {/* Box with form fields */}
      <div className="school-form">
        <label>School Name:</label>
        <input type="text" />

        <label>Address:</label>
        <input type="text" />

        <label>No. of registered students:</label>
        <input type="text" />

        <label>No. of books borrowed:</label>
        <input type="text" />

        <div className="button-group">
          <button>View All Books</button>
          <button>OK</button>
          <button onClick={() => window.history.back()}>
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewSchool;
