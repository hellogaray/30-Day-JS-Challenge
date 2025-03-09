const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
const extraVar = '[2nd var]';
console.log("Hello I am a %s string!", extraVar)
console.log(`Hello I am ${extraVar} string!`)

// Styled
console.log('%c I am some great text', 'font-size: 30px; background:red; text-shadow: 10px 10px 0 blue;')

// warning!
console.warn('This is a Warning');

// Error :|
console.error('This is an Error');

// Info
console.info('This is some info')

// Testing
console.assert(extraVar === 'hello', `${extraVar} is not hello`)

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p')
console.log(p);
// console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count('console');
console.count('console');
console.count('console');
console.count('console');
console.count('console');
console.count('console');

// timing
console.time('fetching data')
fetch('https://api.github.com/users/hellogaray')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data);
});
