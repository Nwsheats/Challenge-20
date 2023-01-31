import React from 'react';
import '../styles/Header.css';
import Nav from './Nav';
import image from '../images/abstract.png';

const styles = {
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


function Header() {
    return (
        <div style={styles.divBg} className='divBg'>
        <header style={styles.headerBg} className="header">
            <h3 style={styles.headerFont}>Nathan Sheats</h3>
        </header>
        </div>
    )
}


export default Header;
