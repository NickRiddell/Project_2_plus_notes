var Map = function(latLng, zoomNumber) {
  console.log(zoomNumber);
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoomNumber
  })
  console.log(this.googleMap);
}

  Map.prototype = {
  addMarker: function(latLng, title, icon) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title,
      icon: icon
    });
    return marker;
  },
  setCentre: function(latLng) {
      this.googleMap.setCenter(latLng);
    },
  addInfoWindow: function(latLng, title, icon) {
    var marker = this.addMarker(latLng, title, icon);
    marker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: this.title
      });
      infoWindow.open(this.map, marker);
    });
  }
}


module.exports = Map;