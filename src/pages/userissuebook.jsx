import React from 'react';
import './userissuebook.css';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function UserIssueBook() {
  const navigate = useNavigate();

  return (
    <div className="userissuebook-page">
      <div className="userissuebook-header">
        <img src={Logo} alt="Logo" className="userissuebook-logo" />
        <div className="userissuebook-title">Issue Book</div>
      </div>

      <div className="userissuebook-container">
        <form className="userissuebook-form">
          <label>Student Name:</label>
          <input type="text" />

          <label>Book Name:</label>
          <input type="text" />

          <label>Date Issued:</label>
          <input type="date" />

          <label>Email:</label>
          <input type="email" />

          <label>Expected Return Date:</label>
          <input type="date" />

          <div className="form-buttons">
            <button type="submit" className="issue-btn">Issue</button>
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserIssueBook;
