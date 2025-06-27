import React from 'react';
import './userreturnbook.css';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function ReturnBook() {
  const navigate = useNavigate();

  return (
    <div className="returnbook-page">
      {/* Top logo & title */}
      <div className="returnbook-header">
        <img src={Logo} alt="Logo" className="returnbook-logo" />
        <div className="returnbook-title">Return Book</div>
      </div>

      <div className="returnbook-container">
        <form className="returnbook-form">
          <label>Student Name:</label>
          <input type="text" />

          <label>Book name:</label>
          <input type="text" />

          <label>Date Returned:</label>
          <input type="date" />

          <label>Email:</label>
          <input type="email" />

          <label>Review:</label>
          <textarea rows="4" />

          <div className="form-buttons">
            <button type="submit" className="ok-btn">OK</button>
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>BACK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReturnBook;
