import React from "react";
import { Carousel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  // Check if the current path is "/"
  const isHomePage = location.pathname === "/";

  if (!isHomePage) {
    return null; // Don't render anything if not on the home page
  }

  return (
    <header className="header-container">
      <Carousel interval={1000} controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://as2.ftcdn.net/v2/jpg/07/27/51/39/1000_F_727513945_jwjCEYp5o82sU6nnFT2ByaZJ8Hn8c6yt.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://t3.ftcdn.net/jpg/05/89/88/34/240_F_589883411_AtmkAkAS1eBdWR9mQybXraMcO84ZUPyg.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://img.freepik.com/premium-photo/cozy-library-study-session-with-friends_1280275-155740.jpg?w=1060"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://t3.ftcdn.net/jpg/05/89/88/34/240_F_589883411_AtmkAkAS1eBdWR9mQybXraMcO84ZUPyg.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://img.freepik.com/premium-photo/elearning-program-certificate-online-education-learning-workshop-trainingmale-female-students-icons-virtual-screen-video-lesson-online-classes-internet_162459-4630.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
