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

    //-------------------------------------------


    //------------ SEARCH LOCATION ----------------

    function SearchLocation(e) {

        var searchLocationInput = {
            query: 'Karachi',
            format: 'JSON',
            timezone: 'yes',
            popular: '',
            num_of_results: '',
            callback: 'SearchLocationCallback'
        };

        JSONP_SearchLocation(searchLocationInput);
        e.preventDefault();
    }

    function SearchLocationCallback(searchLocation) {

        output = "<br/> Area Name: " + locationSearch.search_API.result[0].areaName[0].value;
        output += "<br/> Country: " + locationSearch.search_API.result[0].country[0].value;
        output += "<br/> Latitude: " + locationSearch.search_API.result[0].latitude;
        output += "<br/> Longitude: " + locationSearch.search_API.result[0].longitude;
        output += "<br/> Population: " + locationSearch.search_API.result[0].population;
        output += "<br/> Region: " + locationSearch.search_API.result[0].region[0].value;

        resultContainer.empty();
        resultContainer.html(output);

    }

    //-------------------------------------------

    //------------ TIME ZONE ----------------

    function GetTimeZone(e) {

        var timeZoneInput = {
            query: 'Karachi',
            format: 'JSON',
            callback: 'TimeZoneCallback'
        };

        JSONP_TimeZone(timeZoneInput);
        e.preventDefault();
    }

    function TimeZoneCallback(timeZone) {

        output = "<br/> Local Time: " + timeZone.data.time_zone[0].localtime;
        output += "<br/> Time Offset: " + timeZone.data.time_zone[0].utcOffset;

        resultContainer.empty();
        resultContainer.html(output);

    }

    //-------------------------------------------


    //------------ MARINE WEATHER ----------------

    function GetMarineWeather(e) {

        var marineWeatherInput = {
            query: '45,-2',
            format: 'JSON',
            fx: '',
            callback: 'MarineWeatherCallback'
        };

        JSONP_MarineWeather(marineWeatherInput);
        e.preventDefault();
    }

    function MarineWeatherCallback(marineWeather) {

        output = "<br/> Date: " + marineWeather.data.weather[0].date;
        output += "<br/> Min Temp (c): " + marineWeather.data.weather[0].mintempC;
        output += "<br/> Max Temp (c): " + marineWeather.data.weather[0].maxtempC;
        output += "<br/> Cloud Cover: " + marineWeather.data.weather[0].hourly[0].cloudcover;

        resultContainer.empty();
        resultContainer.html(output);

    }

    //-------------------------------------------