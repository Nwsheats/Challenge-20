import React from 'react';
import image from '../images/infinity.jpg';

const styles = {
  divZero: {
    backgroundColor: '#5CC8FF',
    display: 'flex',
    height: '850px',
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
  h3: {
    marginLeft: '20px',
}
}

export default function About() {
  return (
    <div style={styles.divZero}>
    <div style={styles.divOne}>
    <div style={styles.divTwo}>
      <h1 style={styles.h1}><u>About Me</u></h1>
      <img style={styles.avatar} src={image} alt="infinity symbol"></img>
      <h3 style={styles.h3}>
        That there
        <br></br>
        That's not me
        <br></br>
        I go
        <br></br>
        Where I please
        <br></br>
        I walk through walls
        <br></br>
        I float down the Liffey
        <br></br>
        I'm not here
        <br></br>
        This isn't happening
        <br></br>
        I'm not here
        <br></br>
        I'm not here
        <br></br>
        In a little while
        <br></br>
        I'll be gone
        <br></br>
        The moment's already passed
        <br></br>
        Yeah, it's gone
        <br></br>
        And I'm not here
        <br></br>
        This isn't happening
        <br></br>
        I'm not here
        <br></br>
        I'm not here
        <br></br>
        Strobe lights and blown speakers
        <br></br>
        Fireworks and hurricanes
        <br></br>
        I'm not here
        <br></br>
        This isn't happening
        <br></br>
        I'm not here
        <br></br>
        I'm not here
        <br></br>
      </h3>
    </div>
    </div>
    </div>
  );
}
