//opening page hidden containers
$( '.maincontainer' ).hide();

// need variables for number of questions right and wrong

var correct = 0;
var wrong = 0;





$( ".start" ).on( "click", function() {
            $( '.startcontainer' ).hide();
            $( '.maincontainer' ).show();

        })
