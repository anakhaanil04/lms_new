import React, { useState } from "react";
import "./adminlogin.css";
import Logo from "./logo.png";
import backgroundImage from "./library-background.png";
import ForgotPassword from "./forgotpassword";
import AdminDashboard from "./admindashboard"; // <-- Add this line

const AdminLogin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- Track login

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login validation here if needed
    setIsLoggedIn(true);
  };

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  if (isLoggedIn) {
    return <AdminDashboard />; // <-- Show dashboard after login
  }

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-box">
        <div className="user-tab">Admin</div>
        <img src={Logo} alt="Logo" className="logo" />
        <h2 className="company-name">Skopick</h2>
        <p className="tagline">Let's build a Brighter Future</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="username/e-mail" 
            className="input-field"
          />
          <input 
            type="password" 
            placeholder="password" 
            className="input-field"
          />
          <a 
            href="#" 
            className="forgot-password"
            onClick={(e) => {
              e.preventDefault();
              setShowForgotPassword(true);
            }}
          >
            forgot password
          </a>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
