import React from "react";
import "./forgotpassword.css";
import backgroundImage from "./library-background.png";

const ForgotPassword = ({ onBack }) => {
  return (
    <div className="forgot-password-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="forgot-password-container">
        <div className="forgot-title">Forgot Password?</div>
        
        <div className="form-group">
          <label className="form-label">Mail ID:</label>
          <input type="email" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number:</label>
          <input type="tel" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">OTP:</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">New Password:</label>
          <input type="password" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm New Password:</label>
          <input type="password" className="form-input" />
        </div>

        <div className="button-group">
          <button className="ok-btn">OK</button>
          <button className="back-btn" onClick={onBack}>BACK</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;