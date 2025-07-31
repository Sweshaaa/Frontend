import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Public/HomePage";
import RegisterPage from "./Public/RegisterPage";
import LoginPage from "./Public/LoginPage";
import ForgotPassword  from "./Public/Forgotpassword";
import Dashboard  from "./Public/DashBoard";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
       <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    
  );
}

export default App;






