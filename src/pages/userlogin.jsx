import React, { useState } from "react";
import "./userlogin.css";
import Logo from "./logo.png";
import backgroundImage from "./library-background.png";
import ForgotPassword from "./forgotpassword";
import UserDashboard from "./userdashboard";

const UserLogin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Just redirect on click
  };

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  if (isLoggedIn) {
    return <UserDashboard />; // No validation, direct redirect
  }

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-box">
        <div className="user-tab">User</div>
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

export default UserLogin;
