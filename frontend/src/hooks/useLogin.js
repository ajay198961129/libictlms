import { useState } from "react";
import { loginUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const data = await loginUser(userData);
      // console.log(data.token);

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userId", data._id);
      navigate("/");
      setSuccess("Login successful!");
      return data;
    } catch (err) {
      setError(err.message || "An error occurred during login");
    }
  };

  return { login, error, success };
};

export default useLogin;
