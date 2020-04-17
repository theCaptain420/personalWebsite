import * as React from 'react';
import Project from './Project'
import './projectStyle.css'

export default () => {
    const projectsArray = [
        { "title": "Test", "description": "this is a good project made here", "link": "https://github.com/theCaptain420", "pictureRef": "https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
        { "title": "Test", "description": "this is a good project made here", "link": "https://github.com/theCaptain420", "pictureRef": "https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }

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
