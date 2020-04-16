import * as React from 'react';
import ProjectLink from './ProjectLink'
import ProjectTitle from './ProjectTitle'
import ProjectText from './ProjectText'
import ProjectPicture from './ProjectPicture'
import './projectStyle.css'


type ProjectProps = {
    title:string,
    description:string,
    pictureRef:string,
    link:string
}


export default ({title,description,pictureRef,link}:ProjectProps)=>{
    return(
        <div>
            <p>
                
            </p>
            <ProjectLink link={link} />
        </div>
    )
}
