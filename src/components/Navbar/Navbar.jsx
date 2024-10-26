import React, { useEffect, useRef } from "react";  
import "./Navbar.css";  
import logo from "../../assets/logo.png"; 
import search_icon from "../../assets/search_icon.svg";  
import bell_icon from "../../assets/bell_icon.svg";  
import profile_img from "../../assets/profile_img.png";  
import caret_icon from "../../assets/caret_icon.svg";  
import { logout } from "../../firebase"; 


const Navbar = () => {
  const navRef = useRef();

  // useEffect hook to handle scroll event and change navbar style
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {  // If user scrolls down 80 pixels
        navRef.current.classList.add("nav-dark");  // Add a dark style class to navbar
      } else {
        navRef.current.classList.remove("nav-dark");  // Remove dark style class from navbar
      }
    });
  }, []);
 
  return (
    <div ref={navRef} className="navbar">  
      <div className="navbar-left">  {/* Left side of the navbar */}
        <img src={logo} alt="" />  
        <ul>  
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">  {/* Right side of the navbar */}
        <img src={search_icon} alt="" className="icons" /> 
        <p>Children</p> 
        <img src={bell_icon} alt="" className="icons" /> 
        <div className="navbar-profile">  {/* Profile dropdown */}
          <img src={profile_img} alt="" className="profile" />  
          <img src={caret_icon} alt="" />  
          <div className="dropdown">
            <p
              onClick={() => {
                logout();  //
              }}
            >
              Sign Out of Netflix  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 

