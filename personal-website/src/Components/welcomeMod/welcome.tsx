import * as React from 'react';
import './welcome.css'
import WebHeader from '../themeComponents/WebHeader'
import WebFooter from '../themeComponents/WebFooter'
import getWeather from './weatherGetter/getWeather'

export interface IWelcomeIntroProps {
}

export default class WelcomeIntro extends React.Component<IWelcomeIntroProps> {
  public render() {
    return (
      <div className="wholePage">
        <WebHeader/>
        <p className="wHeaderText">
            Welcome to my page
        </p> 
        <p className="wNormalText">
          hello, the weather today is <br/>
          {getWeather}
        </p>
        <WebFooter/>
      </div>
    );
  }
}
