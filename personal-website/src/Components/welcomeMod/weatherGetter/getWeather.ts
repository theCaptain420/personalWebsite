export async function getWeather() {
    let url: string = "https://www.metaweather.com/api/location/554890/"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    let responseTemps = await fetch(proxyurl+url,{
        headers:{
            'Content-Type': 'application/json',
            "XMLHttpRequest":"X-Requested-With"
        }
    }).then(resp => resp.json()).then(respJSON => respJSON)

    console.log(responseTemps)
    //let tempPrint = responseTemp.toString()
    //console.log(tempPrint)
    let responseTemp="42"
    return responseTemp


}

