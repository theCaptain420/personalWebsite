import * as React from 'react';
import {getWeather} from './getWeather'

type WeatherState = {
    temp:string
}

export default class WeatherPrinter extends React.Component<{},WeatherState> {
    async printTheWeather(){
        try{
            const temperature = getWeather();
            await temperature.then(tempData => this.setState({temp:tempData}))
        }catch(err){
            console.log(err)
            this.setState({temp:"temperature couldnt be gotten"})
        }
    }

    componentWillMount(){
        this.setState({temp:"loading"})
        this.printTheWeather();
    }

    render() {
    return (
      <div >
          Vejret idag: {this.state.temp} grader celcius
      </div>
    );
  }
}

