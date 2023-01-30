import React from 'react';
import '../styles/Nav.css';

const styles = {
    navStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '60%',
      height: '100px',
      padding: '2%',
    },
    navFont: {
      fontSize: '30px',
    }
  };
  
  function Nav() {
    return (
      <div style={styles.navStyle} className="nav">
        <a style={styles.navFont} href="/">About Me</a>
        <a style={styles.navFont} href="/">Portfolio</a>
        <a style={styles.navFont} href="/">Contact</a>
        <a style={styles.navFont} href="/">Resume</a>
      </div>
    );
  }



export default Nav;
