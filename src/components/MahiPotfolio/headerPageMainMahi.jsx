import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Header.css";
import { MdDownload } from "react-icons/md";
import profileImage from "../../../public/images/mahi7.jpg";

const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Mahitha Hanu", "Full Stack Developer", "Java Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // Function to download the resume
  const handleDownload = () => {
    const resumeUrl = "../../../public/overleaf_resume.pdf"; // Resume is in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mahitha_Hanu_Resume.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="header-container">
      {/* Geometric Shapes */}
      <div className="shapes">
        <div className="triangle"></div>
        <div className="circle"></div>
        <div className="triangle2"></div>
        <div className="circle2"></div>
        <div className="triangle3"></div>
      </div>

      {/* Main Content */}
      <div className="header-content">
        <div className="text-section">
          <h3 className="intro">HI THERE,</h3>
          <h1 className="title">
            I Am <span ref={typedRef}></span>
          </h1>
          <p className="description">
            I'm a Web Developer currently studying in Aditya Engineering College 3rd year. I am interested in working in full-stack development.
          </p>
          <button className="cta-button" onClick={handleDownload}>
            Resume <MdDownload />
          </button>
        </div>

        {/* Profile Image */}
        <div className="image-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
