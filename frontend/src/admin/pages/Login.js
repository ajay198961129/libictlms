import React, { useState } from "react";
import "./Login.css";
import Loader from "../../components/Loader";
import axios from "axios";
import { adminApiUrl } from "../../api/config";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const { login, error, success } = useAdminLogin();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // await login({ email, password });
    const sendData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${adminApiUrl}/login`, sendData);
      console.log(response);
      localStorage.setItem("adminAuthToken", response.data.token);
      localStorage.setItem("adminUserName", response.data.name);
      localStorage.setItem("adminUserEmail", response.data.email);
      localStorage.setItem("adminUserId", response.data._id);
      setSuccess("Login Successfull!");
      setError("");
      setTimeout(() => {
        navigate("/admin/dashboard", { replace: true });
      }, 0);
    } catch (error) {
      console.log(error);
      setError("Username and Password Incorrect!");
      setSuccess("");
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" className="login-button">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
