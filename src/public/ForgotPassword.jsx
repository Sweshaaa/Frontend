import React from 'react';
import "./ForgotPassword.css";
import foodImg from '../assets/img7.jpg'; // make sure you have the image


function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="form-wrapper">
        <img src={foodImg} alt="food" className="top-image" />
        <div className="form-content">
          <h2>Forget Password</h2>
          <p>Please enter your email to reset your password</p>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter email" />
          <button>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;