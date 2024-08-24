import React from "react";
import "./Footer.css";
import logo from "../assests/images/logo-mini.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img alt="logo" src={logo} />
        <p>
          LIBICT is an online learning platform for social impact organizations.
        </p>
        <div className="social-media">
          <Link to={"#"}>
            <FaFacebook color="#fff" size={25} />
          </Link>
          <Link to={"#"}>
            <FaTwitter color="#fff" size={25} />
          </Link>
          <Link to={"#"}>
            <FaLinkedinIn color="#fff" size={25} />
          </Link>
          <Link to={"#"}>
            <FaYoutube color="#fff" size={25} />
          </Link>
        </div>
      </div>
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to={"/about-us"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="company-links">
        <h3>Company</h3>
        <ul>
          <li>
            <Link to={""}>Courses</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
