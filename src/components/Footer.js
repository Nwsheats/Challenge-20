import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerBg: {
      background: '#6b6b6b',
      display: 'flex',
      textAlign: 'center',
    },
    footerFont: {
      fontSize: '15px',
      fontColor: 'white'
    },
  };


function Footer() {
    return (
        <footer style={styles.footerBg} className="footer">
            <p style={styles.footerFont}>created by Nathan Sheats</p>
        </footer>
    )
}

export default Footer;
