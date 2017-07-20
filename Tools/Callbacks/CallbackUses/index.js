'use strict';

$(document).ready(function (){
  WallClockCallback();
  setInterval(WallClockCallback, 1000);

  // $('#cityForm')
  $('#cityForm').submit(WeatherClickHandler);
  $(document).ajaxError(function(){
    $('#weather').html('Location error...');
  });

});

function WallClockCallback(){
  var wallClockTime = new Date().toString();
  $('#wallclock').html(wallClockTime);
}


function WeatherClickHandler() {
            var base_api = 'http://api.openweathermap.org/data/2.5/weather'
            var city     = '?q=' + $('#city').val();
            var id       = '&APPID=ceef854a5379c3c69f1ea9f39ab17c7e';
            var options  = '&units=imperial';
            var full_url = base_api + city + id + options;

            $.get(
                full_url,
                WeatherCallback,
                'json'
            );
            $('#city').val('');
            $('#weather').html('\n');

            return false;
}

function WeatherCallback(response) {
    var weatherString;
    if (response.main && response.weather && response.weather.length) {
      weatherString = response.name + ': ' + response.main.temp+ 'desgree F, and' + response.weather[0].description;
    }
    $('#weather').html(weatherString);
};

function OneShotClickHandler() {
  var msecs = $('#mseconds').val();
  var startTime = perfomance.now();
  setTimeout(OneShotTimeCallback, msecs, startTime);
  $('#mseconds').val('');
};

function OneShotTimeCallback(startTime) {
  var oneShotString = 'Called after' + Math.trunc((perfomance.now()-startTime)*1000)/1000 + ' milliseconds';
  $('#oneshot').html(oneShotString);
};
