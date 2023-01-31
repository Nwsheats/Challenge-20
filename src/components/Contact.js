import React from 'react';

const styles = {
  divZero: {
    backgroundColor: '#5CC8FF',
    display: 'flex',
    height: '700px',
    width: '100%',
  },
  divOne: {
    backgroundColor: '#5CC8FF',
    display: 'inline-block',
    height: '650px',
    width: '100%',
    marginLeft: '150px',
    marginRight: '20px',
    marginTop: '20px',
    border: '1px solid'
  },
  divTwo: {
    border: '1px solid',
    display: 'inline-block',
    width: '95%',
    height: '550px'
  },
  inputClass: {
    display: "inline-block",
    margin: '10px'
  },
  textareaClass: {
    height: '300px',
    width: '500px',
    margin: '10px',
  },
  labelFont: {
    fontSize: '20px',
    fontWeight: 'bold',
    
  }
}


export default function Contact() {
  return (
    <div style={styles.divZero}>
    <div style={styles.divOne} className="container">
    <h1>Contact</h1>
    <form style={styles.divTwo} action="action_page.php">
    <label style={styles.labelFont} for="name">Name: </label>
    <br></br>
    <input style={styles.inputClass} type="text" id="name" name="name" placeholder="Your name"></input>
    <br></br>
    <label style={styles.labelFont} for="email">Email: </label>
    <br></br>
    <input style={styles.inputClass} type="text" id="email" name="email" placeholder="Your email address"></input>
    <br></br>
    <label style={styles.labelFont} for="message">Message:</label>
    <br></br>
    <textarea style={styles.textareaClass} id="message" name="message"></textarea>
    <br></br>
    <input style={styles.inputClass} type="submit" value="Submit">
    </input>
    </form>
    </div>
    </div>
    );
}