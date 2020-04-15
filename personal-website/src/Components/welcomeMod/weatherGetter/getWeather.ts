export async function getWeather() {
    let url: string = "https://www.metaweather.com/api/location/554890/"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    let responseTemp = await fetch(proxyurl+url,{
        headers:{
            'Content-Type': 'application/json',
            "XMLHttpRequest":"X-Requested-With"
        }
    }).then(resp => resp.json()).then(respJSON => respJSON.consolidated_weather[0].the_temp).catch(err=>console.log(err))

    responseTemp=roundTemp(responseTemp);

    return responseTemp


}

function roundTemp(temperature:number):number{
    let roundedNumber:number;
    roundedNumber=Math.round(temperature)
    return roundedNumber;
}

