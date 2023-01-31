import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerBg: {
      background: '#6b6b6b',
      display: 'flex',
    },
    footerDiv: {
      justifyContent: 'center',
      fontColor: 'white',
    },
    footerFont: {
      fontSize: '15px',
      fontWeight: 'bold',
      marginLeft: '1700px'
    },
  };


function Footer() {
    return (
        <footer style={styles.footerBg} className="footer">
            <div style={styles.footerDiv}>
            <p style={styles.footerFont}>created by Nathan Sheats</p>
            </div>
        </footer>
    )
}

export default Footer;
