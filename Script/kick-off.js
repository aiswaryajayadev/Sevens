function delayedNavigation() {
    var audio = document.getElementById("myAudio");
    audio.play();
    setTimeout(function() {
      window.location.href = '../Html/scoreCard.html';
    }, 2000); 
  }