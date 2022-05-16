var findCity = function() {
    var getWeatherRepo = function() {
        var cityEnter = $("#cityEnter").val();
        var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityEnter + ",us&limit=1&appid=aadf7ba5904e20d45df6ffe4f624d17b";
        fetch(apiUrl).then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" +  data[0].lat + "&lon=" +  data[0].lon + "&exclude=minutely,hourly&appid=aadf7ba5904e20d45df6ffe4f624d17b").then(function(response) {
                        if (response.ok) {
                            response.json().then(function(data) {
                                console.log(data)
                            displayTodaysWeather(data.current);
                            display5Day(data.daily);
                            });
                        };
                    });
                });
            }
        });
    }
    getWeatherRepo();
};

var displayTodaysWeather = function(data) {
    // clear list
    $(".today").empty()

    var cityEnter = $("#cityEnter").val();
    var currentHeader = $("<h1>")
        .text(cityEnter + "  Today");
    var temp = $("<li>")
        .text(data.temp + " °F");
    var wind = $("<li>")
        .text(data.wind_speed + " mph");
    var humid = $("<li>")
        .text(data.humidity + " %");
    var uv = $("<li>")
        .text(data.uvi);
    
    $(".today").append(currentHeader,temp,wind,humid,uv);

};

var display5Day = function(data) {
    // clear list
    $(".5day").empty()

    var day1Header = $("<h3>")
        .text("Day 1");
    var day1temp = $("<li>")
        .text(data[0].temp.day + " °F");
    var day1wind = $("<li>")
        .text(data[0].wind_speed + " mph");
    var day1humid = $("<li>")
        .text(data[0].humidity + " %");
    var day1uv = $("<li>")
        .text(data[0].uvi);
    
    $("#day1").append(day1Header,day1temp,day1wind,day1humid,day1uv);


    var day2Header = $("<h3>")
        .text("Day 2");
    var day2temp = $("<li>")
        .text(data[1].temp.day + " °F");
    var day2wind = $("<li>")
        .text(data[1].wind_speed + " mph");
    var day2humid = $("<li>")
        .text(data[1].humidity + " %");
    var day2uv = $("<li>")
        .text(data[1].uvi);
    
    $("#day2").append(day2Header,day2temp,day2wind,day2humid,day2uv);


    var day3Header = $("<h3>")
        .text("Day 3");
    var day3temp = $("<li>")
        .text(data[2].temp.day + " °F");
    var day3wind = $("<li>")
        .text(data[2].wind_speed + " mph");
    var day3humid = $("<li>")
        .text(data[2].humidity + " %");
    var day3uv = $("<li>")
        .text(data[2].uvi);
    
    $("#day3").append(day3Header,day3temp,day3wind,day3humid,day3uv);


    var day4Header = $("<h3>")
        .text("Day 4");
    var day4temp = $("<li>")
        .text(data[3].temp.day + " °F");
    var day4wind = $("<li>")
        .text(data[3].wind_speed + " mph");
    var day4humid = $("<li>")
        .text(data[3].humidity + " %");
    var day4uv = $("<li>")
        .text(data[3].uvi);
    
    $("#day4").append(day4Header,day4temp,day4wind,day4humid,day4uv);


    var day5Header = $("<h3>")
        .text("Day 5");
    var day5temp = $("<li>")
        .text(data[4].temp.day + " °F");
    var day5wind = $("<li>")
        .text(data[4].wind_speed + " mph");
    var day5humid = $("<li>")
        .text(data[4].humidity + " %");
    var day5uv = $("<li>")
        .text(data[4].uvi);
    
    $("#day5").append(day5Header,day5temp,day5wind,day5humid,day5uv);
};


$("#button").on("click",findCity);