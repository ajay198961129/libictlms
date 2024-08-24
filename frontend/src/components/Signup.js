import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import { academyId } from "../api/config";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, success } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup({ name, email, password, academyId });
  };
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Sign Up</button>
        <Link className="signup-link" to="/login">
          If you have already account. <span>Login</span>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
