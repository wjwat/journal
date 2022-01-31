import $ from 'jquery';
import Journal from './journal.js';

let newJournal = new Journal();

$(document).ready(function() {
  $('form').on('submit', e => {
    e.preventDefault();
    let date = new Date();
    //let date = $('#date').val();
    let entry = $('#entry').val();
    newJournal.addEntry(date.toLocaleTimeString(), entry);
  });
});