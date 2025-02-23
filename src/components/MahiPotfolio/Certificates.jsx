import React from "react";
import { IoIosLink } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import "./Certificates.css";

// Import images directly

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      pdfUrl: "../../../public/certificates/ITspecialist.jpg",
      name: "Html and CSS",
      issueDate: "May 2023",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREz-7Cn3NzV682S1udQIh6zMgzOWJI2LJSOQ&s",
    },
    {
      id: 2,
      pdfUrl: "../../../public/certificates/jav_oracle.pdf",
      name: "Java Foundation",
      issueDate: "April 2024",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQn7PZKqIycUS3IVFMFlBNVFKihbI6AUEiIw&s",
    },
    {
      id: 3,
      pdfUrl: "../../../public/certificates/redHat.jpg",
      name: "RedHat",
      issueDate: "Nov 2023",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8abltn1kPelPRk83X9nUeeEcxb8byifr0JA&s",
    },
    {
      id: 4,
      pdfUrl: "../../../public/certificates/clmsCertificate.pdf",
      name: "Database Foundation",
      issueDate: "April 2024",
      image:"https://res.cloudinary.com/hevo/images/c_scale,w_448,h_173,dpr_2.625/f_webp,q_auto:best/v1689324090/hevo-learn-1/unnamed_17553679420/unnamed_17553679420.png?_i=AA",
    },
    {
      id: 5,
      pdfUrl: "../../../public/certificates/cisco_c++.pdf",
      name: "Cisco C++ Certification",
      issueDate: "Feb 2024",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBxbsNPT5BS_ROMG2bAU3mSv-GPfLi7qjTQ&s",
    },
  ];

  return (
    <div className="certificate-section">
      <h2 className="certificate-heading">
        MY <span>Certificates</span>
      </h2>

      <div className="certificate-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-image">
              <img src={cert.image} alt={cert.name} />
            </div>
            <div className="certificate-details">
              <h3>{cert.name}</h3>
              <p>Issue Date: {cert.issueDate}</p>
              <div className="certificate-actions">
                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <button>
                    <IoEyeOutline /> View
                  </button>
                </a>
                <a href={cert.pdfUrl} download>
                  <button>
                    <IoIosLink /> Download
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
