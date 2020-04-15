export async function getWeather() {
    let url: string = "https://www.metaweather.com/api/location/554890/"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    let responseTemp = await fetch(proxyurl+url,{
        headers:{
            'Content-Type': 'application/json',
            "XMLHttpRequest":"X-Requested-With"
        }
    }).then(resp => resp.json()).then(respJSON => respJSON.consolidated_weather[0].the_temp)

    //let tempPrint = responseTemp.toString()
    //console.log(tempPrint)
    return responseTemp


}

