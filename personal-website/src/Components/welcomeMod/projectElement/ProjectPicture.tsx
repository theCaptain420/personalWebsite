import * as React from 'react';
import './projectStyle.css'

type Props={
    picRef:string
}

export default ({picRef}:Props)=>{
    return(
        <div>
            <img src={picRef} className="projectPicture"/>
        </div>
    )
}
