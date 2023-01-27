import React from 'react';
import '../styles/Nav.css';

const styles = {
    navStyle: {
      background: '#6a1b9a',
      justifyContent: 'flex-center',
    },
  };
  
  function Nav() {
    return (
      <nav style={styles.navStyle} className="nav">
        <a href="/">Welcome</a>
      </nav>
    );
  }



export default Nav;
