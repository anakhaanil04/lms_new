import React, { useState } from 'react';
import './usernewstudent.css';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function UserNewStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    batch: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted student:', formData);
    // Add API logic here
  };

  return (
    <div className="newstudent-page">
      {/* Header */}
      <div className="newstudent-header">
        <img src={Logo} alt="Skopick Logo" className="newstudent-logo" />
        <div className="newstudent-title">New Student Details</div>
      </div>

      {/* Form */}
      <div className="newstudent-container">
        <form className="newstudent-form" onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />

          <label>Batch:</label>
          <input type="text" name="batch" value={formData.batch} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <div className="form-buttons">
            <button type="submit" className="add-btn">OK</button>
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>BACK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserNewStudent;
