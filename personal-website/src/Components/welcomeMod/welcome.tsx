import * as React from 'react';
import './welcome.css'

export interface IWelcomeIntroProps {
}

export default class WelcomeIntro extends React.Component<IWelcomeIntroProps> {
  public render() {
    return (
      <div className="header">
        <p className="headerText">
            Welcome to my page
        </p> 
        <p className="normalText">
          hello
        </p>
      
      </div>
    );
  }
}
