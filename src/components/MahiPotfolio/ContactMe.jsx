import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_h4y10yo", // Replace with your EmailJS service ID
        "template_15gm59r", // Replace with your EmailJS template ID
        formData,
        "cVOspFBS-Kt4RXAOy" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="main-contact">
      <div className="contact-container">
        <h2 className="contact-title">
          CONTACT <span>ME</span>
        </h2>
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <div className="contact-row">
              <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
              <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>

          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-item">
              <div className="icon-box">
                <IoLocationSharp />
              </div>
              <p>Gopanapalem, Eluru, Andhra Pradesh</p>
            </div>
            <div className="info-item">
              <div className="icon-box">
                <FaMessage />
              </div>
              <div>
                <div className="email_address">chikkalamahitha.40319@gmail.com</div>
                <div>22A91A05B2@aec.edu.in</div>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <p>+91 96767 40319</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
