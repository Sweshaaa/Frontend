
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your actual page components
import HomePage from "./Public/HomePage";
import RegisterPage from "./Public/RegisterPage";
import LoginPage from "./Public/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;









// import HomePage from "./Public/Homepage";
// import Register from "./Public/Registerpage";
// import Login from "./Public/Loginpage";

// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//       <Login/>
//       <Register/>
//     </div>
//   );
// }

// export default App;



