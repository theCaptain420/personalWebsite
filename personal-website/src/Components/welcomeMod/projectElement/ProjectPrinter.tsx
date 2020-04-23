import * as React from 'react';
import Project from './Project'
import './projectStyle.css'
import projects from './myProjects.json'

export default () => {
    const projectsArray = projects.projects;

    const PrintedListofProjects = projectsArray.map(element => 
        <Project buttonText={element.linkText} title={element.title} description={element.description} link={element.link} pictureRef={element.pictureRef} />
    );

    return (
        <div>
            {PrintedListofProjects}
        </div>
    );
}
