import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img
        style={{ width: "400px" }}
        src="https://static-00.iconduck.com/assets.00/9-404-error-illustration-2048x908-vp03fkyu.png"
        alt="404 image"
      />
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.homeLink}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "100px",
  },
  title: {
    fontSize: "72px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "24px",
    marginBottom: "30px",
  },
  homeLink: {
    fontSize: "18px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default NotFound;
