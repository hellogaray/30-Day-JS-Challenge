const sounds = {
    a: new Audio('sounds/clap.wav'),
    s: new Audio('sounds/hihat.wav'),
    d: new Audio('sounds/kick.wav'),
    f: new Audio('sounds/openhat.wav'),
    g: new Audio('sounds/boom.wav'),
    h: new Audio('sounds/ride.wav'),
    j: new Audio('sounds/snare.wav'),
    k: new Audio('sounds/tom.wav'),
    l: new Audio('sounds/tink.wav')
};

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }

function playSound(event) {
    const audio = sounds[event.key]; // Get the correct sound from the object
    const key = document.querySelector(`div[data-key="${event.key}"]`);

    if (audio) {
        audio.currentTime = 0; // Rewind the audio to allow rapid key presses
        audio.play();

        key.classList.add('playing');
    } else {
        return
    } 
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);