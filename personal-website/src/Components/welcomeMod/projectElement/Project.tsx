import * as React from 'react';
import ProjectLink from './ProjectLink'
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
                {title}
            </p>
            
        </div>
    )
}
