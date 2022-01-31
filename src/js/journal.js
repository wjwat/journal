function Entry(date, entry) {
  this.date = date;
  this.entry = entry;
}

export default function Journal() {
  this.entries = [];
}

Journal.prototype.addEntry = function(time, entry) {
  let newEntry = new Entry(time, entry);
  this.entries.push(newEntry);
};

Journal.prototype.removeEntry = function(index) {
  delete this.entries[index];
  // recreate array without empty items
  this.entries = this.entries.filter(Boolean);
};

Journal.prototype.vowelAndConsonantCount = function(index) {
  // logic to return # of vowels and consonants in entry @ index
  // for the sake of remembering the code, i'm gonna wing it here
  let vowelCount = this.entries[index].entry.match(/[aeiou]/gim).length;
  let consonantCount = this.entries[index].entry.match(/[bcdfghjklmnpqrstvxwyz]/gim).length;

  return {vowels: vowelCount, consonants: consonantCount};
};

Journal.prototype.getTeaser = function(index) {
  console.log(index);
  // logic to return teaser for entry @ index
};