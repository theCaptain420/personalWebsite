import fakeData from './fakecountJson.json'
export default function countGithubStreak():number{
    //https://github-contributions-api.herokuapp.com/thecaptain420/activity
    for(var propt in fakeData.data){
        console.log(propt)
    }
    return 0;
}