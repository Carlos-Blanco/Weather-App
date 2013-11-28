function localizar(){

    navigator.geolocation.getCurrentPosition(datos,fallo);
    
    function datos(pos){
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        var accuracy = pos.coords.accuracy;
        var altitude = pos.coords.altitude;
        var position = latitude +','+ longitude;
        GetLocalWeather(position);
    };

    function fallo(error){
        alert("No es posible localizar tu posición ");
    };
};

var resultContainer = $('#resultContainer');
var output = '';

//------------ LOCAL WEATHER ----------------

function GetLocalWeather(e) {
    
    console.log(e);

    var localWeatherInput = {
        query: e,
        format: 'JSON',
        num_of_days: '2',
        date: '',
        fx: '',
        cc: '',
        includelocation: '',
        show_comments: '',
        callback: 'LocalWeatherCallback'
    };

    JSONP_LocalWeather(localWeatherInput);
    e.preventDefault();
}

function LocalWeatherCallback(localWeather) {
    
    var code = parseInt(localWeather.data.current_condition[0].weatherCode);
        console.log(localWeather.data);

    switch(code) {
        case 113:
            weatherIcon = "<img src='images/2.svg' >";
            break;
        case 116:
            weatherIcon = "<img src='images/8.svg' >";
            break;
        case 119:
            weatherIcon = "<img src='images/14.svg' >";
            break;
        case 122:
            weatherIcon = "<img src='images/25.svg' >";
            break;
        case 143:
            weatherIcon = "<img src='images/12.svg' >";
            break;
        case 176:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 179:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 182:
            weatherIcon = "<img src='images/17.svg' >"; /* aguanieve */
            break;
        case 185:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 200:
            weatherIcon = "<img src='images/15.svg' >";
            break;
        case 227:
            weatherIcon = "<img src='images/22.svg' >"; /* nieve y viento */
            break;
        case 230:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        case 248:
            weatherIcon = "<img src='images/12.svg' >";
            break;
        case 260:
            weatherIcon = "<img src='images/12.svg' >";
            break;
        case 263:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 266:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 281:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 284:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 293:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 296:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 299:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 302:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 305:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 308:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 311:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 314:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 317:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 320:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 323:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 326:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 329:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        case 332:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        case 335:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        case 338:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        case 350:
            weatherIcon = "<img src='images/24.svg' >";
            break;
        case 353:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 356:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 359:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 362:
            weatherIcon = "<img src='images/17.svg' >";
            break;
        case 365:
            weatherIcon = "<img src='images/18.svg' >";
            break;
        case 368:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 371:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        case 374:
            weatherIcon = "<img src='images/24.svg' >";
            break;
        case 377:
            weatherIcon = "<img src='images/24.svg' >";
            break;
        case 386:
            weatherIcon = "<img src='images/15.svg' >"; /* Lluvia ligera con tormenta */
            break;
        case 389:
            weatherIcon = "<img src='images/15.svg' >"; /* Lluvia moderada con tormenta */
            break;
        case 392:
            weatherIcon = "<img src='images/21.svg' >";
            break;
        case 395:
            weatherIcon = "<img src='images/23.svg' >";
            break;
        default:
            console.log("Error, no de ha obtenido el codigo");
    };

    output = weatherIcon;
    output += "<br/> Cloud Cover: " + localWeather.data.current_condition[0].cloudcover;
    output += "<br/> Humidity: " + localWeather.data.current_condition[0].humidity;
    output += "<br/> Temp C: " + localWeather.data.current_condition[0].temp_C;
    output += "<br/> Visibility: " + localWeather.data.current_condition[0].weatherDesc[0].value;
    output += "<br/> Observation Time: " + localWeather.data.current_condition[0].observation_time;
    output += "<br/> Pressue: " + localWeather.data.current_condition[0].pressure;

    resultContainer.empty();
    resultContainer.html(output);

}