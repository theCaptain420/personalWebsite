import * as React from 'react';
import countGithubStreak from './githubCounter'

type props={
}

export default ({}:props)=>{
    
    function handleclick(){
        console.log(countGithubStreak())
    }

    return(
        <div>
            <p >
                <button onClick={handleclick}>
                    lol
                </button>
            </p>
        </div>
    )
}
