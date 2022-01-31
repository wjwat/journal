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

// "Shit\n"
// "\n\n\n\nThis is my entry!"
// "          \n\n\n\n\n\nI don't know how to read!"
// "This is a sentence. This is also a sentence.\nThis is my entry."
// "This is the teaser. This is not the teaser."
// "I am the very model of a modern Major-General\nI've…ful facts about the square of the\nHypotepotenuse
Journal.prototype.getTeaser = function(index) {
  // lines = entry.split(\n)
  // check lines until non-empty line is hit
  // split line by '.'
  // split sentence by ' '
  // return first eight words (or works up until 8)

  let lines = this.entries[index].entry.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().length > 0) {
      let firstSentence = lines[i].split('.')[0];
      let wordsInFirstSentence = firstSentence.split(' ').slice(0, 8);
      let returnString = wordsInFirstSentence.join(' ');

      // length of first sentence is longer than 8 then append '...'
      if (firstSentence.split(' ').length > 8) {
        returnString += '...';
      } else {
        returnString += '.';
      }
      return returnString;
    }
  }
};