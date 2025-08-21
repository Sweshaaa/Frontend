import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import pizzaImage from '../assets/img5.jpg'; 

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Add actual login validation here (API call, etc.)
    // For now, navigate directly to dashboard
    navigate('/dashboard');
  };return (
    <div className="login-container">
      <div className="login-box">
        <img src={pizzaImage} alt="Pizza" className="pizza-image" />

        <div className="login-form">
          <label className="label">Your Email</label>
          <input type="email" className="input" placeholder="Enter your email" />

          <label className="label">Your Password</label>
          <input type="password" className="input" placeholder="Enter your password" />

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button className="login-button" onClick={handleLogin}>
            Log In
          </button>

          <div className="signup-text">
            Don’t have an account?{' '}
            <Link to="/register" className="signin-link">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
