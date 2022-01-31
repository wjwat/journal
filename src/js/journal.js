function Journal() {
  this.entries = [];
}

Journal.prototype.addEntry = function(entry, time) {
  this.entries.push([time, entry]);
};

Journal.prototype.removeEntry = function(index) {
  delete this.entries[index];
  // recreate array without empty items
  this.entries = this.entries.filter(Boolean);
};