import React from "react";  // Importing necessary modules from React
import "./Home.css";  // Importing styles for the Home component
import Navbar from "../../components/Navbar/Navbar";  // Importing Navbar component
import hero_banner from "../../assets/hero_banner.jpg";  // Importing hero banner image
import hero_title from "../../assets/hero_title.png";  // Importing hero title image
import play_icon from "../../assets/play_icon.png";  // Importing play icon image
import info_icon from "../../assets/info_icon.png";  // Importing info icon image
import TitleCards from "../../components/TitleCards/TitleCards";  // Importing TitleCards component
import Footer from "../../components/Footer/Footer";  // Importing Footer component

// Functional component for Home
const Home = () => {
  return (
    <div className="home">  {/* Home container */}
      <Navbar />  {/* Navbar component */}
      <div className="hero">  {/* Hero section */}
        <img src={hero_banner} alt="" className="banner-img" />  {/* Hero banner image */}
        <div className="hero-caption">  {/* Hero caption */}
          <img src={hero_title} alt="" className="caption-img" />  {/* Hero title image */}
          <p>
            {/* Hero caption text */}
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">  {/* Hero buttons */}
            <button className="btn">  {/* Play button */}
              <img src={play_icon} alt="" />  {/* Play icon */}
              Play
            </button>
            <button className="btn dark-btn">  {/* More Info button */}
              <img src={info_icon} alt="" />  {/* Info icon */}
              More Info
            </button>
          </div>
          <TitleCards />  {/* TitleCards component */}
        </div>
      </div>
      <div className="more-cards">  {/* More cards section */}
        {/* TitleCards components with different categories */}
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />  {/* Footer component */}
    </div>
  );
};

export default Home;  // Exporting the Home component for use in other parts of the application
