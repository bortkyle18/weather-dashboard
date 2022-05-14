var zipCode = function() {
    var zipEnter = $("#zip").val();
    
    var foodList = $("<li>")
        .text(zipEnter);

    $("#foodLi").append(foodList);
};


$("#button").on("click",zipCode);

// var zipEnter = $("#zip").val();
// $(".btn").on("click",zipCode(zipEnter));

// var clientID = "Sw9ADFQMdRTFnIeMSqyPcg";
// var APIkey = "67mqRNvaaHn5QdfWrCTna5d97oAiv8E-L2rhNIQ0CfS9TIqsqV-dmw9UJJ6KmHlWW_Od--P0iRNlN3ujxHB0ILtCZGR-sKAUtkGgRXIf7MZqihLIq8E3_9kluVJ8YnYx";


// var getYelpAPI = function() {
//     fetch("https://api.yelp.com/v3/businesses/search");
// };

// var findFood = function(zip, foodType) {
//     // format the github api url
//     var food = 
//         businesses[i].location.zip_code && businesses[i].categories[i].title
    

//     // make a request to the url
//     fetch(apiUrl).then(function(response) {
//         response.json().then(function(data) {
//         console.log(data);
//         });
//     });
// };

