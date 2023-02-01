import React from 'react';
import TestResume from './TestResume.pdf';

const styles = {
  divZero: {
    backgroundColor: '#5CC8FF',
    display: 'flex',
    height: '700px',
  },
  divOne: {
    backgroundColor: '#5CC8FF',
    justifyContent: 'center',
    height: '650px',
    width: '100%',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '20px',
  },
  divTwo: {
    alignText: 'center',
    width: '65%'
  },
  avatar: {
    border: '3px solid',
    marginLeft: '10px',
    borderRadius: '50%',
    width: "80px",
    height: "80px"
  },
  h1: {
    marginLeft: '10px',
  },
  h3: {
    marginLeft: '10px',
  },
  li: {
    marginLeft: '20px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  h4: {
    marginLeft: '10px',
    marginBottom: '5px'
  }
}

export default function Resume() {
  return (
    <div style={styles.divZero}>
    <div style={styles.divOne}>
    <div style={styles.divTwo}>
      <h1 style={styles.h1}><u>Resume</u></h1>
      <h4 style={styles.h4}>Download my <a href={TestResume} download="NathanResume.pdf" target="_blank" rel="noreferrer">resume</a></h4>
      <h3 style={styles.h3}>Front-End Proficiencies:</h3>
        <li style={styles.li}>HTML</li>
        <li style={styles.li}>CSS</li>
        <li style={styles.li}>JavaScript</li>
        <li style={styles.li}>jQuery</li>
        <li style={styles.li}>Bootstrap</li>
        <li style={styles.li}>React</li>
      <h3 style={styles.h3}>Back-End Proficiencies:</h3>
        <li style={styles.li}>Node.js</li>
        <li style={styles.li}>Express.js</li>
        <li style={styles.li}>SQL</li>
        <li style={styles.li}>MongoDB</li>
        <li style={styles.li}>Object-Relational Mapping</li>
        <li style={styles.li}>Model-View Controller</li>
    </div>
    </div>
    </div>
  );
}