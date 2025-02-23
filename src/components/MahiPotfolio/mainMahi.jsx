import React, { useState, useRef } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import HeaderPage from "./headerPageMahi"; // Ensure the path is correct
import Header from "./headerPageMainMahi";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import ContactMe from "./ContactMe";

function Home() {
  const [headerPage, setHeaderPage] = useState(null);
  const [header, setHeader] = useState(null);
  const [aboutme, setAboutMe] = useState(null);
  const [mySkills, setMySkills] = useState(null);
  const [projects, setProjects] = useState(null);
  const [certificates, setCertificates] = useState(null);
  const [contactMe, setContactMe] = useState(null);

  const location = useLocation(); // Use useLocation here
  const access = location.state?.access; // Get access from the location state

  // Create refs for the sections
  const comp1Ref = useRef(null);
  const comp2Ref = useRef(null);
  const comp3Ref = useRef(null);
  const comp4Ref = useRef(null);
  const comp5Ref = useRef(null);
  const comp6Ref = useRef(null);
  const comp7Ref = useRef(null);

  return (
    <>
      <HeaderPage
        comp1Ref={comp1Ref}
        comp2Ref={comp2Ref}
        comp3Ref={comp3Ref}
        comp4Ref={comp4Ref}
        comp5Ref={comp5Ref}
        comp6Ref={comp6Ref}
        comp7Ref={comp7Ref}
      />
      <div ref={comp1Ref}>
        <Header />
      </div>
      <div ref={comp2Ref}>
        <AboutMe />
      </div>
      <div ref={comp3Ref}>
        <MySkills />
      </div>
      <div ref={comp4Ref}>
        <Projects />
      </div>
      <div ref={comp5Ref}>
        <Certificates />
      </div>
      <div ref={comp6Ref}>
        <ContactMe />
      </div>
      <Routes>
        <Route path="/Home" element={<Header />} />
        <Route path="/aboutMe" element={<AboutMe aboutme={aboutme} />} />
        <Route path="/mySkills" element={<MySkills mySkills={mySkills} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/certificates" element={<Certificates certificates={certificates} />} />
        <Route path="/contactMe" element={<ContactMe contactMe={contactMe} />} />
      </Routes>
    </>
  );
}

export default Home;
