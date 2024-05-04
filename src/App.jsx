import React, { useEffect } from "react";  // Importing necessary modules from React
import Home from "./pages/Home/Home";  // Importing Home component
import { Routes, Route, useNavigate } from "react-router-dom";  // Importing necessary modules from React Router
import Login from "./pages/Login/Login";  // Importing Login component
import Player from "./pages/Player/Player";  // Importing Player component
import { onAuthStateChanged } from "firebase/auth";  // Importing onAuthStateChanged function from Firebase
import { auth } from "./firebase";  // Importing Firebase authentication module
import { ToastContainer, toast } from "react-toastify";  // Importing ToastContainer and toast from react-toastify
import "react-toastify/dist/ReactToastify.css";  // Importing styles for react-toastify

// Functional component for App
const App = () => {
  const navigate = useNavigate();  // Navigation hook

  // Effect hook to handle user authentication state
  useEffect(() => {
    // Listening for changes in authentication state
    onAuthStateChanged(auth, async (user) => {
      if (user) {  // If user is logged in
        console.log("Logged In");  // Log message indicating user is logged in
        navigate("/");  // Redirect to home page
      } else {  // If user is logged out
        console.log("Logged Out");  // Log message indicating user is logged out
        navigate("/login");  // Redirect to login page
      }
    });
  }, []);  // Empty dependency array to ensure effect runs only once

  // JSX structure representing the App component
  return (
    <div>
      <ToastContainer theme='dark'/>  {/* Toast container for displaying notifications */}
      <Routes>  {/* Routes for navigation */}
        <Route path="/" element={<Home />} />  {/* Route for home page */}
        <Route path="/login" element={<Login />} />  {/* Route for login page */}
        <Route path="/player/:id" element={<Player />} />  {/* Route for player page */}
      </Routes>
    </div>
  );
};

export default App;  // Exporting the App component for use in other parts of the application
