const { setInterval } = require("timers/promises");

const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;


const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
}

console.log(`Setting a ${waitTime/1000} second delay`);

const timerFinished = () => console.log("Activity done!");

setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
