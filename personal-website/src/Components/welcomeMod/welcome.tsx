import * as React from 'react';

export interface IWelcomeIntroProps {
}

export default class WelcomeIntro extends React.Component<IWelcomeIntroProps> {
  public render() {
    return (
      <div>
        <p>
            Welcome to my page
        </p>
      </div>
    );
  }
}
