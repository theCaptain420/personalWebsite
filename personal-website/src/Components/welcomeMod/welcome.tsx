import * as React from 'react';
import './welcome.css'
import WebHeader from '../themeComponents/WebHeader'
import WebFooter from '../themeComponents/WebFooter'
import WeatherPrinter from './weatherGetter/WeatherPrinter'
import IntroText from './IntroText'
import ProjectPrinter from './projectElement/ProjectPrinter'
import ContactMe from "./contactElement/Contact";
import GithubStreak from './githubCount/githubStreak'

export interface IWelcomeIntroProps {
}

export default class WelcomeIntro extends React.Component<IWelcomeIntroProps> {
  public render() {
    return (
      <div className="wholePage">
        <WebHeader/>
        <p className="wHeaderText">
            Velkommen til mit CV <br/>
            --- STADIG UNDER KONSTRUKTION ---
        </p> 
        <p className="wNormalText">
          <WeatherPrinter/>
          <GithubStreak/>
        </p>
        <IntroText></IntroText>
        <ProjectPrinter/>
        <ContactMe/>
        <WebFooter/>
      </div>
    );
  }
}
