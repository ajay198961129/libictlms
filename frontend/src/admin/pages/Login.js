import React from "react";
import "../assests/css/style.css";

export default function LoginPage() {
  return (
    <>
      <div className="container mt-4">
        <div className="admin-card mb-4">
          <div className="admin-card-header admin-soft-ui-info">
            <h3>Login</h3>
          </div>
          <div className="admin-card-body">
            <div className="alert alert-danger" role="alert">
              Errors
            </div>
            <form action="/login" method="POST">
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  aria-describedby="passwordHelp"
                  required
                />
                <span className="password-toggle">
                  <i id="password-icon" className="bi bi-eye-slash"></i>
                </span>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
