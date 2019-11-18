// =========================VARIBLES===========================
var cities = [];

// =========================FUNCTIONS===========================

//Function that stores userInput
$(".add-city").on("click", function(event){
    event.preventDefault();
    console.log("I was pressed");

    //Grab userInput
    var city = $("#userInput").val().trim();
    console.log("The user wants to know weather information for " + city + ".");

    //put city into cities array
    cities.push(city);
    console.log(cities);
});