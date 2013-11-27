function localizar(){

    navigator.geolocation.getCurrentPosition(datos,fallo);
    
    function datos(pos){
        var latitud = pos.coords.latitude;
        var longitud = pos.coords.longitude;
        var accuracy = pos.coords.accuracy;
        var altitude = pos.coords.altitude;
        var position = latitud +','+ longitud;
        GetLocalWeather(position);
    };

    function fallo(error){
        alert("No es posible localizar tu posición " + error);
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
    console.log(localWeather.data);

    output = "<br/> Cloud Cover: " + localWeather.data.current_condition[0].cloudcover;
    output += "<br/> Humidity: " + localWeather.data.current_condition[0].humidity;
    output += "<br/> Temp C: " + localWeather.data.current_condition[0].temp_C;
    output += "<br/> Visibility: " + localWeather.data.current_condition[0].weatherDesc[0].value;
    output += "<br/> Observation Time: " + localWeather.data.current_condition[0].observation_time;
    output += "<br/> Pressue: " + localWeather.data.current_condition[0].pressure;

    resultContainer.empty();
    resultContainer.html(output);

}