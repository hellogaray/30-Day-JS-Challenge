const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    if (!video) return;
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    const icon = this.paused ? '⏵' : '⏸';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime +=  parseFloat(this.dataset.skip);
}

function handleRangeUpdates() {
    console.log(this.value)
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(button => button.addEventListener('click', handleRangeUpdates))

