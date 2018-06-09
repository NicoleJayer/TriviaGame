//opening page hidden containers
$( '.maincontainer' ).hide();

// need variables for number of questions right and wrong

var correct = 0;
var wrong = 0;

// document.getElementById('correctanswer').value=correctanswer;
// $('.correctanswer').html(correctanswer);
// $('.answerone').html(answerone);
// $('.answertwo').html(answertwo);
// $('.answerthree').html(answerthree);

// counter number variable and function

var counter = 60;
var intervalId;

//variables for questions and their answers

//answer variables

var answerone = ["Pocahontas", "Ariel", "Cinderella", "Mulan"];
var answertwo = ["Love is an open door", "For the first time in forever","Let It Go", "Frozen heart"];
var answerthree = ["Thumper", "Hopper", "Jumper", "Bumper"];
var answerfour = ["P. Sherman, 42 Wallaby Way, Sydney", "P. Herman, 52 Wallaby Way, Sydney", " B. Sherman, 42 Wallaby Way, Sydney", "E. Herman, 42 Wallaby Way, Sydney"];
var answerfive = ["A clock" , "A metronome" , "A pirate" , "A trumpet"];

//question variables

var questionone = "Which Disney princess has a raccoon as a sidekick?"

var questiontwo = "In the movie Frozen, which song does Elsa sing as she builds the castle?"

var questionthree = "What is the name of Bambi's rabbit friend?"

var questionfour = "In the movie Finding Nemo, what is the address used to find Nemo?"

var questionfive = "What does the crocodile swallow in Peter Pan?"


var question = [questionone, questiontwo, questionthree, questionfour, questionfive];

var currentquestion = question[Math.floor(Math.random() * question.length)];


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
            $('.question').html(currentquestion);

        })

//if logic for displying the answers in association with the questions:

if(currentquestion == questionone) {
  $('#answerone').html(answerone[0]);
  $('#answertwo').html(answerone[1]);
  $('#answerthree').html(answerone[2]);
  $('#answerfour').html(answerone[3]);
  $('#answerone').addClass("correctanswer");
}

else if(currentquestion == questiontwo) {
  $('#answerone').html(answertwo[0]);
  $('#answertwo').html(answertwo[1]);
  $('#answerthree').html(answertwo[2]);
  $('#answerfour').html(answertwo[3]);
  $('#answerthree').addClass("correctanswer");
}

// if(questiontwo) {
//   $('.answertwo').html(answertwo);
// }
//
// if(questionthree) {
//   $('.answerthree').html(answerthree);
// }
//
// if(questionfour) {
//   $('.answerfour').html(answerfour);
// }
//
// if(questionfive) {
//   $('.answerfive').html(answerfive);
// }
