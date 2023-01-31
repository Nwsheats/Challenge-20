import React from 'react';

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
  },

  h1: {
    
  }
}

export default function About() {
  return (
    <div style={styles.divZero}>
    <div style={styles.divOne}>
    <div style={styles.divTwo}>
      <h1 style={styles.h1}><u>About Me</u></h1>
      <h3>

        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </h3>
    </div>
    </div>
    </div>
  );
}
