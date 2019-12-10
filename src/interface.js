$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  updateTemperature(); // update view
});

$('#temperature-down').on('click', function() {
  thermostat.down();
  updateTemperature();
});

$('#temperature-reset').on('click', function() {
  thermostat.resetCurrentTemperature();
  updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.switchOnPowerSavingMode();
  $('#powersaving-status').text('ON')
  updateTemperature();
})

$('#powersaving-off').click(function() {
  thermostat.switchOffPowerSavingMode();
  $('#powersaving-status').text('OFF')
  updateTemperature();
})

function updateTemperature() {  //refactored code
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
};

// $('#select-city').submit(function(event) {
//   event.preventDefault();
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp);
//   })
// })

function displayWeather(city) {           //refactored code
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric'
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#city-name').text(data.name);
  })
}

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})


});
