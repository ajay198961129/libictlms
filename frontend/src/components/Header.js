import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import "./Header.css";
import logoImage from "../assests/images/logo-mini.png";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/courses">Courses</Link>
          {/* <Link to="/mycourse">My Courses</Link> */}
          <Link to="/about-us">About Us</Link>
          {!localStorage.getItem("authToken") ? (
            ""
          ) : (
            <Link to="/mycourse">My Courses</Link>
          )}
          {!localStorage.getItem("authToken") ? (
            ""
          ) : (
            <Link to="/profile">My Profile</Link>
          )}
          {!localStorage.getItem("authToken") ? (
            <Link className="login-btn" to="/login">
              Login
            </Link>
          ) : (
            <Link className="login-btn" onClick={logOut} to="/login">
              LogOut
            </Link>
          )}
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </nav>
      {menuOpen && <MobileMenu closeMenu={toggleMobileMenu} />}
    </header>
  );
};

export default Header;
