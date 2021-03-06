$(document).ready(function() {
    //setting a variable "right" for questions that are answered correctly
    var right = 0;
    //setting a variable "wrong" for questions that are answered incorrectly
    var wrong = 0;
    //settingn a variable "unanswered" for questions that are not answered
    var unanswered = 0;
    //setting a variable "audio" for the sound that will be played once you click the start button
    var audio = new Audio("assets/audio/TarHeelsFightSong.mp3");
    //setting a variable "number" that is equal to 120 seconds.  This will be the time left to guess answers
    var number = 120;
    //declaring a variable interval for later use
    var interval;
    //selecting the element with the id "start" and when it is clicked run the function "begin"
    $("#start").on("click", begin);
    /* setting the function "begin". the previously declared variable "interval" is set equal 
    to the value of the function setInterval with the argument of the function decrement, and the
    interval set to 1000 milliseconds.

    the variable audio is given an event listener that waits until the sound has ended and then
    restarts it
    */
    function begin() {
        interval = setInterval(decrement, 1000);
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        audio.play();
    }

    function stop() {
        $("#timeLeft").html("<h1></h1>");
        clearInterval(interval);
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
            audio.pause();
        }
    }
    //
    $("#submit").closest("form").submit(function() {
        var score = 0;
        var numberOfQuestions = 10;
        var answers = ["c", "a", "a", "b", "a", "d", "b", "d", "b", "a"];
        var q1 = document.forms["quizForm"]["q1"].value;
        var q2 = document.forms["quizForm"]["q2"].value;
        var q3 = document.forms["quizForm"]["q3"].value;
        var q4 = document.forms["quizForm"]["q4"].value;
        var q5 = document.forms["quizForm"]["q5"].value;
        var q6 = document.forms["quizForm"]["q6"].value;
        var q7 = document.forms["quizForm"]["q7"].value;
        var q8 = document.forms["quizForm"]["q8"].value;
        var q9 = document.forms["quizForm"]["q9"].value;
        var q10 = document.forms["quizForm"]["q10"].value;

        for (var i = 1; i <= numberOfQuestions; i++) {
            if (eval('q' + i) == "") {
                alert("You missed question number " + i);
            }
            for (var i = 1; i <= numberOfQuestions; i++) {
                if (eval('q' + 1) == answers[i - 1]) {
                    score++;
                }
            }
            var results = $("#results").html("<h2>You Scored " + score + " points out of " + numberOfQuestions + "</h2>")
            alert("You Scored " + score + " points out of " + numberOfQuestions);
        }
    });
});