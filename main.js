// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

$(document).ready(function() {
  for ( i = 0; i < 36; i++) {
    var template = '<div class="square"></div>'
    $('.container').append(template);

  }

  $(document).on('click', '.square', function() {
    alert('ciao');
  });


});
