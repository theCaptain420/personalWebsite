import * as React from 'react';
import './projectStyle.css'

type LinkProps={
    link:string
}

export default ({link}:LinkProps)=>{
    return(
        <div>
            <button className="linkButton" onClick={()=>window.open(link)}>
                open project here!
            </button>
        </div>
    )
}
