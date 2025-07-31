import React from "react";
import {FaPizzaSlice, FaUser, FaHeart, FaEnvelope,FaHistory, FaMoneyBill, FaCog} from "react-icons/fa";
import { MdFastfood, MdOutlineFastfood } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

import beefburgerImg from '../assets/img8.jpg';
import cheeseBurgerImg from '../assets/img9.jpg';
import fishBurgerImg from '../assets/img10.jpg';

import "./Dashboard.css";

export default function Dashboard() {
  const dishes = [
     { name: "Beef Burger",  img: beefburgerImg },
  { name: "Cheese Burger", img: cheeseBurgerImg },
  { name: "fish burger",  img: fishBurgerImg },

  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <h1 className="logo">GoMeal.</h1>
          <nav className="nav-menu">
            <button className="nav-item active"><MdFastfood /> <span>Dashboard</span></button>
            <button className="nav-item"><FaPizzaSlice /><span>Food Order</span></button>
            <button className="nav-item"><FaHeart /><span>Favorite</span></button>
            <button className="nav-item"><FaEnvelope /><span>Message</span></button>
            <button className="nav-item"><FaHistory /><span>Order History</span></button>
            <button className="nav-item"><FaMoneyBill /><span>Bills</span></button>
            <button className="nav-item"><FaCog /><span>Setting</span></button>
          </nav>
        </div>
        <div className="upgrade-box">
          <p>Upgrade your Account to Get Free Voucher</p>
          <button className="upgrade-button">Upgrade</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h2>Hello, Patricia</h2>
          <div className="search-bar">
            <input type="text" placeholder="What do you want eat today..." />
            <FiSearch className="search-icon" />
          </div>
        </div>

        <div className="promo-banner">
          <div>
            <h3>Get Discount Voucher Up To 20%</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          
        </div>

        <div className="section">
          <h3>Category</h3>
          <div className="category-list">
            {['Bakery', 'Burger', 'Beverage', 'Chicken', 'Pizza', 'Seafood'].map((item) => (
              <div key={item} className="category-item">
                <MdOutlineFastfood />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Popular Dishes</h3>
          <div className="dish-list">
            {dishes.map((dish) => (
              <div key={dish.name} className="dish-card">
                <span className="discount-badge">15% Off</span>
                <img src={dish.img} alt={dish.name} />
                <div className="dish-info">
                  <p>{dish.name}</p>
                  <p className="price">Rs. 749</p>
                  <button className="add-btn"><BsPlus /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="top-bar">
          <IoIosNotifications />
          <img src="https://i.pravatar.cc/40" alt="User" />
        </div>

        <div className="balance-section">
          <h4>Your Balance</h4>
          <div className="balance-box">
            <p>Balance</p>
            <h3>Rs. 1,600</h3>
            <div className="balance-buttons">
              <button className="top-up">Top Up</button>
              <button className="transfer">Transfer</button>
            </div>
          </div>
        </div>

        <div className="address-section">
          <h4>Your Address</h4>
          <p className="address">Elm Street, 23</p>
          <button className="change">Change</button>
          <div className="address-actions">
            <button>Add Details</button>
            <button>Add Note</button>
          </div>
        </div>

        <div className="order-summary">
          <h4>Order Menu</h4>
          {['Pepperoni Pizza', 'Cheese Burger', 'Vegan Pizza'].map((item, i) => (
            <div key={i} className="order-item">
              <span>{item}</span><span className="price">Rs. 749</span>
            </div>
          ))}
          <div className="order-item">
            <span>Service</span><span className="price">Rs. 100</span>
          </div>
          <div className="order-total">
            <span>Total</span><span>Rs. 2,347</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
