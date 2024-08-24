import { useState } from "react";
import { signupUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const signup = async (userData) => {
    try {
      const data = await signupUser(userData);
      setSuccess("Signup successful!");
      navigate("/login");

      return data;
    } catch (err) {
      setError(err.message || "An error occurred during signup");
    }
  };

  return { signup, error, success };
};

export default useSignup;
