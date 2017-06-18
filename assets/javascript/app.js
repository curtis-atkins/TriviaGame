$( document ).ready(function() {

var audio = new Audio("assets/audio/TarHeelsFightSong.mp3");


var number = 120;

    var intervalId;

    $("#start").on("click", start);


    function start() {
      intervalId = setInterval(decrement, 1000);
      audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();
    }

    function decrement() {

      number--;

      $("#timeLeft").html("<h1>" + number + "</h1>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    

    //run();
//120 seconds


});