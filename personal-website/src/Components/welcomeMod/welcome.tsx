import * as React from 'react';
import './welcome.css'
import WebHeader from '../themeComponents/WebHeader'
import WebFooter from '../themeComponents/WebFooter'
import WeatherPrinter from './weatherGetter/WeatherPrinter'
import IntroText from './IntroText'

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
          Hello, the weather today is
          <WeatherPrinter/>
        </p>
        <IntroText></IntroText>
        <WebFooter/>
      </div>
    );
  }
}
