import React from "react";

export default function Sidebar() {
  return (
    <div className="admin-navigation">
      <ul>
        <li>
          <a href="#">
            <span className="admin-icon">
              <ion-icon name="logo-deviantart"></ion-icon>
            </span>
            <span className="admin-title">LIBICT</span>
          </a>
        </li>

        <li>
          <a href="/admin">
            <span className="admin-icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="admin-title">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="student">
            <span className="admin-icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="admin-title">All Student</span>
          </a>
        </li>

        <li>
          <a href="course">
            <span className="admin-icon">
              <ion-icon name="albums-outline"></ion-icon>
            </span>
            <span className="admin-title">All Course</span>
          </a>
        </li>

        <li>
          <a href="content">
            <span className="admin-icon">
              <ion-icon name="videocam-outline"></ion-icon>
            </span>
            <span className="admin-title">Content Upload</span>
          </a>
        </li>

        <li>
          <a href="assesment">
            <span className="admin-icon">
              <ion-icon name="book-outline"></ion-icon>
            </span>
            <span className="admin-title">Assesments Upload</span>
          </a>
        </li>

        <li>
          <a href="quiz">
            <span className="admin-icon">
              <ion-icon name="checkbox-outline"></ion-icon>
            </span>
            <span className="admin-title">Quiz Upload</span>
          </a>
        </li>

        <li>
          <a href="institute">
            <span className="admin-icon">
              <ion-icon name="business-outline"></ion-icon>
            </span>
            <span className="admin-title">Bussiness Creation</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span className="admin-icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="admin-title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
