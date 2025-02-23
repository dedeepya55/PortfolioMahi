import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import "./projects.css";

const MyProjects = () => {
  const projects = [
    {
      image: "https://buscdn.cardekho.com/in/ashok-leyland/oyster-tourist-bus/ashok-leyland-oyster-tourist-bus.jpg",
      Link: "http://app.technicalhub.io:5567/",
      Github: "a",
      segrigate: "web development",
    },
    {
      image: "https://www.bankrate.com/2022/09/08101001/How-to-use-atms.jpg?auto=webp&optimize=high&crop=16:9",
      Link: "https://github.com/dedeepya55/ATM",
      Github: "https://github.com/dedeepya55/ATM",
      segrigate: "java development",
    },
    {
      image: "https://media.licdn.com/dms/image/v2/C5612AQEv5KIhELeDIg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520091885004?e=2147483647&v=beta&t=ws-iB1TLEdN6M6VYbMI8LIkto5jkXblv_A_lyMqKgQk",
      Link: "https://dedeepya55.github.io/Treks-and-Travels/",
      Github: "https://github.com/dedeepya55/Treks-and-Travels",
      segrigate: "web development",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/1115/6326/files/B1007_Diamond_Pendants_1002_thumb_cdacec1a-3aec-487f-b9be-4c723c3801ca.jpg?v=1602840981",
      Link: "https://jewellery-alpha-steel.vercel.app/",
      Github: "https://github.com/dedeepya55/Jewellery",
      segrigate: "web-development",
    },
    // {
    //   image: "https://entrevue.fr/wp-content/uploads/2025/01/netflix-decouvrez-les-nouveautes-de-la-semaine-y-compris-la-tant-attendue-suite-dun-immense-succes-750x410-1.jpg",
    //   Link: "a",
    //   Github: "a",
    //   segrigate: "web-development",
    // },
    // {
    //   image: "https://cdn.shopify.com/s/files/1/1115/6326/files/B1007_Diamond_Pendants_1002_thumb_cdacec1a-3aec-487f-b9be-4c723c3801ca.jpg?v=1602840981",
    //   Link: "a",
    //   Github: "a",
    //   segrigate: "react-native",
    // }
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "web development", "java development", "react-native"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.segrigate === category));
    }
  };

  return (
    <div className="projects-section">
      <h2 className="projects-heading">
        MY <span>Projects</span>
      </h2>
      
      <div className="projects-categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.segrigate} className="project-img" />
              <div className="overlay">
                <a href={project.Link} className="overlay-eye">
                  <IoEyeOutline className="icon" />
                </a>
                <a href={project.Github} className="overlay-link">
                  <IoIosLink className="icon" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default MyProjects;