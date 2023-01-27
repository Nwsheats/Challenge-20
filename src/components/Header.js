import React from 'react';
import '../styles/Header.css';

const styles = {
    headerBg: {
        background: '#b71775',
        display: "flex",
        justifyContent: "space-between",
        padding: "1%",
        backgroundColor: "#2e2d30",
        color: "#fff",
      },
        headerFont: {
        fontSize: '100px',
        fontFamily: "Arial, Helvetica, sans-serif"
    },
  };


function Header() {
    return (
        <header style={styles.headerBg} className="header">
            <h1 style={styles.headerFont}>Welcome</h1>
        </header>
    )
}


export default Header;
