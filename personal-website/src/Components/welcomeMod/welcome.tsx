import * as React from 'react';
import './welcome.css'
import WebHeader from '../themeComponents/WebHeader'
import WebFooter from '../themeComponents/WebFooter'
import WeatherPrinter from './weatherGetter/WeatherPrinter'

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
          <WeatherPrinter/>
        </p>
        <WebFooter/>
      </div>
    );
  }
}
