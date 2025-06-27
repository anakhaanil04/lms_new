import React from 'react';
import './userupdatebook.css';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function UserUpdateBook() {
  const navigate = useNavigate();

  return (
    <div className="userupdatebook-page">
      <div className="userupdatebook-header">
        <img src={Logo} alt="Logo" className="userupdatebook-logo" />
        <div className="userupdatebook-title">Update Book</div>
      </div>

      <div className="userupdatebook-container">
        <form className="userupdatebook-form">
          <label>Book Number:</label>
          <input type="text" />

          <label>Book Name:</label>
          <input type="text" />

          <label>ISBN:</label>
          <input type="text" />

          <div className="form-buttons">
            <button type="submit" className="add-btn">Add</button>
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserUpdateBook;
