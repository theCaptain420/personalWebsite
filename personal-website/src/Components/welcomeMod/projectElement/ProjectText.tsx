import * as React from 'react';
import ProjectTitle from './ProjectTitle'
import './projectStyle.css'

type Props={
    text:string,
    title:string
}
export default ({text,title}:Props)=>{
    return(
        <div >
            <ProjectTitle title={title}/>
            <p className="projectDesText">
                {text}
            </p>
        </div>
    )
}
