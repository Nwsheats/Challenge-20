import React from 'react';
import '../styles/Footer.css';
import image from '../images/GitHub.png';

const styles = {
    footerBg: {
      background: '#6b6b6b',
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid'
    },
    footerDiv: {
      fontColor: 'white',
      width: '75%',
      border: '1px solid'
    },
    footerFont: {
      fontSize: '15px',
      fontWeight: 'bold',
      border: '1px solid'
    },
    avatar: {
      border: '3px solid #6b6b6b',
      marginLeft: '10px',
      borderRadius: '50%',
      width: "42px",
      height: "42px",
      justifyContent: 'center',
    }
  };


function Footer() {
    return (
        <footer style={styles.footerBg} className="footer">
            <div>
            <div>
            <a href=""><img style={styles.avatar} src={image} alt="GitHub"></img></a>
            <p style={styles.footerFont}>created by Nathan Sheats</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
