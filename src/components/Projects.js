import React from 'react';
import '../styles/Projects.css';
import image from '../images/gears.jpg';
import image2 from '../images/bricks.jpg';
import image3 from '../images/ocean.jpg';
import image4 from '../images/sunset.jpg';
import image5 from '../images/circles.jpg';
import image6 from '../images/colors.jpg';


const projectNames = [
    {
    name: "Back-End Social Network API",
    imgLink: image,
    imgURL: "https://github.com/Nwsheats/Social-Network-API"
    },
    {
    name: "Go Aware",
    imgLink: image2,
    imgURL: "https://github.com/Nwsheats/Go-Aware"
    },
    {
    name: "E-Commerce Backend",
    imgLink: image3,
    imgURL: "https://github.com/Nwsheats/E-Commerce-Back-End"
    },
    {
    name: "Employee Tracker",
    imgLink: image4,
    imgURL: "https://github.com/Nwsheats/Employee-Tracker"
    },
    {
    name: "Note Taker App",
    imgLink: image5,
    imgURL: "https://github.com/Nwsheats/Note-Taker"
    },
    {
    name: "Team Profile Generator",
    imgLink: image6,
    imgURL: "https://github.com/Nwsheats/Team-Profile-Generator"
    },
]

const styles = {
    divStyle: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        border: '1px solid',
        width: '100%',
        flexWrap: 'wrap',
        background: '#5CC8FF'
    },
    projectStyle: {
        display: 'flex',
        flexDirection: 'column',
        border: '5px solid #817fff',
        margin: '75px',
        height: '300px',
        width: '25%',
    },
    projectFont: {
        fontSize: '20px',
        border: '1px solid',
    },
    secondDivStyle: {
        border: '1px solid',
        height: '300px',
        width: '100%',
    }
}




function Projects() {
    return (
        <div style={styles.divStyle}>
        {projectNames.map((project) =>
        <div style={styles.projectStyle}>
        <div style={styles.secondDivStyle}>
        <div><a href={project.imgURL}><img style={{backgroundImage: `url(${project.imgLink})`}} 
        className="projectDiv" src={project.imgLink} alt='' width='100%' height='300px'>
        </img></a>
        </div>
        </div>
        </div>)}
        </div>
    )
}


export default Projects;
