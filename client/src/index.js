var displayDropdown = function(nameList) {
  for (var i = 0; i < nameList.length; i++) {
    var option = document.createElement("option");
    option.innerText = nameList[i];
    var select = document.querySelector("select");
    select.appendChild(option);
  }
}

window.onload = function(){
  console.log('loaded');
  var url = '';
  var cityNameList = ["Edinburgh"];
  var departure_dropdown = document.getElementById('departure');

  displayDropdown(cityNameList);

  departure_dropdown.onchange = function() {
    console.log('here');
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
