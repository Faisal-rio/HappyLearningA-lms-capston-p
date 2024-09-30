import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../utils/api";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Set rememberMe based on stored email
    }

    const token = localStorage.getItem("token");
    if (token && validateToken(token)) {
      navigate("/"); // Redirect to home if token is valid
    }
    setPassword(""); // Always clear password on mount
  }, [navigate]);

  const validateToken = (token) => {
    // Placeholder: Implement actual token validation logic
    return true; // Assuming token is valid for demonstration
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous message

    try {
      const response = await API.post(
        "/auth/login",
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': navigator.userAgent, // Add User-Agent header for mobile handling
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Save the token

        if (rememberMe) {
          localStorage.setItem("email", email); // Save email if rememberMe is checked
        } else {
          localStorage.removeItem("email"); // Remove email if rememberMe is unchecked
        }

        setMessage("Login successful!");

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error logging in");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h2 className="left-heading">HappyLearning</h2>
        <p className="institute-name">Get Codified with our New Features!</p>
        <div className="additional-content">
          <p>
            Welcome to HappyLearning, where innovation meets education. Explore our latest features and join a community of learners dedicated to achieving excellence.
          </p>
          <p>
            Discover new courses, track your progress, and enjoy personalized learning experiences tailored to your needs. Let us help you achieve your career goals!
          </p>
        </div>
      </div>
      <div className="right-form">
        <h2>Welcome to HappyLearning!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
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
          {message && <p className="message-text">{message}</p>}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
        <div className="mt-3">
          <p>
            New on our platform? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
