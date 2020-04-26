var fakeData = require('./fakecountJson.json') 

 export default function countGithubStreak(){
    let account = "thecaptain420"
    
    console.log(getGithubData(account))

    let daysInARowCommited = 0;
    let onTheDayVariable = true;

    let dataMonths=fakeData.data[2020];

    let dataToArrayMonth = Object.keys(dataMonths)
    for(let i = dataToArrayMonth.length; i>0; i--){
        let dataToArrayDay= Object.keys(dataMonths[i])
        for(let k = dataToArrayDay.length; k>0; k--){
            if(dataMonths[i][k]==false){
                if (onTheDayVariable == false){
                    return daysInARowCommited;
                }
                if(onTheDayVariable==true){
                    daysInARowCommited--;
                    onTheDayVariable = false
                }
            }
            daysInARowCommited++; 
        }
    }

    

    return 0;
}
console.log(countGithubStreak()+ " response");


function getGithubData(githubAccount){
    let accountLink = "https://github-contributions-api.herokuapp.com/"+githubAccount+"/activity"
    let data = fetch(accountLink).then(resp => resp.json).catch(err => console.log(err))
    return data;
}


    /*

    let daysCommited = 1;
    let daysNotCommited = 0;

    Object.keys(dataMonths).forEach(month =>{
        Object.keys(dataMonths[month]).forEach(day=>{
            if(dataMonths[month][day]==true){
                daysCommited+=1;
            }else{
                daysNotCommited+=1;
            }
        })
    })*/
