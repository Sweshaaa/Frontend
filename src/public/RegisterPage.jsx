import React from 'react';
import './RegisterPage.css'; 
import burgerImage from '../assets/img6.jpg';
import bgImage from '../assets/img4.jpg';
import { Navigate, useNavigate } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="register-container">
      
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      ></div>

      <div className="register-box">
        <img src={burgerImage} alt="Food" className="food-image" />

        <div className="register-form">
          <label className="label">Your Email</label>
          <input type="email" className="input" placeholder="Enter your email" />

          <label className="label">Your Password</label>
          <input type="password" className="input" placeholder="Enter your password" />

          <label className="label">Repeat Password</label>
          <input type="password" className="input" placeholder="Repeat your password" />

          <button className="register-button">Register</button>

          <div className="login-text">
            Already have an account?{' '}
            <span className="login-link">Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

