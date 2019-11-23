$(document).ready(function () {
    // =========================VARIBLES===========================
    var APIkey = "1fb03cd6dac17b324934023f63ff9654";
    var cities = [];
    // =========================FUNCTIONS===========================

    function displayCurrentWeather(){
        //======Varibles======
        var cityNameDiv = $("<h3>");
        var temp = $("<div>");
        var humidity = $("<div>");
        var windSpeed = $("<div>");
        
        var cityCurrent = $(this).attr("data-city");
        console.log("this was clicked: " + cityCurrent);
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityCurrent + "&units=imperial&appid=" + APIkey;

        // Ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response){
            console.log(response);
        })
    }
    
    function startup() {
        // Array that holds strings from localStorage
        var last = JSON.parse(localStorage.getItem("City"));
        console.log("We found this array in localStorage: ", last);

        //loop through cities array
        for (var i = 0; i < last.length; i++) {
            // varible to create button
            var resultButton = $("<button>");
            // add class and attribute
            resultButton.addClass("city-button");
            resultButton.attr("data-city", last[i]);
            // display city name on button
            resultButton.text(last[i]);
            // put button in div to move button to next line
            var newButtonDiv = $("<div>");
            $(newButtonDiv).append(resultButton);
            $("#city-buttons-lastdiv").prepend(newButtonDiv);
        }
    }

    // Render buttons
    function renderButtons() {
        //empty cities before adding new cities
        $("#city-buttons-div").empty();

        // var cities = JSON.parse(localStorage.getItem("City"));
        // console.log("We found this array in localStorage: ", cities);

        //loop through cities array
        for (var i = 0; i < cities.length; i++) {
            // varible to create button
            var resultButton = $("<button>");
            // add class and attribute
            resultButton.addClass("city-button");
            resultButton.attr("data-city", cities[i]);
            // display city name on button
            resultButton.text(cities[i]);
            // put button in div to move button to next line
            var newButtonDiv = $("<div>");
            $(newButtonDiv).append(resultButton);
            $("#city-buttons-div").prepend(newButtonDiv);
        }
    }

    //Function that stores userInput
    $(".add-city").on("click", function (event) {
        event.preventDefault();
        console.log("I was pressed");
        //Grab userInput
        var city = $("#userInput").val().trim();
        console.log("The user wants to know weather information for " + city + ".");
        //put city into cities array
        cities.push(city);
        console.log(cities);
        // Save button text to localStorage
        localStorage.setItem("City", JSON.stringify(cities));
        renderButtons();
    });


    // Adding a click event listener to all elements with a class of "movie-btn"
    $(document).on("click", ".city-button", displayCurrentWeather);

    // display localstorage after page loads
    startup();
    // renderButtons();
});