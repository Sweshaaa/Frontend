import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import heroImage from '../assets/img.png';
import pancakeImage from '../assets/Img1.jpg';
import wrapImage from '../assets/img2.jpeg';
import burgerImage from '../assets/img3.jpg';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <nav className="navbar" aria-label="Main navigation">
        <ul className="nav-links">
          <li><a href="#" onClick={() => navigate('/')}>Home</a></li>
          <li><a href="#" onClick={() => navigate('/about')}>About</a></li>
          <li><a href="#" onClick={() => navigate('/login')}>Login</a></li>
          <li><a href="#" onClick={() => navigate('/register')}>Register</a></li>
        </ul>
      </nav>

      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to Online Food Ordering System</h1>
        <button className="order-btn" onClick={() => navigate('/menu')}>Order Now</button>
      </div>

      <div className="food-gallery">
        <img src={pancakeImage} alt="Delicious Pancakes" />
        <img src={wrapImage} alt="Tasty Veg Wrap" />
        <img src={burgerImage} alt="Juicy Burger" />
      </div>
    </div>
  );
}

export default HomePage;
