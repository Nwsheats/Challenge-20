import React from 'react';
import '../styles/Projects.css';
import image from '../images/triangles.jpg';
import image2 from '../images/collage.jpg';


const projectLink = []

const styles = {
    divStyle: {
        display: "flex",
    },
    projectStyle: {
        display: 'flex',
        border: '1px solid',
        height: 'auto',
        width: '80%',
        backgroundImage: `url(${image})`
    },
    projectImage: {
        width: '80%',
        height: '1000px',
        border: '5px solid #817fff',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    },
    projectFont: {
        fontSize: '20px'
    },
    secondDivStyle: {
        background: '',
        border: '1px solid'
    }
}

const projectNames = [
    {
    name: "project1",
    imgLink: image
    },
    {
    name: "project2",
    imgLink: image2
    }
]



function Projects() {
    return (
        <div>
        {projectNames.map((project) =>        
        <div style={{backgroundImage: `url(${project.imgLink})`}} className="projectDiv">
        <img style={styles.projectImage} src={project.imgLink} alt=''></img>
        <div style={styles.secondDivStyle} className="secondDiv">
        <h3 style={styles.projectFont} className="pFont">{project.name}</h3>
        <h5>Project</h5>
        </div>
        </div>)}
        </div>
    )
}


export default Projects;
