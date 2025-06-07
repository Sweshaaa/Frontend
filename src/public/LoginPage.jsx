
import React from 'react';
import './LoginPage.css';
import pizzaImage from '../assets/img5.jpg'; 

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={pizzaImage} alt="Pizza" className="pizza-image" />

        <div className="login-form">
          <label className="label">Your Email</label>
          <input type="email" className="input" placeholder="Enter your email" />

          <label className="label">Your Password</label>
          <input type="password" className="input" placeholder="Enter your password" />

          <div className="forgot-password">Forgot Password?</div>

          <button className="login-button">Log In</button>

          <div className="signup-text">
            Don’t have an account?{' '}
            <span className="signin-link">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
