import * as React from 'react';
import './projectStyle.css'

type props={
    title:string
}

export default ({title}:props)=>{
    return(
        <div>
            <p>
                {title}
            </p>
        </div>
    )
}
