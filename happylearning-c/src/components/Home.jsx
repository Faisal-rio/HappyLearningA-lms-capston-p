import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // State for achievements section
  const [studentCount, setStudentCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [placedCount, setPlacedCount] = useState(0);

  useEffect(() => {
    // Simulate fetching random numbers for the achievements section
    setStudentCount(230 + Math.floor(Math.random() * 21)); // 230 - 250
    setProjectCount(100 + Math.floor(Math.random() * 51)); // 100 - 150
    setPlacedCount(200 + Math.floor(Math.random() * 51)); // 200 - 250
  }, []);

  // Navigation function
  const handleExploreClick = () => {
    navigate("/course"); // Navigate to the course page
  };

  const courses = [
    {
      title: "Mastering Full-Stack Web Development",
      image:
        "https://media.istockphoto.com/id/871030872/photo/programming-code-abstract-technology-background-of-software-developer.jpg?s=612x612&w=0&k=20&c=lkfUNy8Sf3TpFBeIfpBAy6FB5XQwbwjdzypK_1uOQd8=",
    },
    {
      title: "Data Science & Machine Learning",
      image:
        "https://cdn.pixabay.com/photo/2024/02/22/02/45/computer-8589003_640.png",
    },
    {
      title: "Cybersecurity Fundamentals",
      image:
        "https://cdn.pixabay.com/photo/2024/03/22/12/49/ai-generated-8649646_640.jpg",
    },
    {
      title: "Digital Marketing Strategy",
      image:
        "https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779051_640.jpg",
    },
    {
      title: "Cloud Computing with AWS",
      image:
        "https://cdn.pixabay.com/photo/2023/07/11/06/47/woman-8119716_640.jpg",
    },
    {
      title: "Artificial Intelligence & Deep Learning",
      image:
        "https://cdn.pixabay.com/photo/2024/07/07/15/12/ai-generated-8879117_640.jpg",
    },
  ];

  return (
    <div>
      {/* Background Sides */}
      <div className="background-sides left"></div>
      <div className="background-sides right"></div>

      {/* Main Container */}
      <div className="home-container">
        <h1 className="institute-name">HappyLearning</h1>
        <p className="institute-description">
          At HappyLearning, we believe in empowering individuals through
          education. Our carefully curated courses are designed to provide you
          with the knowledge and skills you need to thrive in today's
          ever-evolving world.
        </p>

        {/* Features Section */}
        <div className="features-container">
          <div className="feature-item">
            <img
              src="https://img.freepik.com/free-vector/girl-with-laptop-education-icon-isolated_1308-45260.jpg?ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
              alt="Micro Learning"
            />
            <h3 className="feature-title">Micro Learning</h3>
            <p className="feature-description">
              Bite-sized learning modules designed to deliver content in small,
              manageable chunks. Perfect for busy professionals looking to
              upskill quickly and effectively.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="https://img.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
              alt="Skills Validation"
            />
            <h3 className="feature-title">Skills Validation</h3>
            <p className="feature-description">
              Comprehensive assessments and certifications that validate your
              skills, giving you the recognition you deserve in your field of
              expertise.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="https://img.freepik.com/premium-vector/man-red-shirt-is-playing-with-dog-man-is-walking-snow_220346-8108.jpg?w=1060"
              alt="Training and Consulting"
            />
            <h3 className="feature-title">Training and Consulting</h3>
            <p className="feature-description">
              Expert-led training sessions and consulting services to help
              organizations achieve their goals through strategic learning and
              development initiatives.
            </p>
          </div>
        </div>

        {/* Institute Details Section */}
        <section className="institute-details-section">
          <div className="institute-content">
            <div className="institute-text">
              <h2>About HappyLearning</h2>
              <p>
                Founded in 2024, HappyLearning has quickly become a leader in
                online education. We are committed to providing high-quality,
                accessible learning opportunities that empower individuals to
                achieve their professional and personal goals.
              </p>
              <p>
                Our vision blends expertise in technology, education, and
                management. With over two decades of experience, we have created
                a forward-thinking academic environment that encourages students
                to excel and stand out. Our network spans South India, with
                additional offices in the USA, UAE, and Armenia.
              </p>
              <div className="achievements">
                <div className="achievement">
                  <h3>{studentCount}</h3>
                  <p>Happy Students</p>
                </div>
                <div className="achievement">
                  <h3>{projectCount}</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="achievement">
                  <h3>{placedCount}</h3>
                  <p>Students Placed</p>
                </div>
              </div>
            </div>
            <div className="institute-image">
              <img
                src="https://firstlogicinstitute.com/Images/Banner%20Img%20-%20Home%20Page.jpg"
                alt="HappyLearning Students"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt="Team Member 1"
              />
              <h3>James Anderson</h3>
              <p>Chief Executive Officer</p>
              <p>
                James leads the company with over 15 years of experience in the
                education sector, driving innovation and growth.
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Team Member 2"
              />
              <h3>Alice Taylor</h3>
              <p>Chief Technology Officer</p>
              <p>
                Alice oversees the technical strategies, ensuring that our
                platform remains cutting-edge and reliable.
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt="Team Member 3"
              />
              <h3>Robert Wilson</h3>
              <p>Chief Marketing Officer</p>
              <p>
                Robert is responsible for our global marketing efforts, building
                the brand and expanding our reach.
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="Team Member 4"
              />
              <h3>Linda Brown</h3>
              <p>Head of Student Success</p>
              <p>
                Linda focuses on ensuring that every student achieves their
                goals and has a positive learning experience.
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/men/6.jpg"
                alt="Team Member 5"
              />
              <h3>William Smith</h3>
              <p>Lead Instructor</p>
              <p>
                William is an expert in Full-Stack Development, guiding students
                to excel in their coding careers.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="highlighted-features-section">
          <h2>Why Choose HappyLearning?</h2>
          <div className="highlighted-features">
            <div className="feature">
              <img
                src="https://img.icons8.com/color/96/000000/certificate.png"
                alt="Certificate Icon"
              />
              <h4>Certified Courses</h4>
              <p>Get recognized with industry-standard certifications.</p>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/color/96/000000/classroom.png"
                alt="Classroom Icon"
              />
              <h4>Expert Instructors</h4>
              <p>
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/color/96/000000/online.png"
                alt="Online Learning Icon"
              />
              <h4>Flexible Learning</h4>
              <p>Access courses anytime, anywhere to suit your schedule.</p>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/fluency/96/personal-growth.png"
                alt="Personalized Learning Icon"
              />
              <h4>Personalized Learning Paths</h4>
              <p>
                Tailor your learning journey with courses that fit your goals.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/color/96/000000/group.png"
                alt="Community Support Icon"
              />
              <h4>Community Support</h4>
              <p>Join a vibrant community of learners and mentors.</p>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/color/96/000000/suitcase.png"
                alt="Career Guidance Icon"
              />
              <h4>Career Guidance</h4>
              <p>
                Receive expert advice to advance your career in the tech
                industry.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2>What Our Students Say</h2>
          <div className="testimonials">
            {/* Testimonial 1 */}
            <div className="testimonial">
              <img
                src="https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
                alt="John Doe"
              />
              <p>
                "The courses at HappyLearning have been instrumental in
                advancing my career. The practical approach and expert guidance
                made a huge difference."
              </p>
              <h4>John Doe</h4>
              <p>Software Engineer</p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial">
              <img
                src="https://img.freepik.com/premium-photo/confident-happy-young-latin-business-man-worker-sitting-office-work-with-laptop-looking-camera-smiling-businessman-employee-workplace-modern-coworking-vertical-portrait_1254992-213435.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
                alt="Jane Smith"
              />
              <p>
                "I loved the flexibility and depth of the content. The
                instructors are knowledgeable, and the certification really
                helped boost my resume."
              </p>
              <h4>Jane Smith</h4>
              <p>Data Scientist</p>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial">
              <img
                src="https://img.freepik.com/free-photo/front-view-young-man-demonstrating-peace-sign_140725-34659.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
                alt="Michael Johnson"
              />
              <p>
                "HappyLearning offers top-notch courses that helped me
                transition into the tech industry. I can't thank them enough!"
              </p>
              <h4>Michael Johnson</h4>
              <p>Full-Stack Developer</p>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial">
              <img
                src="https://img.freepik.com/free-photo/customer-service-handsome-young-guy-office-suit-with-laptop-headset-pointing-up_140725-164875.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
                alt="Sarah Williams"
              />
              <p>
                "The learning experience was seamless. The instructors were
                supportive, and the projects were extremely practical."
              </p>
              <h4>Sarah Williams</h4>
              <p>UI/UX Designer</p>
            </div>

            {/* Testimonial 5 */}
            <div className="testimonial">
              <img
                src="https://img.freepik.com/free-photo/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit_158538-8185.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
                alt="David Brown"
              />
              <p>
                "The community and mentorship at HappyLearning made a big impact
                on my professional growth. Highly recommend their courses!"
              </p>
              <h4>David Brown</h4>
              <p>Cloud Engineer</p>
            </div>

            {/* Testimonial 6 */}
            <div className="testimonial">
              <img
                src="https://img.freepik.com/premium-photo/young-man-with-curly-hair-glasses-smiles-while-working-his-computer-bright-office_911620-31931.jpg?uid=R159796910&ga=GA1.1.100659340.1722111475&semt=ais_hybrid"
                alt="Emily Davis"
              />
              <p>
                "The hands-on projects and real-world examples at HappyLearning
                helped me gain practical experience, which was key to landing my
                first job."
              </p>
              <h4>Emily Davis</h4>
              <p>Front-End Developer</p>
            </div>
          </div>
        </div>

        {/* Trusted by Our Professional Partners Section */}
        <div className="trusted-partners-section">
          <h2>Trusted by Our Professional Partners</h2>
          <div className="trusted-partners-grid">
            {/* Different logos */}
            {[
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "Microsoft",
                logo: "https://st3.depositphotos.com/1102480/12576/i/450/depositphotos_125765680-stock-photo-microsoft-and-its-own-brands.jpg",
              },
              {
                name: "IBM",
                logo: "https://firstlogicinstitute.com/Images/Partner%202.png",
              },
              {
                name: "N.S.D.S",
                logo: "https://firstlogicinstitute.com/Images/Partner%203.png",
              },
              {
                name: "U.S.A",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1920px-IBM_logo.svg.png",
              },
            ].map((partner, index) => (
              <div key={index} className="trusted-partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Course Section */}
        <section className="courses-section">
          <h1 className="courses-title">Explore Our Popular Courses</h1>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <div className="course-info">
                  <h2 className="course-title">{course.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="explore-button-container">
            <button className="explore-button" onClick={handleExploreClick}>
              Explore Courses
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
