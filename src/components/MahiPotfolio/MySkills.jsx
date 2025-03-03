import React from "react";
import "./MySkills.css";
import image1 from "../../../public/images/ReactIcon-removebg-preview.png";
import image2 from "../../../public/images/Java-removebg-preview.png";
import image3 from "../../../public/images/html-removebg-preview.png";
import image4 from "../../../public/images/DBMS-removebg-preview.png";
import image5 from "../../../public/images/mongoDBIcon-removebg-preview.png";
const MySkills = () => {
  const skills = [
    {
      image: image1,
      Skill: "React Native",
      Skilldes:
        "React Native is a framework for building mobile applications using JavaScript and React. It allows developers to create cross-platform apps with a single codebase, offering a native-like experience by rendering UI components using native APIs.",
    },
    {
      image: image1,
      Skill: "React",
      Skilldes:
        "React is a JavaScript library for building dynamic user interfaces. It enables efficient UI updates with a component-based structure, virtual DOM for performance, and state management for interactive applications.",
    },
    {
      image:image2,
      Skill: "Java",
      Skilldes:
        "Java is a versatile, object-oriented programming language known for its platform independence, robustness, and scalability. It is widely used for web development, mobile apps, enterprise applications, and backend systems.",
    },
    {
      image: image3,
      Skill: "HTML & CSS & JS",
      Skilldes:
        "HTML structures the webpage, CSS styles it for a visually appealing design, and JavaScript adds interactivity to enhance user experience.",
    },
    {
      image: image4,
      Skill: "DBMS",
      Skilldes:
        "DBMS (Database Management System) is software that manages, organizes, and retrieves data efficiently. It ensures data integrity, security, and scalability, supporting various models like relational (SQL) and NoSQL for structured and unstructured data storage.",
    },
    {
      image: image5,
      Skill: "MongoDB",
      Skilldes:
        "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format, making it highly scalable and efficient for handling large datasets. It supports powerful querying, indexing, and real-time analytics, making it ideal for modern applications.",
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-heading">
        MY <span>SKILLS</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.Skill} />
            <h3 className="skill-MainHead">{skill.Skill}</h3>
            <p>{skill.Skilldes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
