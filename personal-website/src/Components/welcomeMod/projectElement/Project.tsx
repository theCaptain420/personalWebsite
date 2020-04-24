import * as React from 'react';
import ProjectLink from './ProjectLink'
import ProjectText from './ProjectText'
import ProjectPicture from './ProjectPicture'
import './projectStyle.css'


type ProjectProps = {
    title: string,
    description: string,
    pictureRef: string,
    link: string,
    buttonText: string
}


export default ({ title, description, pictureRef, link, buttonText }: ProjectProps) => {
    return (
        <div className="mainProjectClass">
            <div id="projectPictureBox">
                <ProjectPicture picRef={pictureRef} />
            </div>
            <div className="projectTextBox">
                <ProjectText text={description} title={title} />
                <ProjectLink link={link} buttonText={buttonText} />
            </div>
        </div>
    )
}
