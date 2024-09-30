import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api"; // Import the API setup
import "./SignUp.css"; // Import the CSS file

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear error messages
    setSuccess(""); // Clear success messages

    if (name && email && password) {
      try {
        const response = await API.post(
          "/auth/signup",
          { name, email, password },
          {
            headers: {
              "Content-Type": "application/json",
              "User-Agent": navigator.userAgent, // Add User-Agent header for mobile handling
            },
          }
        );

        if (response.status === 201) {
          setSuccess("Signup successful! You can now log in.");
          setTimeout(() => {
            navigate("/login"); // Redirect to login after signup
          }, 2000);
        }
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Error signing up";
        setError(errorMessage);
      }
    } else {
      setError("Please fill out all fields.");
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <h2 className="left-heading">HappyLearning</h2>
        <p className="institute-name">Get Codified with our New Features!</p>
        <div className="additional-content">
          <p>
            Welcome to HappyLearning, where innovation meets education. Explore
            our latest features and join a community of learners dedicated to
            achieving excellence.
          </p>
          <p>
            Discover new courses, track your progress, and enjoy personalized
            learning experiences tailored to your needs. Let us help you achieve
            your career goals!
          </p>
        </div>
      </div>

      <div className="right-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>

        <div className="mt-3">
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
