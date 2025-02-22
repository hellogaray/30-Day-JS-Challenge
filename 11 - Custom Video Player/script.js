const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');

function togglePlay() {
    if (!video) return;
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

for (let i = 0; i < skipButtons.length; i++) {
    skipButtons[i].addEventListener("click", function() {
        console.log( video.currentTime);
        video.currentTime =  video.currentTime + (skipButtons[i].dataset.skip/100);
    });
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
