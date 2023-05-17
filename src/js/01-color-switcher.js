const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const field = document.body;

let colorizeTimerId;
let bool = true;

startBtn.addEventListener('click', startColorize);
stopBtn.addEventListener('click', stopColorize);

stopBtn.disabled = bool;

function startColorize() {
  field.style.backgroundColor = getRandomHexColor();

  changeBtn();

  colorizeTimerId = setInterval(() => {
    field.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorize() {
  changeBtn();

  clearInterval(colorizeTimerId);
}

function changeBtn() {
  startBtn.disabled = bool;
  stopBtn.disabled = !bool;

  bool = !bool;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
