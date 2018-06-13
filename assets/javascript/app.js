//opening page hidden containers
$( '.maincontainer' ).hide();
$( '.incorrectpage' ).hide();
$( '.correctpage' ).hide();

// need variables for number of questions right and wrong

var correct = 0;
var wrong = 0;
var currentquestion;
var correctanswer;
var incorrectanswer;

var triviaQuestions = [{
	question: "Which Disney princess has a raccoon as a sidekick?",
	answerList: ["Pocahontas", "Ariel", "Cinderella", "Mulan"],
	answer: 0
},{
	question: "In the movie Frozen, which song does Elsa sing as she builds the castle?",
	answerList: ["Love is an open door", "For the first time in forever","Let It Go", "Frozen heart"],
	answer: 2
},{
	question: "What is the name of Bambi's rabbit friend?",
	answerList: ["Hopper","Thumper", "Jumper", "Bumper"],
	answer: 1
},{
	question: "In the movie Finding Nemo, what is the address used to find Nemo?",
	answerList: ["P. Sherman, 42 Wallaby Way, Sydney", "P. Herman, 52 Wallaby Way, Sydney", " B. Sherman, 42 Wallaby Way, Sydney", "E. Herman, 42 Wallaby Way, Sydney"],
	answer: 0
},{
	question: "What does the crocodile swallow in Peter Pan?",
	answerList: ["A metronome" , "A trumpet" , "A pirate" , "A clock"],
	answer: 3
}];






















//
// ----------------------------------------------
// // document.getElementById('correctanswer').value=correctanswer;
// // $('.correctanswer').html(correctanswer);
// // $('.answerone').html(answerone);
// // $('.answertwo').html(answertwo);
// // $('.answerthree').html(answerthree);
//
// // counter number variable and function
//
// var counter = 60;
// var intervalId;
//
// //variables for questions and their answers
//
// //answer variables
//
// var answerone = ["Pocahontas", "Ariel", "Cinderella", "Mulan"];
// var answertwo = ["Love is an open door", "For the first time in forever","Let It Go", "Frozen heart"];
// var answerthree = ["Hopper","Thumper", "Jumper", "Bumper"];
// var answerfour = ["P. Sherman, 42 Wallaby Way, Sydney", "P. Herman, 52 Wallaby Way, Sydney", " B. Sherman, 42 Wallaby Way, Sydney", "E. Herman, 42 Wallaby Way, Sydney"];
// var answerfive = ["A metronome" , "A trumpet" , "A pirate" , "A clock"];
//
// //question variables
//
// var questionone = "Which Disney princess has a raccoon as a sidekick?"
//
// var questiontwo = "In the movie Frozen, which song does Elsa sing as she builds the castle?"
//
// var questionthree = "What is the name of Bambi's rabbit friend?"
//
// var questionfour = "In the movie Finding Nemo, what is the address used to find Nemo?"
//
// var questionfive = "What does the crocodile swallow in Peter Pan?"
//
//
// var question = [questionone, questiontwo, questionthree, questionfour, questionfive];
//
// var currentquestion;
//
//
//
// function runtimer() {
//       clearInterval(intervalId);
//       intervalId = setInterval(decrement, 1000);
//     }
//
// //  The decrement function.
//     function decrement() {
//
// //  Decrease number by one.
//       counter--;
//
// //  Show the number in the #show-number tag.
//       $("#show-number").html("<h2>" + counter + "</h2>");
//
//
// //  Once number hits zero...
//       if (counter === 0) {
//
//         stop();
//
// //  ...run the stop function.
//         // outoftime(); // STILL NEED TO MAKE OUT OF TIME FUNCTION
//
// //  Alert the user that time is up.
//         alert("Time Up!");
//       }
//     }
//
//     function stop() {
//           clearInterval(intervalId);
//         }
//
//
// $( ".start" ).on( "click", function() {
//             $( '.startcontainer' ).hide();
//             $( '.maincontainer' ).show();
//             funkyfunk();
//             runtimer();
//             decrement();
//         })
//
// //if logic for displying the answers in association with the questions:
//
// function questionmatches() {
//
// if(currentquestion == questionone) { //pocahontas
//   $('#answerone').html(answerone[0]);
//   $('#answertwo').html(answerone[1]);
//   $('#answerthree').html(answerone[2]);
//   $('#answerfour').html(answerone[3]);
//   $('#answerone').addClass("correctanswer");
//   $('#answertwo').addClass("wronganswer");
//   $('#answerthree').addClass("wronganswer");
//   $('#answerfour').addClass("wronganswer");
//   correctanswer = "Pocahontas";
// }
//
// if(currentquestion == questiontwo) { //frozen
//   $('#answerone').html(answertwo[0]);
//   $('#answertwo').html(answertwo[1]);
//   $('#answerthree').html(answertwo[2]);
//   $('#answerfour').html(answertwo[3]);
//   $('#answerthree').addClass("correctanswer");
//   $('#answertwo').addClass("wronganswer");
//   $('#answerone').addClass("wronganswer");
//   $('#answerfour').addClass("wronganswer");
//   correctanswer = "Let It Go";
// }
//
// if(currentquestion == questionthree) { //Bambi
//   $('#answerone').html(answerthree[0]);
//   $('#answertwo').html(answerthree[1]);
//   $('#answerthree').html(answerthree[2]);
//   $('#answerfour').html(answerthree[3]);
//   $('#answertwo').addClass("correctanswer");
//   $('#answerone').addClass("wronganswer");
//   $('#answerthree').addClass("wronganswer");
//   $('#answerfour').addClass("wronganswer");
//   correctanswer = "Thumper";
// }
//
// if(currentquestion == questionfour) { // nemo
//   $('#answerone').html(answerfour[0]);
//   $('#answertwo').html(answerfour[1]);
//   $('#answerthree').html(answerfour[2]);
//   $('#answerfour').html(answerfour[3]);
//   $('#answerone').addClass("correctanswer");
//   $('#answertwo').addClass("wronganswer");
//   $('#answerthree').addClass("wronganswer");
//   $('#answerfour').addClass("wronganswer");
//   correctanswer = "P. Sherman, 42 Wallaby Way, Sydney";
// }
//
// if(currentquestion == questionfive) { // peter pan
//   $('#answerone').html(answerfive[0]);
//   $('#answertwo').html(answerfive[1]);
//   $('#answerthree').html(answerfive[2]);
//   $('#answerfour').html(answerfive[3]);
//   $('#answerfour').addClass("correctanswer");
//   $('#answertwo').addClass("wronganswer");
//   $('#answerthree').addClass("wronganswer");
//   $('#answerone').addClass("wronganswer");
//   correctanswer = "a clock";
// }
//
// //function for if clicked send to correct or incorrect page and add or detract points
// $( ".correctanswer" ).on( "click", function() {
//             $( '.maincontainer' ).hide();
//               $( '.correctpage' ).show();
//               stop();
//               correct++;
//               console.log(correct);
//               $("#correctanswer").html("Hooray! The correct answer was indeed " + correctanswer + "!");
//               $('.correctanswer').empty();
//               $('.wronganswer').empty();
//                   //
//               setTimeout(function(){
//                 funkyfunk();
//                 $( '.correctpage' ).hide();
//                 $( '.incorrectpage' ).hide();
//                   $( '.maincontainer' ).show();
//               }, 5000); //tenseconds
//               runtimer();
//               decrement();
//
//
//     })
//
// $( ".wronganswer" ).on( "click", function() {
//               $( '.maincontainer' ).hide();
//               $( '.incorrectpage' ).show();
//               stop();
//               wrong++;
//               console.log(wrong);
//               $("#incorrectanswer").html("Nope, that's not right. The answer was actually " + correctanswer + "!");
//               $('.correctanswer').empty();
//               $('.wronganswer').empty();
//               //
//               setTimeout(function(){
//                 funkyfunk();
//                 $( '.incorrectpage' ).hide();
//                 $( '.correctpage' ).hide();
//                   $( '.maincontainer' ).show();
//               }, 5000); //tenseconds
//
//               runtimer();
//               decrement();
//
//
//         })
//
//     }
//
//
// function funkyfunk(){
//   currentquestion = question[Math.floor(Math.random() * question.length)];
//   question.splice(currentquestion, 1)
//   console.log(currentquestion);
//   // clearInterval(intervalId);
//   $('.question').html(currentquestion);
//   console.log(question);
//   questionmatches();
// }
// // if(questiontwo) {
// //   $('.answertwo').html(answertwo);
// // }
// //
// // if(questionthree) {
// //   $('.answerthree').html(answerthree);
// // }
// //
// // if(questionfour) {
// //   $('.answerfour').html(answerfour);
// // }
// //
// // if(questionfive) {
// //   $('.answerfive').html(answerfive);
// // }
