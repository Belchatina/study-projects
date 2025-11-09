const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

updateClock();

function formatTime(num) {
  return String(num).padStart(2, '0');
}

function updateClock() {
  const currentTime = new Date();

  hoursEl.innerText = formatTime(currentTime.getHours());
  minutesEl.innerText = formatTime(currentTime.getMinutes());
  secondsEl.innerText = formatTime(currentTime.getSeconds());
}

setInterval(() => {
  updateClock();
}, 1000);
