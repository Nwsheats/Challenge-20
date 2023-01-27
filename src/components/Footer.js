import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerBg: {
      background: '#b71775',
    },
    footerFont: {
      fontSize: '50px',
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
