import React from 'react';
import image from '../images/GitHub.png';
import image2 from '../images/linkedin.png';
import image3 from '../images/stackoverflow.png';

const styles = {
    footerBg: {
      background: '#6b6b6b',
      display: 'flex',
      flexDirection: 'row',
    },
    footerDiv: {
      fontColor: 'white',
      width: '75%',
      border: '1px solid'
    },
    avatar: {
      border: '3px solid #6b6b6b',
      marginLeft: '850px',
      borderRadius: '50%',
      width: "42px",
      height: "42px",
    },
    avatar2: {
      border: '3px solid #6b6b6b',
      marginLeft: '10px',
      borderRadius: '50%',
      width: "42px",
      height: "42px",
    }
  };


function Footer() {
    return (
        <footer style={styles.footerBg} className="footer">
            <div>
            <div>
            <a href="https://github.com/Nwsheats/"><img style={styles.avatar} src={image} 
            alt="GitHub"></img></a>
            <a href="https://www.linkedin.com/in/nathan-sheats-87147573/"><img style={styles.avatar2} src={image2} 
            alt="LinkedIn"></img></a>
            <a href="https://stackoverflow.com/users/21121500/nodewinjersnake"><img style={styles.avatar2} src={image3} 
            alt="StackOverflow"></img></a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
