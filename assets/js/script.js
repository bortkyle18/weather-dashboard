var clientID = "Sw9ADFQMdRTFnIeMSqyPcg";
var APIkey = "67mqRNvaaHn5QdfWrCTna5d97oAiv8E-L2rhNIQ0CfS9TIqsqV-dmw9UJJ6KmHlWW_Od--P0iRNlN3ujxHB0ILtCZGR-sKAUtkGgRXIf7MZqihLIq8E3_9kluVJ8YnYx";


// var getEventRepo = function() {

//     // Get entered city
//     var cityEnter = $("#city").val();
//     // pull up to 200 responses from the requested city - sorted by date of event
//     var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=" + cityEnter + "&sort=date,asc&apikey=syoZ02A5zn7KOdclO7ZeAyKBCV7U8DK7";

//     $.ajax({
//         type:"GET",
//         url: apiUrl,
//         async:true,
//         dataType: "json",
//         success: function(json) {
//             eventsFound(json._embedded.events);
//             // Parse the response.
//             // Do other things.
//         },
//         error: function(xhr, status, err) {
//             // This time, we do not end up here!
//         }

//     });
// };

var eventLi = function() {
    var eventsFound = function(events) {
        for(var i = 0; i < events.length; i++) {
            var eventList = $("<li>")
            var eventName = $("<a>")
                .attr('target','_blank')
                .attr("href",events[i].url)
                .text(events[i].name);
            var eventDate = $("<p>")
                .text(events[i].dates.start.localDate);

            eventList.append(eventName,eventDate);
    
        $("#eventLi").append(eventList);
        };
    };
    var getEventRepo = function() {

        // Get entered city
        var cityEnter = $("#city").val();
        // pull up to 200 responses from the requested city - sorted by date of event
        var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=" + cityEnter + "&sort=date,asc&apikey=syoZ02A5zn7KOdclO7ZeAyKBCV7U8DK7";
    
        $.ajax({
            type:"GET",
            url: apiUrl,
            async:true,
            dataType: "json",
            success: function(json) {
                eventsFound(json._embedded.events);
                // Parse the response.
                // Do other things.
            },
            error: function(xhr, status, err) {
                // This time, we do not end up here!
            }
    
        });
    };
    getEventRepo();
};

$("#button").on("click",eventLi);


var getYelpAPI = function() {
    fetch("https://api.yelp.com/v3/businesses/search");
};



