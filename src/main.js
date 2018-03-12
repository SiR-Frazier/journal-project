import './styles.css';
import { Entry } from './journal';

$(document).ready(function(){
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    console.log("title");
    var log = $("#log").val();
    var userInput = new Entry(title,log);

    $('#results').append("<li>" + "Title: " + title + "</li>");
    $('#results').append("<li>" + "Vowel: " + userInput.vowelCounter() + "</li>");
    $('#results').append("<li>" + "Consanants: " + userInput.consonantCounter() + "</li>");
    $('#results').append("<li>" + "Word Counter: " + userInput.wordCounter() + "</li>");
    $('#results').append("<li>" + "Teaser: " + userInput.getTeaser() + "</li>");
  });
});
// newEntry.forEach(function(log) {
//   $('#results').append("<li>" + log + "</li>");
// });
