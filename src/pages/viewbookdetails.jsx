import React from 'react';
import './viewbookdetails.css';
import Logo from "./logo.png";

function ViewBookDetails() {
  return (
    <div className="book-details-page">
      <header className="book-header">
        <img src={Logo} alt="Logo" className="logo" />
        <h2>View Book Details</h2>
      </header>

      <div className="book-form">
        <label>Book Name:</label>
        <input type="text" />

        <label>Current Status:</label>
        <input type="text" />

        <label>Schools that have this book?</label>
        <input type="text" />

        <div className="button-group">
          <button className="ok-btn">OK</button>
          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewBookDetails;
