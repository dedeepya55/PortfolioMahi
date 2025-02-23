import React from "react";
import "./AboutMe.css"; // Import the CSS file
import Image from "../../../public/images/WhatsApp Image 2025-02-23 at 22.36.22_b11854f2.jpg";
const AboutMe = () => {
  // const Image =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vPsiA26TLT8XwLH1osTp6V_1_ijz_pNFDA&s";

  return (
    <div className="Amain">
    <div className="About">About Me</div>
    <div className="about-container">
      {/* Image Section */}
      <div className="image-container">
        <div className="image-wrapper">
          <img src={Image} alt="Photographer" className="profile-image" />
          
        </div>
      </div>

      {/* Text Content Section */}
      <div className="text-container">
        <h1 className="title">
          Hello, I Am <span className="highlight">Web Developer</span>
        </h1>
        <p className="description">
        I'm a Full Stack Developer with experience in frontend and backend development. I enjoy building user-friendly web applications and solving complex problems.

I also have expertise in Java, covering data structures, algorithms, and OOPS. I love coding, learning new technologies, and working on exciting projects.
        </p>

        {/* Contact Info */}
        <div className="info">
          <p><span>Name:</span> Mahitha Hanu</p>
          <p><span>Age:</span> 20</p>
          <p><span>Address:</span> Eluru</p>
          <p><span>Phone:</span> +91 9676740319</p>
          <p><span>E-mail:</span> chikkalamahitha.40319@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutMe;
