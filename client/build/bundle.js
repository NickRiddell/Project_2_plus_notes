/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map