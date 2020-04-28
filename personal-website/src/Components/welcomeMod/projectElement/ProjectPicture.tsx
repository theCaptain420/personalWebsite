import * as React from 'react';
import './projectStyle.css'

type Props={
    picRef:string
}

export default ({picRef}:Props)=>{
    return(
        <div>
            <img src={process.env.PUBLIC_URL+"/"+picRef} className="projectPicture" alt="Projects"/>
        </div>
    )
}
