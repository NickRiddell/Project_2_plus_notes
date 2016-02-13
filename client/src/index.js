var departureDisplayDropdown = function(nameList) {
  for (var i = 0; i < nameList.length; i++) {
    var option = document.createElement("option");
    option.innerText = nameList[i];
    var select = document.querySelector("select#departure");
    select.appendChild(option);
  }
}

var arrivalDisplayDropdown = function(nameList) {
  for (var i = 0; i < nameList.length; i++) {
    var option = document.createElement("option");
    option.innerText = nameList[i];
    console.log(option.innerText);
    var select = document.querySelector("select#arrival");
    console.log(select);
    select.appendChild(option);
  }
}


window.onload = function(){
  console.log('loaded');
  var url = 'https://raw.githubusercontent.com/MichaelMacLeod/project_2/develop/flight_data.json';
  var request = new XMLHttpRequest();
  var cityNameList = ["Edinburgh"];
  var arrivalCityNameList = ["Melbourne", "Canberra", "Sydney"];
  var departure_dropdown = document.getElementById('departure');
  var arrival_dropdown = document.getElementById('arrival');
  request.open('GET', url);


  request.onload = function() { 
    if (request.status === 200) { 
      console.log("Got the DATA");
      appData = JSON.parse(request.responseText); 
      console.log(appData);
      console.log(request.responseText)
    }
  }
  request.send(null)

  departureDisplayDropdown(cityNameList);
  arrivalDisplayDropdown(arrivalCityNameList);

  departure_dropdown.onchange = function() {
    var cityName = this.value;
    var cityIndex = null;

    for (index in cityNameList) {
      var testCityName = cityNameList[index];
      if (testCityName === cityName) {
        var cityIndex = index;
        console.log(cityName);
      }
    }
  }

  arrival_dropdown.onchange = function() {
    var cityName = this.value;
    var cityIndex = null;

    for (index in cityNameList) {
      var testCityName = cityNameList[index];
      if (testCityName === cityName) {
        var cityIndex = index;
        console.log(cityName);
      }
    }
  }

}
