var getData = require('./getData.js');
var views = require('./views.js');
var displayFlights = views.displayFlights;
var displayHotels = views.displayHotels;

var flights = [];
var hotels = [];

window.onload = function(){
  var departure_dropdown = document.getElementById('departure-select');
  var arrival_dropdown = document.getElementById('arrival-select');
  console.log('loaded');
  getData(flights, hotels, function(){
    console.log("flights: ", flights);
    var goButton = document.querySelector('#go')
    goButton.type = 'button';
    goButton.onclick = function(event){
      event.preventDefault();
      if(departure_dropdown.selectedIndex != "0" && arrival_dropdown.selectedIndex != "0" && document.querySelector("#date-input").value !=""){
        console.log(document.querySelector('#date-input').value);
        views.populateFlightsHotelsArray(flights, hotels);
        displayFlights(displayHotels);
      }
    }
  });
}