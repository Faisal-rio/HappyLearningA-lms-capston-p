// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";

const logoUrl = "https://cdn-icons-png.freepik.com/256/10063/10063350.png?ga=GA1.1.291058810.1724172861";

const Navbar = () => {
  const navigate = useNavigate(); // For navigation

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    navigate("/login"); // Redirect to the login page
  };

  const token = localStorage.getItem("token"); // Check if the token exists

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoUrl} alt="Logo" className="navbar-logo" width="30" height="30" />
          Happy⇅Learning
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>

            {/* Show Logout button if token exists, otherwise show Login and Sign Up links */}
            {token ? (
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-link nav-link" style={{ cursor: 'pointer' }}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
