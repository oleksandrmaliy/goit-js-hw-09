// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

// Notiflix.Notify.success('GAME OVER !');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

let dateNew;
let timeRemains;

const daysRemain = document.querySelector('span[data-days]');
const hoursRemain = document.querySelector('span[data-hours]');
const minutesRemain = document.querySelector('span[data-minutes]');
const secondsRemain = document.querySelector('span[data-seconds]');
const inputDateTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    dateNew = selectedDates[0];

    if (dateNew - options.defaultDate > 0) {
      startBtn.disabled = false;
    } else {
      Notiflix.Notify.failure('Choise date in further!');
    }
  },
};

const fp = flatpickr(inputDateTime, options);

startBtn.addEventListener('click', onStartClick);
startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  timeRemains = { days, hours, minutes, seconds };
  return timeRemains;
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  daysRemain.textContent = days.toString().padStart(2, 0);
  hoursRemain.textContent = hours.toString().padStart(2, 0);
  minutesRemain.textContent = minutes.toString().padStart(2, 0);
  secondsRemain.textContent = seconds.toString().padStart(2, 0);
}

function onStartClick() {
  let ms = dateNew - new Date();

  if (ms < 1000) {
    startBtn.disabled = true;
    Notiflix.Notify.failure(
      'Date you have chosen is already in past. Choise again date in further!'
    );
    return;
  }
  convertMs(ms);
  addLeadingZero(timeRemains);

  startBtn.disabled = true;
  inputDateTime.disabled = true;

  const counterId = setInterval(() => {
    ms -= 1000;

    convertMs(ms);
    addLeadingZero(timeRemains);

    if (ms < 1000) {
      clearInterval(counterId);
      Notiflix.Notify.info('GAME OVER!');
    }
  }, 1000);
}
