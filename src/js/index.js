import $ from 'jquery';
import Journal from './journal.js';

let newJournal = new Journal();

$(document).ready(function() {
  $('form').on('submit', e => {
    e.preventDefault();
    let date = new Date();
    //let date = $('#date').val();
    //let entry = $('#entry').val();
    let entry = "This is our default string.AAA";
    newJournal.addEntry(date.toLocaleTimeString(), entry);

    console.log(newJournal);
    console.log(newJournal.vowelAndConsonantCount(0));
  });
});