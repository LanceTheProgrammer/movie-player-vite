import React, { useEffect } from "react"; 
import Home from "./pages/Home/Home"; 
import { Routes, Route, useNavigate } from "react-router-dom";  
import Login from "./pages/Login/Login"; 
import Player from "./pages/Player/Player"; 
import { onAuthStateChanged } from "firebase/auth";  
import { auth } from "./firebase";  
import { ToastContainer, toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  


const App = () => {
  const navigate = useNavigate();  

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

export default App;
