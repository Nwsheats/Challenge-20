import React from 'react';
import image from '../images/infinity.jpg';

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
    border: '1px solid'
  },
  divTwo: {
    border: '1px solid',
    alignText: 'center',
    width: '65%'
  },
  avatar: {
    border: '3px solid',
    marginLeft: '10px',
    borderRadius: '50%',
    width: "80px",
    height: "80px"
  }
}

export default function About() {
  return (
    <div style={styles.divZero}>
    <div style={styles.divOne}>
    <div style={styles.divTwo}>
      <h1 style={styles.h1}><u>About Me</u></h1>
      <img style={styles.avatar} src={image} alt="infinity symbol"></img>
      <h3>

        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </h3>
    </div>
    </div>
    </div>
  );
}
