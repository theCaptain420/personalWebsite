export async function getWeather(){
    let url: string = "https://www.metaweather.com/api/location/554890/"
    let responseTemp = await fetch(url).then(resp=>resp.json()).then(respJSON => respJSON.the_temp )
    console.log(responseTemp)
    //let tempPrint = responseTemp.toString()
    //console.log(tempPrint)
    return "te"


}

