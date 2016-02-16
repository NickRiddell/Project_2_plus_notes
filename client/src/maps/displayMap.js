var Map = require('./map.js');


var displayMap = function(flight) {
  var mapDiv = document.createElement('div')
  mapDiv.id = 'map'
  var center = flight.arrivalLatLng;
  var zoomNumber = 15;
  document.querySelector('#mapContainer').appendChild(mapDiv);

  var map = new Map(center, zoomNumber)
}

module.exports = displayMap;