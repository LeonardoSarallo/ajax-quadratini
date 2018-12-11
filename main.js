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

      var thisSquare= $(this);
      $.ajax( {
          url: 'https://www.boolean.careers/api/random/int',
          method: 'GET',
          success: function(data) {
            var numero = data.response;
              
            console.log(data.response);
            if (numero <= 5) {
                thisSquare.addClass('yellow');
                thisSquare.text(numero);
                
            }
            else {
                thisSquare.addClass('green');
                thisSquare.text(numero);
            }
            
          },
          error: function() {
              console.log('questo è un errore');
              
        },
       
    })

  });

});
