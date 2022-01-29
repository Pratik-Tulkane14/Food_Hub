import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Food Hub </h1>
        <p>FOOD AT A CLICK</p>
        <Link to="/">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
