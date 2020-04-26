import * as React from 'react';
import countGithubStreak from './githubCounter'

type GithubState = {
    githubCount:string
}

export default class WeatherPrinter extends React.Component<{},GithubState> {
    async printTheCount(){
        try{
            const streak = countGithubStreak();
            await streak.then(tempData => this.setState({githubCount:tempData}))
        }catch(err){
            console.log(err)
            this.setState({githubCount:"Streak couldnt be gotten"})
        }
    }  

    componentWillMount(){
        this.setState({githubCount:"loading"})
        this.printTheCount();
    }

    render(){
    return(
        <div>
            <p >
                test
                {this.state.githubCount}
            </p>
        </div>
    )
}
}
