import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./course.css";

// Mock user profile data
const userProfile = {
  name: "",
  email: "",
  phone: "",
};

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const courses = [
  {
    title: "Full Stack Web Developer",
    duration: "6 months",
    languages: "English, Tamil",
    price: "10000",
    image:
      "https://media.istockphoto.com/id/871030872/photo/programming-code-abstract-technology-background-of-software-developer.jpg?s=612x612&w=0&k=20&c=lkfUNy8Sf3TpFBeIfpBAy6FB5XQwbwjdzypK_1uOQd8=",
  },
  {
    title: "Data Scientist & Machine Learning",
    duration: "6 months",
    languages: "English, Tamil",
    price: "12000",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901779.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Python",
    duration: "3 months",
    languages: "English, Tamil",
    price: "8000",
    image:
      "https://img.freepik.com/premium-photo/programmer-with-3d-computer-yellow-code_124008-63.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "JavaScript",
    duration: "3 months",
    languages: "English, Tamil",
    price: "7000",
    image:
      "https://img.freepik.com/premium-photo/javascript-programming-code-abstract-technology-background_272306-155.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Java",
    duration: "6 months",
    languages: "English, Tamil",
    price: "10000",
    image:
      "https://img.freepik.com/premium-photo/composition-with-html-system-websites_23-2150866280.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Blockchain & Cryptocurrency",
    duration: "6 months",
    languages: "English, Tamil",
    price: "15000",
    image:
      "https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074563.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Cybersecurity Fundamentals",
    duration: "6 months",
    languages: "English, Tamil",
    price: "11000",
    image:
      "https://img.freepik.com/free-photo/business-security_53876-101271.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Digital Marketing",
    duration: "3 months",
    languages: "English, Tamil",
    price: "9000",
    image:
      "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Cloud Computing with AWS",
    duration: "6 months",
    languages: "English, Tamil",
    price: "13000",
    image:
      "https://img.freepik.com/premium-photo/cloud-computing-power-enhance-cloud-strategy-business-eide_31965-547154.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Artificial Intelligence & Deep Learning",
    duration: "6 months",
    languages: "English, Tamil",
    price: "14000",
    image:
      "https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-6351.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Git",
    duration: "3 months",
    languages: "English, Tamil",
    price: "6000",
    image:
      "https://img.freepik.com/free-photo/clock-laptop-with-copy-space_23-2148313051.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "TypeScript",
    duration: "3 months",
    languages: "English, Tamil",
    price: "7000",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "ChatGPT",
    duration: "3 months",
    languages: "English, Tamil",
    price: "8000",
    image:
      "https://img.freepik.com/premium-photo/human-interact-with-ai-artificial-intelligence-virtual-assistant-faas_31965-552529.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "UI/UX Designer",
    duration: "6 months",
    languages: "English, Tamil",
    price: "12000",
    image:
      "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Flutter",
    duration: "6 months",
    languages: "English, Tamil",
    price: "10000",
    image:
      "https://img.freepik.com/premium-photo/software-developer-work-with-coding-overlays-programming-languages-eide_31965-479462.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "SQL for Data Analysis",
    duration: "3 months",
    languages: "English, Tamil",
    price: "7500",
    image:
      "https://cdn.pixabay.com/photo/2024/03/22/12/49/ai-generated-8649646_640.jpg",
  },
  {
    title: "DevOps Fundamentals",
    duration: "6 months",
    languages: "English, Tamil",
    price: "12000",
    image:
      "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1726319959~exp=1726323559~hmac=87f1ba6702b71945d1e14a403b2bc63886b931abd4e473a49f09d3830a3e006d&w=826",
  },
  {
    title: "Agile Project Management",
    duration: "3 months",
    languages: "English, Tamil",
    price: "7000",
    image:
      "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Mobile App Development with React Native",
    duration: "6 months",
    languages: "English, Tamil",
    price: "11000",
    image:
      "https://img.freepik.com/premium-photo/computer-programmer-coding-laptop-with-ai-data-science-futuristic-tech-background_251376-5627.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Game Development with Unity",
    duration: "6 months",
    languages: "English, Tamil",
    price: "13000",
    image:
      "https://t3.ftcdn.net/jpg/07/89/02/58/240_F_789025827_W3sEfLXwWjF6yOCGZzWfXd6dgRwdikhZ.jpg",
  },
  {
    title: "Introduction to Big Data",
    duration: "3 months",
    languages: "English, Tamil",
    price: "8000",
    image:
      "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010117.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid",
  },
  {
    title: "Network Security Basics",
    duration: "3 months",
    languages: "English, Tamil",
    price: "7000",
    image:
      "https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779051_640.jpg",
  },
];

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ ...userProfile });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const enrolledCoursesRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const storedCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedCourses);
  }, []);

  // Save enrolled courses to local storage
  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setFormData({ ...userProfile });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "A 10-digit phone number is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const enrollmentDate = new Date().toLocaleDateString(); // Get the current date
        const response = await axios.post(
          "https://lms-last-backend-1.onrender.com/api/enroll",
          {
            ...formData,
            courseTitle: selectedCourse.title,
            price: selectedCourse.price,
            enrollmentDate, // Include enrollment date in the payload
          }
        );
        setSuccessMessage("Enrollment Successful!");
        const newEnrolledCourses = [
          ...enrolledCourses,
          {
            ...selectedCourse,
            enrollmentDate, // Save the enrollment date with the course
          },
        ];
        setEnrolledCourses(newEnrolledCourses); // Add course to enrolled courses list
        handleCancel();

        // Scroll to the enrolled courses section
        enrolledCoursesRef.current.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Enrollment error:", error);
      }
    }
  };

  const handleCancel = () => {
    setSelectedCourse(null);
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header className="mb-5 text-center">
        <h1 className="header-title">Welcome to Our Online Courses</h1>
        <p className="header-subtext">
          Enhance your skills with our comprehensive and carefully curated
          courses.
        </p>
      </header>

      {/* Description and Image Section */}
      <div className="row mb-5 align-items-center description-row">
        <div className="col-md-6">
          <div className="text-content">
            <p className="description">
              Our institute is dedicated to providing top-notch education that
              empowers students to excel in the rapidly evolving tech industry.
              With a curriculum designed by industry experts, we ensure that our
              courses are not only relevant but also impactful. Whether you're
              looking to start a new career, upgrade your skills, or explore new
              technologies, our courses offer a transformative learning
              experience. Our state-of-the-art classrooms, experienced faculty,
              and hands-on approach ensure that you gain practical knowledge
              that is immediately applicable in the real world.
            </p>
            <p className="cta">
              If you're eager to elevate your career and want to learn more
              about how our institute can help you achieve your goals, we invite
              you to enroll or contact us today.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/premium-photo/indian-man-computer-engineer-programmer-sits-computer-with-monitor-ai-generated_755721-6141.jpg?w=996"
            alt="Best Viewing Experience"
            className="img-fluid image-styled"
          />
        </div>
      </div>

      {/* Courses Section */}
      <div className="card-container">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
            />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">Duration: {course.duration}</p>
              <p className="card-text">Languages: {course.languages}</p>
              <p className="card-text">Price: ₹{course.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleEnrollClick(course)}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}

      {/* Enroll Modal */}
      {selectedCourse && (
        <div className="enroll-modal">
          <div className="enroll-modal-content">
            <div className="modal-header">
              <h2 className="text-center">
                Get this Course @ ₹{selectedCourse.price}
              </h2>
              <button className="close-btn" onClick={handleCancel}>
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success w-100">
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Enrolled Courses Section */}
      <div ref={enrolledCoursesRef} className="enrolled-courses mt-5">
        {enrolledCourses.length > 0 ? (
          <>
            <h2>Your Enrolled Courses</h2>
            <ul className="list-group">
              {enrolledCourses.map((course, index) => (
                <li key={index} className="list-group-item">
                  <strong>{course.title}</strong> - Enrolled on:{" "}
                  {course.enrollmentDate}
                  <br /> Price: ₹{course.price} | Duration: {course.duration}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h4>No enrolled courses yet.</h4>
        )}
      </div>
    </div>
  );
};

export default Course;
