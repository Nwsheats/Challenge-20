import React from 'react';
import '../styles/Projects.css';
import image from '../images/triangles.jpg';


const projectLink = []

const styles = {
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
    "project1", "project2", "project3", "project4", "project5"
]



function Projects() {
    return (
        <div>
        {projectNames.map((project) =>        
        <div class={styles.projectStyle} className="projectDiv">
        <div class={styles.secondDivStyle} className="secondDiv">
        <h3 class={styles.projectFont} className="pFont">{project}</h3>
        <h5>Project</h5>
        </div>
        </div>)}
        </div>
    )
}


export default Projects;
