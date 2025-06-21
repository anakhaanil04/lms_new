import React, { useState } from "react";
import "./login.css";
import Logo from "./logo.png";
import backgroundImage from "./library-background.png";

import UserLogin from "./userlogin";
import AdminLogin from "./adminlogin";

const Login = () => {
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  if (showUserLogin) {
    return <UserLogin />;
  } else if (showAdminLogin) {
    return <AdminLogin />;
  }

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-box">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Welcome to Library Management System</h1>
        <button
          className="login-button"
          onClick={() => setShowUserLogin(true)}
        >
          USER LOGIN
        </button>
        <button
          className="login-button"
          onClick={() => setShowAdminLogin(true)}
        >
          ADMIN LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
