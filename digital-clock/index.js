const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

updateClock();

function updateClock() {
  const currentTime = new Date();

  hoursEl.innerText = currentTime.getHours();
  minutesEl.innerText = currentTime.getMinutes();
  secondsEl.innerText = currentTime.getSeconds();
}

setInterval(() => {
  updateClock();
}, 1000);
