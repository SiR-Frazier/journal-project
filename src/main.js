import './styles.css';
import { Entry } from './journal';

$(document).ready(function(){
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var log = $("#log").val();
    var newEntry = new Entry(title,log);

    $('#results').append("<li>" + "Vowel: " + newEntry.vowelCounter() + "</li>");
    $('#results').append("<li>" + "Consanants: " + newEntry.consonantCounter() + "</li>");
    $('#results').append("<li>" + "Word Counter: " + newEntry.wordCounter() + "</li>");
    $('#results').append("<li>" + "Teaser: " + newEntry.getTeaser() + "</li>");
  });
});
// newEntry.forEach(function(log) {
//   $('#results').append("<li>" + log + "</li>");
// });
