$( document ).ready(function() {

//setting a variable "right" for questions that are answered correctly
var right= 0;
//setting a variable "wrong" for questions that are answered incorrectly
var wrong= 0;
//settingn a variable "unanswered" for questions that are not answered
var unanswered=0;

//setting a variable "audio" for the sound that will be played once you click the start button
var audio = new Audio("assets/audio/TarHeelsFightSong.mp3");

//setting a variable "number" that is equal to 120 seconds.  This will be the time left to guess answers
var number = 120;

//declaring a variable intervalId for later use
    var intervalId;

//selecting the element with the id "start" and when it is clicked run the function "begin"
    $("#start").on("click", begin);

/* setting the function "begin". the previously declared variable "intervalId" is set equal 
to the value of the function setInterval with the argument of the function decrement, and the
interval set to 1000 milliseconds.

the variable audio is given an event listener that waits until the sound has ended and then
restarts it
*/
    function begin() {
      intervalId = setInterval(decrement, 1000);
      audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();
    }

    function stop(){
    	$("#timeLeft").html("<h1></h1>");
    	intervalId = 0;
    }

/*setting a function decrement that subtracts 1 from the value of the variable number.  This 
action is displayed in the element with an id "timeLeft" where an h1 object is created 
*/
    function decrement() {

      number--;

      $("#timeLeft").html("<h1>" + number + "</h1>");

      if (number === 0) {

        alert("Time Up!");
        stop();
      }
    }

    stop();



});