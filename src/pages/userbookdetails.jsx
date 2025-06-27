import React from 'react';
import './userbookdetails.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function BookDetails() {
  return (
    <div className="book-details-container">
      <header className="book-header">
        <div className="header-left">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="title">Book Details</h1>
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

      <main className="book-buttons">
        <Link to="/pages/useraddbook">
        <button className="book-btn">Add Book</button>
        </Link>
        <Link to="/pages/userreturnbook">
        <button className="dash-btn">Return Book</button>
        </Link>
        <Link to="/pages/userupdatebook">
        <button className="dash-btn">Update Book Details</button>
        </Link>
        <button className="book-btn">Book Catalogue</button>
        <Link to="/pages/userissuebook">
        <button className="book-btn">Issue Book</button>
        </Link>
      </main>
    </div>
  );
}

export default BookDetails;
