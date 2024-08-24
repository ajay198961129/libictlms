import React from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <Link href="#" onClick={closeMenu}>
        &#10006;
      </Link>
      <Link href="#">Courses</Link>
      <Link href="#">About Us</Link>
    </div>
  );
};

export default MobileMenu;
