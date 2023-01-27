import React from 'react';
import '../styles/Project.css';


const styles = {
    projectStyle: {
        background: '',
    },
    projectFont: {
        fontSize: '20px'
    },
    secondDivStyle: {
        background: '',
    }
}

const projectNames = [
    "project1", "project2", "project3", "project4", "project5"
]

function Project() {
    return (
        <div class={styles.projectStyle} className="projectDiv">
        <div class={styles.secondDivStyle} className="secondDiv">
        <h3 class={styles.projectFont} className="pFont">{projectNames[0]}</h3>
        <h5>Project</h5>
        </div>
        </div>
    )
}


export default Project;
