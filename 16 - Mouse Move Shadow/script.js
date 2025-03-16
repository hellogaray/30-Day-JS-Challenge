const hero = document.querySelector('.hero');
const text = document.querySelector('.h1');

function shadow (event) {
    console.log(event)
}

hero.addEventListener('mouseover', shadow);