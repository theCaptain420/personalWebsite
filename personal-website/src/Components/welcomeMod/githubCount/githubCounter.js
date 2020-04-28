
 export default async function countGithubStreak(){
    let account = "thecaptain420"
    
    let commitData = await getGithubData(account);

    let daysInARowCommited = 0;
    let onTheDayVariable = true;

    let dataMonths=commitData.data[2020];

    let dataToArrayMonth = Object.keys(dataMonths)
    for(let i = dataToArrayMonth.length; i>0; i--){
        let dataToArrayDay= Object.keys(dataMonths[i])
        for(let k = dataToArrayDay.length; k>0; k--){
            if(dataMonths[i][k]===false){
                if (onTheDayVariable === false){
                    return ""+daysInARowCommited;
                }
                if(onTheDayVariable===true){
                    daysInARowCommited--;
                    onTheDayVariable = false
                }
            }
            daysInARowCommited++; 
        }
    }
    return ""+0;
}


async function getGithubData(githubAccount){
    let accountLink = "https://github-contributions-api.herokuapp.com/"+githubAccount+"/activity"
    let corsProxy = "https://cors-anywhere.herokuapp.com/";
    let data = await fetch(corsProxy+accountLink,{
        headers:{
            'Content-Type': 'application/json',
            "XMLHttpRequest":"X-Requested-With"
        }
    }).then(resp => resp.json()).catch(err => console.log(err))
    return data;
}
