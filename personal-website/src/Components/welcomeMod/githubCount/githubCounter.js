var fakeData = require('./fakecountJson.json') 

 function countGithubStreak(){
    //https://github-contributions-api.herokuapp.com/thecaptain420/activity
    let daysCommited = 0;
    let daysNotCommited = 0;

    let dataMonths=fakeData.data[2020];

    for(var month in fakeData.data[2020][month]){
        console.log(month)
        for(var day in month[day]){
            console.log(day)
            
        }
    }


    Object.keys(dataMonths).forEach(month =>{
        console.log(month)
        Object.keys(month).forEach(day={
            console.log(day)
        })
    })


    return 0;
}
countGithubStreak();