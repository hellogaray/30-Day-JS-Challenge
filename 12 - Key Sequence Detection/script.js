
const pressed = [];
const secretCode = 'konami';

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    pressed.push(event.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);
    if (pressed.join('').includes(secretCode)) {
        console.log('Ding Ding');
        cornify_add();
    };
})

