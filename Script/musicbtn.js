
let playStopButton = document.getElementById("playStop");
let playIcon = document.getElementById("playIcon");
let audio = document.getElementById("audio");
let isPlaying = false;

function togglePlayStop() {
    if (isPlaying) {
        audio.pause();
        playIcon.classList.remove("bi-volume-up-fill");
        playIcon.classList.add("bi-volume-mute-fill");
    } else {
        audio.play();
        playIcon.classList.remove("bi-volume-up-fill");
        playIcon.classList.add("bi-volume-up-fill");
    }
    isPlaying = !isPlaying;
}

playStopButton.addEventListener("click", togglePlayStop);



