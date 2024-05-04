import React, { useEffect, useRef } from "react";  // Importing necessary modules from React
import "./Navbar.css";  // Importing styles for the Navbar component
import logo from "../../assets/logo.png";  // Importing the logo image
import search_icon from "../../assets/search_icon.svg";  // Importing the search icon image
import bell_icon from "../../assets/bell_icon.svg";  // Importing the bell icon image
import profile_img from "../../assets/profile_img.png";  // Importing the profile image
import caret_icon from "../../assets/caret_icon.svg";  // Importing the caret icon image
import { logout } from "../../firebase";  // Importing the logout function from firebase

// Functional component for Navbar
const Navbar = () => {
  const navRef = useRef();  // Creating a reference to the Navbar element

  // useEffect hook to handle scroll event and change navbar style
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {  // If user scrolls down 80 pixels
        navRef.current.classList.add("nav-dark");  // Add a dark style class to navbar
      } else {
        navRef.current.classList.remove("nav-dark");  // Remove dark style class from navbar
      }
    });
  }, []);  // Empty dependency array means this effect will only run once after the initial render

  // JSX structure representing the Navbar component
  return (
    <div ref={navRef} className="navbar">  {/* Navbar container with ref to apply styles */}
      <div className="navbar-left">  {/* Left side of the navbar */}
        <img src={logo} alt="" />  {/* Logo image */}
        <ul>  {/* Unordered list for navigation links */}
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">  {/* Right side of the navbar */}
        <img src={search_icon} alt="" className="icons" />  {/* Search icon */}
        <p>Children</p>  {/* Placeholder text */}
        <img src={bell_icon} alt="" className="icons" />  {/* Bell icon */}
        <div className="navbar-profile">  {/* Profile dropdown */}
          <img src={profile_img} alt="" className="profile" />  {/* Profile image */}
          <img src={caret_icon} alt="" />  {/* Caret icon for dropdown */}
          <div className="dropdown">  {/* Dropdown content */}
            <p
              onClick={() => {
                logout();  // Logout function call
              }}
            >
              Sign Out of Netflix  {/* Dropdown item for signing out */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;  // Exporting the Navbar component for use in other parts of the application

