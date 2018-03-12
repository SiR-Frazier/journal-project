export function Entry(title, log) {
  this.entryTitle = title;
  this.entryLog = log;
}

Entry.prototype.vowelCounter = function () {
  var inputtedLog = this.entryLog.match(/[aeiou]/gi).length;
}

Entry.prototype.consonantCounter = function() {
  var inputtedLog = this.entryLog.match(/[bcdfghjklmnpqrstvxzwy]/gi).length;
}

Entry.prototype.wordCounter = function() {
  var inputtedLog = this.entryLog.split(' ').length;
}

Entry.prototype.getTeaser = function() {
  var inputtedLog = this.entryLog.split(/\s+/).slice(0,8)
}
