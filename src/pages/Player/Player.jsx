import React, { useEffect, useState } from "react";  // Importing necessary modules from React
import "./Player.css";  // Importing styles for the Player component
import back_arrow_icon from "../../assets/back_arrow_icon.png";  // Importing back arrow icon
import { useNavigate, useParams } from "react-router-dom";  // Importing hooks for navigation

// Functional component for Player
const Player = () => {
  // Retrieving parameters from URL
  const { id } = useParams();  // Extracting ID from URL parameters
  const navigate = useNavigate();  // Navigation hook

  // State variable to store API data
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  // Options for fetch request
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGI5MDY1ZGI1NGQ1M2VhZjYwNWEzNTZiOWQ0MzNiNSIsInN1YiI6IjY2MzU2ZGViMGY1MjY1MDEyNWJhZjFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k2QXroNAVqgro2QZatguv6HX6bJZ2CHIuHFgkVjSo-Y",
    },
  };

  // Fetching data from API
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,  // Fetching video data for the specified movie ID
      options
    )
      .then((response) => response.json())  // Parsing response JSON
      .then((response) => setApiData(response.results[0]))  // Setting API data to state
      .catch((err) => console.error(err));  // Handling errors
  }, []);

  // JSX structure representing the Player component
  return (
    <div className="player">  {/* Player container */}
      <img src={back_arrow_icon} alt="" onClick={() => { navigate(-2) }} />  {/* Back arrow icon */}
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}  // Embedding YouTube video with retrieved key
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">  {/* Player info section */}
        <p>{apiData.published_at}</p>  {/* Published date */}
        <p>{apiData.name}</p>  {/* Video name */}
        <p>{apiData.type}</p>  {/* Video type */}
      </div>
    </div>
  );
};

export default Player;  // Exporting the Player component for use in other parts of the application
