import * as React from 'react';
import Project from './Project'
import './projectStyle.css'

export default () => {
    const projectsArray = [
        { "title": "Test", "description": "this is a good project made here", "link": "google.com", "pictureRef": "unknown" }
    ];

    const PrintedListofProjects = projectsArray.map(element => 
        <Project title={element.title} description={element.description} link={element.link} pictureRef={element.pictureRef} />
    );

    return (
        <div>
            {PrintedListofProjects}
        </div>
    );
}
