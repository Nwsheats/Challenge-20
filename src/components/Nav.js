import React from "react";
import "../styles/Nav.css";

const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    height: "100px",
    padding: "2%",
    listStyleType: "none",
  },
  navFont: {
    fontSize: "40px",
  },
};

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navStyle} className="nav nav-tabs">
      <li style={styles.navFont} className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li style={styles.navFont} className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li style={styles.navFont} className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li style={styles.navFont} className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;
