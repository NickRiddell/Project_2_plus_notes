var populateDropdown = function(returnID, selectID, flights, amount){
  if(flights){
    flightDropdown(returnID, selectID, flights);
  }else{
    numberDropdown(returnID, selectID, amount);
  }
}

var flightDropdown = function(returnID, selectID, flights){
  var select = document.querySelector("#" + returnID + selectID + "-select");
  var names = [];
  for (var i = 0; i < flights.length; i++) {
    var flight = flights[i];
    if(!names.includes(flight[selectID])){
      var option = document.createElement("option");
      option.innerText = flight[selectID];
      select.appendChild(option);
      names.push(flight[selectID]);
    }
  }
}

var numberDropdown = function(returnID, selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + returnID + selectID + "-select");
  for (var i = 0; i < amount; i++) {
    var option = document.createElement("option");
    option.innerText = i + 1;
    select.appendChild(option);
  }
}

module.exports = {
  populateDropdown
}











