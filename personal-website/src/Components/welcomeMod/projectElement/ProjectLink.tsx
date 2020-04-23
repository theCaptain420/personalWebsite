import * as React from 'react';
import './projectStyle.css'

type LinkProps={
    link:string,
    buttonText:string
}

export default ({link,buttonText}:LinkProps)=>{
    return(
        <div>
            <button className="linkButton" onClick={()=>window.open(link)}>
                {buttonText}
            </button>
        </div>
    )
}
