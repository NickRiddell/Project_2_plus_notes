var Map = require('./map.js');
var map = undefined;


var markerDropper = function(hotels) {
  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i]
    if(hotel.rendered){
      console.log(hotel);
      var position = {lat: hotel.latlng[0], lng: hotel.latlng[1]}
      map.addMarker(position, hotel.name);
    }
  }
}


var displayMap = function(flight, hotels) {
  var container = document.querySelector('#mapContainer');
  container.innerHTML = "";
  var mapDiv = document.createElement('div')
  mapDiv.id = 'map'
  console.log(flight);
  var center = {lat: flight.arrivalLatLng[0], lng:flight.arrivalLatLng[1]};
  var zoomNumber = 15;
  container.appendChild(mapDiv);

  map = new Map(center, zoomNumber)
  markerDropper(hotels);

}

module.exports = displayMap;