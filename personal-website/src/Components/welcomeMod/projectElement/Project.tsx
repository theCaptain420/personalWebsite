import * as React from 'react';
import ProjectLink from './ProjectLink'
import ProjectText from './ProjectText'
import ProjectPicture from './ProjectPicture'
import './projectStyle.css'


type ProjectProps = {
    title: string,
    description: string,
    pictureRef: string,
    link: string
}


export default ({ title, description, pictureRef, link }: ProjectProps) => {
    return (
        <div className="mainProjectClass">
            <div id="leftProjectBox">
                <ProjectPicture picRef={pictureRef} />
            </div>
            <div id="rightProjectBox">
                <ProjectText text={description} title={title} />
                <ProjectLink link={link} />
            </div>
        </div>
    )
}
