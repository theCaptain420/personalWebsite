import * as React from 'react';
import getWeather from './getWeather'

export default ()=>{
    const currentWeather = getWeather;  


    return(
        <div>
            <p>
                {currentWeather}  
            </p>
        </div>
    )
}
