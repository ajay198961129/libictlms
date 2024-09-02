import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);
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

  const handleActiveMenu = (path) => {
    setActiveMenu(path);
  };
  return (
    <div className="admin-navigation">
      <ul
        style={{
          paddingLeft: "0px",
        }}
      >
        <li className={activeMenu === "/" ? "active-menu" : ""}>
          <Link to="/" onClick={() => handleActiveMenu("/admin")}>
            <span className="admin-icon">
              <ion-icon name="logo-deviantart"></ion-icon>
            </span>
            <span className="admin-title">LIBICT</span>
          </Link>
        </li>

        <li className={activeMenu === "/admin/dashboard" ? "active-menu" : ""}>
          <Link
            to="/admin/dashboard"
            onClick={() => handleActiveMenu("/admin/dashboard")}
          >
            <span className="admin-icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="admin-title">Dashboard</span>
          </Link>
        </li>

        <li className={activeMenu === "/admin/students" ? "active-menu" : ""}>
          <Link
            to="/admin/students"
            onClick={() => handleActiveMenu("/admin/students")}
          >
            <span className="admin-icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="admin-title">All Student</span>
          </Link>
        </li>

        <li className={activeMenu === "/admin/courses" ? "active-menu" : ""}>
          <Link
            to="/admin/courses"
            onClick={() => handleActiveMenu("/admin/courses")}
          >
            <span className="admin-icon">
              <ion-icon name="albums-outline"></ion-icon>
            </span>
            <span className="admin-title">All Course</span>
          </Link>
        </li>

        <li className={activeMenu === "/admin/category" ? "active-menu" : ""}>
          <Link
            to="/admin/category"
            onClick={() => handleActiveMenu("/admin/category")}
          >
            <span className="admin-icon">
              <ion-icon name="apps"></ion-icon>
            </span>
            <span className="admin-title">Category</span>
          </Link>
        </li>

        <li className={activeMenu === "/admin/chapter" ? "active-menu" : ""}>
          <Link
            to="/admin/chapter"
            onClick={() => handleActiveMenu("/admin/chapter")}
          >
            <span className="admin-icon">
              <ion-icon name="albums"></ion-icon>
            </span>
            <span className="admin-title">Chapter</span>
          </Link>
        </li>

        <li className={activeMenu === "/admin/content" ? "active-menu" : ""}>
          <Link
            to="/admin/content"
            onClick={() => handleActiveMenu("/admin/content")}
          >
            <span className="admin-icon">
              <ion-icon name="folder-open"></ion-icon>
            </span>
            <span className="admin-title">Content Upload</span>
          </Link>
        </li>

        {/* <li>
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
        </li> */}

        <li className={activeMenu === "/admin/institutes" ? "active-menu" : ""}>
          <Link
            to="/admin/institutes"
            onClick={() => handleActiveMenu("/admin/institutes")}
          >
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
