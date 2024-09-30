import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Course from "./pages/Course";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<PageWithFooter Component={Home} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protecting and adding Footer to the Course route */}
        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <PageWithFooter Component={Course} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contactus"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />

        {/* Protecting and adding Footer to the Blog route */}
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <PageWithFooter Component={Blog} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

// A wrapper component to conditionally render Footer
const PageWithFooter = ({ Component }) => {
  return (
    <>
      <Component />
      <Footer />
    </>
  );
};

export default App;
