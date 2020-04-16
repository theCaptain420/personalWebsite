import * as React from 'react';
import './projectStyle.css'

type LinkProps={
    link:string
}

export default ({link}:LinkProps)=>{
    return(
        <div>
            <p>
                {link}
            </p>
        </div>
    )
}
