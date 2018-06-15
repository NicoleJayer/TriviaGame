//opening page hidden containers
$( '.maincontainer' ).hide();
$( '.incorrectpage' ).hide();
$( '.correctpage' ).hide();
$( '#questionboxqfive' ).hide();
$( '#questionboxqfour' ).hide();
$( '#questionboxqthree' ).hide();
$( '#questionboxqtwo' ).hide();
$( '#questionboxqone' ).hide();
$( '.endpage' ).hide();

// need variables for number of questions right and wrong

var correct = 0;
var wrong = 0;
var correctanswer = "";

// document.getElementById('correctanswer').value=correctanswer;
// $('.correctanswer').html(correctanswer);
// $('.answerone').html(answerone);
// $('.answertwo').html(answertwo);
// $('.answerthree').html(answerthree);

// counter number variable and function

var counter = 61;
var intervalId;

answeredOne = false;
answeredTwo = false;
answeredThree = false;
answeredFour = false;
answeredFive = false;
answeredQ = 0;
//variables for questions and their answers

//answer variables

var answerone = ["Pocahontas", "Ariel", "Cinderella", "Mulan"];
var answertwo = ["Love is an open door", "For the first time in forever","Let It Go", "Frozen heart"];
var answerthree = ["Hopper","Thumper", "Jumper", "Bumper"];
var answerfour = ["P. Sherman, 42 Wallaby Way, Sydney", "P. Herman, 52 Wallaby Way, Sydney", " B. Sherman, 42 Wallaby Way, Sydney", "E. Herman, 42 Wallaby Way, Sydney"];
var answerfive = ["A metronome" , "A trumpet" , "A pirate" , "A clock"];

//question variables

var questionone = "Which Disney princess has a raccoon as a sidekick?"

var questiontwo = "In the movie Frozen, which song does Elsa sing as she builds the castle?"

var questionthree = "What is the name of Bambi's rabbit friend?"

var questionfour = "In the movie Finding Nemo, what is the address used to find Nemo?"

var questionfive = "What does the crocodile swallow in Peter Pan?"


var question = [questionone, questiontwo, questionthree, questionfour, questionfive];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5'];

var currentquestion = 0;

function nextQuestion(){
 currentquestion = currentquestion + 1;
 console.log(currentquestion);
  $('.question').html(question[currentquestion]);
  questionmatches();
  counter = 61;
  decrement();
}




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

        stop();

//  ...run the stop function.
        // outoftime(); // STILL NEED TO MAKE OUT OF TIME FUNCTION

//  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    function stop() {
          clearInterval(intervalId);
        }


$( ".start" ).on( "click", function() {
            $( '.startcontainer' ).hide();
            $( '.maincontainer' ).show();
            // funkyfunk();
             $('.question').html(question[currentquestion]);
             questionmatches();
            runtimer();
            decrement();
        })

$( ".reset" ).on( "click", function() {
            //     correct = 0;
            //     wrong = 0;
            //     correctanswer = "";
            //     answeredQ = 0;
            //     currentquestion = 0;
            //     console.log(currentquestion);
            // // $( '.startcontainer' ).show();
            // $( '.maincontainer' ).hide();
            // $( '.incorrectpage' ).hide();
            // $( '.correctpage' ).hide();
            // $( '#questionboxqfive' ).hide();
            // $( '#questionboxqfour' ).hide();
            // $( '#questionboxqthree' ).hide();
            // $( '#questionboxqtwo' ).hide();
            // $( '#questionboxqone' ).hide();
            // $( '.endpage' ).hide();
                    // funkyfunk();

             window.location.reload(true);

                })


//if logic for displying the answers in association with the questions:

function questionmatches() {

if(question[currentquestion] == questionone) { //pocahontas
$( '#questionboxqone' ).show();
  $('#answeroneqone').html(answerone[0]);
  $('#answertwoqone').html(answerone[1]);
  $('#answerthreeqone').html(answerone[2]);
  $('#answerfourqone').html(answerone[3]);
  $('#answeroneqone').addClass("correctanswer");
  $('#answertwoqone').addClass("wronganswer");
  $('#answerthreeqone').addClass("wronganswer");
  $('#answerfourqone').addClass("wronganswer");
  correctanswer = "Pocahontas";
  answeredOne = true;

}

if(question[currentquestion] == questiontwo) { //frozen
  $( '#questionboxqone' ).hide();
  $( '#questionboxqtwo' ).show();
  $('#answeroneqtwo').html(answertwo[0]);
  $('#answertwoqtwo').html(answertwo[1]);
  $('#answerthreeqtwo').html(answertwo[2]);
  $('#answerfourqtwo').html(answertwo[3]);
  $('#answerthreeqtwo').addClass("correctanswer");
  $('#answertwoqtwo').addClass("wronganswer");
  $('#answeroneqtwo').addClass("wronganswer");
  $('#answerfourqtwo').addClass("wronganswer");
  correctanswer = "Let It Go";
  answeredTwo = true;

}

if(question[currentquestion] == questionthree) { //Bambi
  $( '#questionboxqone' ).hide();
  $( '#questionboxqtwo' ).hide();
  $( '#questionboxqthree' ).show();
  $('#answeroneqthree').html(answerthree[0]);
  $('#answertwoqthree').html(answerthree[1]);
  $('#answerthreeqthree').html(answerthree[2]);
  $('#answerfourqthree').html(answerthree[3]);
  $('#answertwoqthree').addClass("correctanswer");
  $('#answeroneqthree').addClass("wronganswer");
  $('#answerthreeqthree').addClass("wronganswer");
  $('#answerfourqthree').addClass("wronganswer");
  correctanswer = "Thumper";
  answeredThree = true;

}

if(question[currentquestion] == questionfour) { // nemo
  $( '#questionboxqone' ).hide();
  $( '#questionboxqtwo' ).hide();
  $( '#questionboxqthree' ).hide();
  $( '#questionboxqfour' ).show();
  $('#answeroneqfour').html(answerfour[0]);
  $('#answertwoqfour').html(answerfour[1]);
  $('#answerthreeqfour').html(answerfour[2]);
  $('#answerfourqfour').html(answerfour[3]);
  $('#answeroneqfour').addClass("correctanswer");
  $('#answertwoqfour').addClass("wronganswer");
  $('#answerthreeqfour').addClass("wronganswer");
  $('#answerfourqfour').addClass("wronganswer");
  correctanswer = "P. Sherman, 42 Wallaby Way, Sydney";
  answeredFour = true;
}

if(question[currentquestion] == questionfive) { // peter pan
  $( '#questionboxqone' ).hide();
  $( '#questionboxqtwo' ).hide();
  $( '#questionboxqthree' ).hide();
  $( '#questionboxqfour' ).hide();
  $( '#questionboxqfive' ).show();
  $('#answeroneqfive').html(answerfive[0]);
  $('#answertwoqfive').html(answerfive[1]);
  $('#answerthreeqfive').html(answerfive[2]);
  $('#answerfourqfive').html(answerfive[3]);
  $('#answerfourqfive').addClass("correctanswer");
  $('#answertwoqfive').addClass("wronganswer");
  $('#answerthreeqfive').addClass("wronganswer");
  $('#answeroneqfive').addClass("wronganswer");
  correctanswer = "a clock";
  answeredFive = true;
}

//function for if clicked send to correct or incorrect page and add or detract points
$( ".correctanswer" ).on( "click", function() {
            $( '.maincontainer' ).hide();
              $( '.correctpage' ).show();
              $('.gif').html('<img src = "../TriviaGame/assets/images/'+ gifArray[currentquestion] +'.gif" width = "400px">');
              stop();
              correct++;
              answeredQ++;
              console.log(correct);
              $("#correctanswer").html("Hooray! The correct answer was indeed " + correctanswer + "!");
                  //
              setTimeout(function(){
                // funkyfunk();
                nextQuestion();
                $( '.correctpage' ).hide();
                $( '.incorrectpage' ).hide();
                  $( '.maincontainer' ).show();
                    endGame();
              }, 5000); //tenseconds
              runtimer();
              decrement();


    })

$( ".wronganswer" ).on( "click", function() {
              $( '.maincontainer' ).hide();
              $( '.incorrectpage' ).show();
              $('.gif').html('<img src = "../TriviaGame/assets/images/'+ gifArray[currentquestion] +'.gif" width = "400px">');
              stop();
              wrong++;
              answeredQ++;
              console.log(wrong);
              $("#incorrectanswer").html("Nope, that's not right. The answer was actually " + correctanswer + "!");
              //
              setTimeout(function(){
                // funkyfunk();
                nextQuestion();
                $( '.incorrectpage' ).hide();
                $( '.correctpage' ).hide();
                  $( '.maincontainer' ).show();
                    endGame();
              }, 5000); //tenseconds
              runtimer();
              decrement();


        })

    }


function endGame(){
  if (answeredQ == 5){
    stop();
    $( '.maincontainer' ).hide();
    $( '.incorrectpage' ).hide();
    $( '.correctpage' ).hide();
    $( '.endpage' ).show();
    $("#correctpoints").html("You got a total of " + correct + " correct!");
    $("#incorrectpoints").html("You got a total of " + wrong + " wrong!");
    currentquestion = 0;
    correct = 0;
    wrong = 0;
    answeredQ = 0;
  }
}
// function funkyfunk(){
//   currentquestion = question[Math.floor(Math.random() * question.length)];
//   question.splice(currentquestion, 1)
//   console.log(currentquestion);
//   // clearInterval(intervalId);
//   $('.question').html(currentquestion);
//   console.log(question);
//   questionmatches();
// }
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


// $('#answertwoqone').empty();
// $('#answeroneqone').empty();
// $('#answerthreeqone').empty();
// $('#answerfourqone').empty();
//
// $('#answertwoqtwo').empty();
// $('#answeroneqtwo').empty();
// $('#answerthreeqtwo').empty();
// $('#answerfourqtwo').empty();
//
// $('#answertwoqthree').empty();
// $('#answeroneqthree').empty();
// $('#answerthreeqthree').empty();
// $('#answerfourqthree').empty();
//
// $('#answertwoqfour').empty();
// $('#answeroneqfour').empty();
// $('#answerthreeqfour').empty();
// $('#answerfourqfour').empty();
//
// $('#answertwoqfive').empty();
// $('#answeroneqfive').empty();
// $('#answerthreefive').empty();
// $('#answerfourqfive').empty();
