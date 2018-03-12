export function Entry(title, log) {
  this.entryTitle = title;
  this.entryLog = log;
}

Entry.prototype.vowelCounter = function () {
  var userInput = this.entryLog.match(/[aeiou]/gi).length;
  return userInput;
};

Entry.prototype.consonantCounter = function() {
  var userInput = this.entryLog.match(/[bcdfghjklmnpqrstvxzwy]/gi).length;
  return userInput;
};

Entry.prototype.wordCounter = function() {
  var userInput = this.entryLog.split(' ').length;
  return userInput;
};

Entry.prototype.getTeaser = function() {
  var userInput = this.entryLog.split(/\s+/).slice(0,8).join(" ");
  return userInput;
};
