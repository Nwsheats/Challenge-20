import React, { useState } from "react";
import "../styles/Header.css";
import Nav from "./Nav";
import image from "../images/abstract.png";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const styles = {
  divBg: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "2000px",
    height: "200px",
    width: "100%",
  },
  headerBg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "2%",
    width: "40%",
    color: "#fff",
  },
  headerFont: {
    fontSize: "50px",
    fontFamily: "Segoe UI, Helvetica, sans-serif",
    alignSelf: "flex-start",
  },
};

function Header() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <div style={styles.divBg} className="divBg">
        <header style={styles.headerBg} className="header">
          <h3 style={styles.headerFont}>Nathan Sheats</h3>
        </header>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
    </div>
  );
}

export default Header;
