$(document).ready(function () {
    // =========================VARIBLES===========================
    // Array that holds strings from localStorage
    // var cities = JSON.parse(localStorage.getItem("City"));

    var cities = [];
    // var last = JSON.parse(localStorage.getItem("City"));
    // console.log("We found this array in localStorage: ", last);


    // if (typeof cities !== 'undefined' && cities !== null) {
    //     // cities = JSON.parse(localStorage.getItem("City"));
    //     var cities = [];
    //     console.log(cities);
    // }

    // if (typeof localStorage == null){
    //     var cities = JSON.parse(localStorage.getItem("City"));
    //     // var cities = [];
    //     console.log(cities);
    // }

    // =========================FUNCTIONS===========================

    function startup() {
        //empty cities before adding new cities
        // $("#city-buttons-div").empty();

        // var cities = JSON.parse(localStorage.getItem("City"));
        var last = JSON.parse(localStorage.getItem("City"));
        console.log("We found this array in localStorage: ", last);
        
        //loop through cities array
        for (var i = 0; i < last.length; i++) {
            // varible to create button
            var resultButton = $("<button>");
            // add class and attribute
            resultButton.addClass("city-button");
            resultButton.attr("data-city");
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
            resultButton.attr("data-city");
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
    startup();
    // renderButtons();
});