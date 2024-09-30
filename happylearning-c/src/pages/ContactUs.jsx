import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    document.body.classList.add("contact-page");

    return () => {
      document.body.classList.remove("contact-page");
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && /^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, [name]: value });
    } else if (name !== "phone") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(""); // Reset status before submitting

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      console.log("Response:", response.data);
      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide message after 2 seconds
      setTimeout(() => {
        setFormStatus("");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");

      // Hide error message after 2 seconds
      setTimeout(() => {
        setFormStatus("");
      }, 2000);
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-details">
        <div className="contact-info address-info">
          <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
          <h4>Address</h4>
          <p>07 Floor 3th Vaniyambadi TamilNadu</p>
        </div>
        <div className="contact-info lets-talk-info">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <h4>Let's Talk</h4>
          <p>
            <a href="tel:+81001238741">+91 8100000041</a>
          </p>
        </div>
        <div className="contact-info support-info">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h4>General Support</h4>
          <p>
            <a href="mailto:faisal.sfzubaida@gmail.com?subject=Support Request&body=Hello, I have a question about...">
              faisal.sfzubaida@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us A Message</h2>
        {formStatus === "success" && (
          <p className="success-message">
            Thank you! Your message has been sent.
          </p>
        )}
        {formStatus === "error" && (
          <p className="error-message">
            Oops! Something went wrong. Please try again.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Eg. example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Eg. +1 800 000000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write us a message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
