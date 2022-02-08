//import files
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dino-service.js';
//import WeatherService from './weather-service.js'

$(document).ready(function() {
  $('#getDinoIpsum').click(function() {
    let words = $('#words').val();
    let promise = DinoService.showDino(words);
    promise.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i <= body.length; i++) {
        console.log(body[i])
        $("#showTrexIpsum").append(`${body[i].join()}`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
