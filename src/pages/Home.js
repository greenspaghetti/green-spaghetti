import React from "react";
import "../styles/pg-style/home.css";
import placeholderImage from "../assets/homepage-placeholder.jpg";


function Home() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Home Page</h1>
        <p>
          Welcome to Green Spaghetti — where recipes meet creativity. This is
          just the beginning!
        </p>
        <div className="homepage-image">
  <img src={placeholderImage} alt="Green Spaghetti preview" />
</div>

      </div>
    </div>
  );
}

export default Home;
