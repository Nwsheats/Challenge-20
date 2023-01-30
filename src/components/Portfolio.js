import React from 'react';
import Projects from './Projects'


const styles = {
    portfolioStyle: {
        background: '',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.3em',
        margin: '0',
    containerStyle: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '10px'
    }
    }
}

function Portfolio() {
    return (
        <div class={styles.portfolioStyle} className="portfolio">
            <div class={styles.containerStyle} className="container">
                <Projects />
            </div>
        </div>
    )
}

export default Portfolio;