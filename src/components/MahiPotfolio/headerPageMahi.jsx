import React, { useState } from "react";
import styles from "./header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function PortfolioHeader({ comp1Ref, comp2Ref, comp3Ref, comp4Ref, comp5Ref, comp6Ref }) {
  const [divBig, setDivBig] = useState(false);

  const toggleMenu = () => {
    setDivBig(!divBig);
  };

  const scrollToComponent = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setDivBig(false); // Close menu after clicking
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.firstheadersub} >
          <div className={styles.headerMahi}>
          MAHITHA
            </div>
        </div>
        <div className={styles.firstheadersub}>
          <ul className={styles.listelements}>
            <li><a onClick={() => scrollToComponent(comp1Ref)}>Home</a></li>
            <li><a onClick={() => scrollToComponent(comp2Ref)}>About</a></li>
            <li><a onClick={() => scrollToComponent(comp3Ref)}>Skills</a></li>
            <li><a onClick={() => scrollToComponent(comp4Ref)}>Projects</a></li>
            <li><a onClick={() => scrollToComponent(comp5Ref)}>Certificates</a></li>
            <li style={{ border: "1px solidrgb(23, 185, 33)", padding: "15px" }}>
              <a onClick={() => scrollToComponent(comp6Ref)}>Contact</a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <div className={styles.second}>
            <div className={styles.iconlist} onClick={toggleMenu}>
              {divBig ? <FaTimes color="white" /> : <FaBars color="white" />}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {divBig && (
        <ul className={styles.list2elements}>
          <li onClick={() => scrollToComponent(comp1Ref)}>Home</li>
          <li onClick={() => scrollToComponent(comp2Ref)}>About</li>
          <li onClick={() => scrollToComponent(comp3Ref)}>Skills</li>
          <li onClick={() => scrollToComponent(comp4Ref)}>Projects</li>
          <li onClick={() => scrollToComponent(comp5Ref)}>Certificates</li>
          <li onClick={() => scrollToComponent(comp6Ref)}>Contact</li>
        </ul>
      )}
    </div>
  );
}

export default PortfolioHeader;
