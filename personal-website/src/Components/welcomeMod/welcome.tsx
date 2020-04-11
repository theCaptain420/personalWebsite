import * as React from 'react';
import './welcome.css'
import WebHeader from '../themeComponents/WebHeader'
import WebFooter from '../themeComponents/WebFooter'
export interface IWelcomeIntroProps {
}

export default class WelcomeIntro extends React.Component<IWelcomeIntroProps> {
  public render() {
    return (
      <div className="wholePage">
        <WebHeader/>
        <p className="headerText">
            Welcome to my page
        </p> 

        <p className="normalText">
          hello
        </p>

        <WebFooter/>
      </div>
    );
  }
}
