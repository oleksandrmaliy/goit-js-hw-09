const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const field = document.body;

startBtn.addEventListener('click', startColorize);
stopBtn.addEventListener('click', stopColorize);

stopBtn.disabled = true;

function startColorize() {
  field.style.backgroundColor = getRandomHexColor();

  startBtn.disabled = true;
  stopBtn.disabled = false;

  colorizeTimerId = setInterval(() => {
    field.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorize() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(colorizeTimerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
