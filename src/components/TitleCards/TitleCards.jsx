import React, { useEffect, useRef, useState } from "react";  // Importing necessary modules from React
import "./TitleCards.css";  // Importing styles for the TitleCards component
import cards_data from "../../assets/cards/Cards_data";  // Importing card data
import { Link } from "react-router-dom";  // Importing Link component from react-router-dom

// Functional component for TitleCards
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);  // State variable to store API data
  const cardsRef = useRef();  // Creating a reference to the card list element

  // Options for the API request
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGI5MDY1ZGI1NGQ1M2VhZjYwNWEzNTZiOWQ0MzNiNSIsInN1YiI6IjY2MzU2ZGViMGY1MjY1MDEyNWJhZjFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k2QXroNAVqgro2QZatguv6HX6bJZ2CHIuHFgkVjSo-Y",
    },
  };

  // Function to handle scrolling with the mouse wheel
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  // useEffect hook to fetch API data and add event listener
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"  // Category parameter or default value
      }?language=en-US&page=1`,  // API endpoint
      options  // Request options
    )
      .then((response) => response.json())  // Parse response as JSON
      .then((response) => setApiData(response.results))  // Update state with API data
      .catch((err) => console.error(err));  // Error handling

    cardsRef.current.addEventListener("wheel", handleWheel);  // Add wheel event listener
  }, []);  // Empty dependency array means this effect will only run once after the initial render

  // JSX structure representing the TitleCards component
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>  {/* Title based on prop or default value */}
      <div className="card-list" ref={cardsRef}>  {/* Card list container with ref */}
        {apiData.map((card, index) => {  // Mapping through API data to render cards
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>  {/* Link to individual card */}
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}  // Image source
                alt=""
              />
              <p>{card.original_title}</p>  {/* Card title */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;  // Exporting the TitleCards component for use in other parts of the application

