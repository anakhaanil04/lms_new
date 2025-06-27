import React from 'react';
import './useraddbook.css';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();

  return (
    <div className="addbook-page">
      {/* Custom Header */}
      <div className="addbook-header">
        <img src={Logo} alt="Skopick Logo" className="addbook-logo" />
        <div className="addbook-title">Add Book</div>
      </div>

      {/* Form */}
      <div className="addbook-container">
        <form className="addbook-form">
          <label>Book name:</label>
          <input type="text" />

          <label>ISBN:</label>
          <input type="text" />

          <label>Author:</label>
          <input type="text" />

          <label>Book Number:</label>
          <input type="text" />

          <label>Description:</label>
          <textarea rows="4" />

          <div className="form-buttons">
            <button type="submit" className="add-btn">ADD BOOK</button>
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>BACK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
