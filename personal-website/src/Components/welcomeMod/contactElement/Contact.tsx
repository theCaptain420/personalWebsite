import * as React from 'react';
import './contactStyle.css'



export default () => {
    return (
        <div className="contactBox">
            <p className="contactTitle">
                Kontakt mig gerne på en af de følgende måder!
            </p>
            <p className="contactText">
               Telefon: +45 28 97 03 12 <br/>
               Email: mads.nielsen@hotmail.com <br/>
               LinkedIn: <a className="contactText" href='https://www.linkedin.com/in/mads-nielsen-768653110/' target="_blank" rel="noopener noreferrer"> 
                 https://www.linkedin.com/in/mads-nielsen-768653110/
               </a>
            </p>
        </div>
    )
}
