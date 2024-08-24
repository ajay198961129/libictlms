import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Learning to Change the World</h1>
      <div className="color-underline"></div>
      <p>
        Free online courses for anyone making a difference, taught by leading
        social entrepreneurs and nonprofit leaders.
      </p>
      <button>
        <Link style={{ textDecoration: "none", color: "#fff" }} to={"/courses"}>
          START LEARNING
        </Link>
      </button>
    </div>
  );
};

export default Hero;
