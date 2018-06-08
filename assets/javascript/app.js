//opening page hidden containers
$( '.maincontainer' ).hide();

// need variables for number of questions right and wrong

var correct = 0;
var wrong = 0;

// counter number variable and function

var counter = 60;
var intervalId;

function runtimer() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

//  The decrement function.
    function decrement() {

//  Decrease number by one.
      counter--;

//  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + counter + "</h2>");


//  Once number hits zero...
      if (counter === 0) {

//  ...run the stop function.
        // outoftime(); // STILL NEED TO MAKE OUT OF TIME FUNCTION

//  Alert the user that time is up.
        alert("Time Up!");
      }
    }



$( ".start" ).on( "click", function() {
            $( '.startcontainer' ).hide();
            $( '.maincontainer' ).show();
            runtimer();
            decrement();

        })
