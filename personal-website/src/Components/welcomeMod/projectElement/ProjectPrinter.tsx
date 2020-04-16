import * as React from 'react';
import Project from './Project'
import './projectStyle.css'

export default ()=>{
    let projectsArray=[
        {"title":"Test","discription":"this is a good project made here","link":"google.com","pictureRef":"unknown"}
    ]

    return(
        <div>
            <Project title="helo" description="we" link="whatever" pictureRef="ol" />
        </div>
    )
}
