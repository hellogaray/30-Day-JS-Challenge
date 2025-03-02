const hourHand = document.querySelector('.hour-hand') // Selects the hour hand element
const minHand = document.querySelector('.min-hand') // Selects the minute hand element
const secHand = document.querySelector('.second-hand') // Selects the second hand element

function updateClock() {
    const now = new Date();

    // Calculate the rotation degrees for each hand
    let hourDeg = 30 * (now.getHours() % 12) + 0.5 * now.getMinutes() + 90;
    let minDeg = 6 * now.getMinutes() + 90;
    let secDeg = 6 * now.getSeconds() + 90;

    // Apply rotation to each clock hand
    hourHand.style.transform = `rotate(${hourDeg}deg)`; 
    minHand.style.transform = `rotate(${minDeg}deg)`; 
    secHand.style.transform = `rotate(${secDeg}deg)`; 

    // Calculate the time until the next second and schedule the next update
    let timeToNextSecond = 1000 - now.getMilliseconds();
    setTimeout(updateClock, timeToNextSecond);
}

// Initialize clock update
updateClock();