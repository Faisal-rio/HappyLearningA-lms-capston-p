import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"; // Ensure this file exists and is correctly styled

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Logo and Institution Info */}
        <div className="footer-section logo-info">
          <img
            src="https://cdn-icons-png.freepik.com/256/10063/10063350.png?ga=GA1.1.291058810.1724172861"
            alt="Logo"
            className="footer-logo"
          />
          <h3>HappyLearning</h3>
          <div className="address">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Mada Center 8th floor,
              379 Vaniyanbadi,TamilNadu
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 800 123 4567
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> faisal.sfzubaida@gmail.com
            </p>
          </div>
        </div>

        {/* Facilities and Popular Courses */}
        <div className="footer-section">
          <h3>Facilities & Popular Courses</h3>
          <div className="facilities">
            <p>Online Library</p>
            <p>Interactive Classes</p>
            <p>Career Counseling</p>
          </div>
          <div className="popular-courses">
            <p>Web Development</p>
            <p>Data Science</p>
            <p>Graphic Design</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Courses</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <p>
            Stay connected and follow us on social media for updates and news.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/faisal.zubaida.9?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=10q7gy2l0xrgw&utm_content=3ejc9lf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} HappyLearning. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
