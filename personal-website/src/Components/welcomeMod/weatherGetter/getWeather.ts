export function getWeather(){
    let url: string = "https://www.metaweather.com/api/location/554890/"
    let responseTemp = fetch(url).then(resp=>resp.json()).then(respJSON => console.log(respJSON))
    
    console.log(responseTemp)
    //let tempPrint = responseTemp.toString()
    //console.log(tempPrint)
    
   return "te"


}

