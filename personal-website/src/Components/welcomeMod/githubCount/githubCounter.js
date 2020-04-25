var fakeData = require('./fakecountJson.json') 

 function countGithubStreak(){
    //https://github-contributions-api.herokuapp.com/thecaptain420/activity
    let daysCommited = 1;
    let daysNotCommited = 0;

    let dataMonths=fakeData.data[2020];

    Object.keys(dataMonths).forEach(month =>{
        Object.keys(dataMonths[month]).forEach(day=>{
            if(dataMonths[month][day]==true){
                daysCommited+=1;
            }else{
                daysNotCommited+=1;
            }
        })
    })

    let dataToArrayMonth = Object.keys(dataMonths)
    for(let i = dataToArrayMonth.length-1; i>=0; i--){
        console.log(dataToArrayMonth[i])
    }

    return 0;
}
countGithubStreak();