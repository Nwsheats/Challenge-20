import React from 'react';
import '../styles/Nav.css';
import '../styles/Header.css';
import image from '../images/abstract.png';

const styles = {
  navStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    height: '100px',
    padding: '2%',
    listStyleType: 'none'
  },
  navFont: {
    fontSize: '40px',
  }
};

const stylesHeader = {
  divBg: {
      display: 'flex',
      flexDirection: 'row',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: '2000px',
      height: '200px',
      width: '100%',
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
      fontSize: '50px',
      fontFamily: "Arial, Helvetica, sans-serif",
      alignSelf: "flex-start",
  },
};


export function Header() {
  return (
      <div style={stylesHeader.divBg} className='divBg'>
      <header style={stylesHeader.headerBg} className="header">
          <h3 style={stylesHeader.headerFont}>Nathan Sheats</h3>
      </header>
      </div>
  )
}

  
export function Nav({ currentPage, handlePageChange }) {
    return (
      <ul style={styles.navStyle} className="nav nav-tabs">
        <li style={styles.navFont} className="nav-item">
          <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} 
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            About Me
          </a>
        </li>
        <li style={styles.navFont} className="nav-item">
          <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </li>
        <li style={styles.navFont} className="nav-item">
          <a href="#Contact"
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li style={styles.navFont} className="nav-item">
          <a href="#resume"
  
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
      </ul>
    );
  }
