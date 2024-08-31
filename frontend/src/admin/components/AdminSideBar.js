import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("adminUserName");
    localStorage.removeItem("adminUserEmail");
    localStorage.removeItem("adminUserId");
    setTimeout(() => {
      navigate("/admin", { replace: true });
    }, 0);
  };
  return (
    <div className="admin-navigation">
      <ul
        style={{
          paddingLeft: "0px",
        }}
      >
        <li>
          <Link to="#">
            <span className="admin-icon">
              <ion-icon name="logo-deviantart"></ion-icon>
            </span>
            <span className="admin-title">LIBICT</span>
          </Link>
        </li>

        <li>
          <Link to="/admin">
            <span className="admin-icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="admin-title">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/students">
            <span className="admin-icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="admin-title">All Student</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/courses">
            <span className="admin-icon">
              <ion-icon name="albums-outline"></ion-icon>
            </span>
            <span className="admin-title">All Course</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/content">
            <span className="admin-icon">
              <ion-icon name="videocam-outline"></ion-icon>
            </span>
            <span className="admin-title">Content Upload</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/assesment">
            <span className="admin-icon">
              <ion-icon name="book-outline"></ion-icon>
            </span>
            <span className="admin-title">Assesments Upload</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/quizs">
            <span className="admin-icon">
              <ion-icon name="checkbox-outline"></ion-icon>
            </span>
            <span className="admin-title">Quiz Upload</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/institutes">
            <span className="admin-icon">
              <ion-icon name="business-outline"></ion-icon>
            </span>
            <span className="admin-title">Bussiness Creation</span>
          </Link>
        </li>

        <li>
          <Link to="/admin" onClick={logout}>
            <span className="admin-icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="admin-title">Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
