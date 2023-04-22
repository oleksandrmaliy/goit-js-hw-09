// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

let ms = 0;
// let remainTime = {};
let timeRemains = {};

const value = document.querySelector('.value');
const label = document.querySelector('.label');

value.style.fontSize ="100px";
console.log(value);
console.log(value.style);



const inputDateTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const dateNew = selectedDates[0];
    const dateNow = options.defaultDate;

    ms = dateNew - dateNow;

    if (ms > 0) {
      startBtn.disabled = false;
    } else {
      alert('Choise date in further!');
    }

    // console.log('');
    // console.log(dateNew);
    // console.log(dateNow);
    // console.log(ms);
  },
};
const fp = flatpickr(inputDateTime, options); // flatpickr

startBtn.addEventListener('click', calculateTime);
startBtn.disabled = true;

function calculateTime() {
  console.log(ms);
  console.log(convertMs(ms));
  console.log(addLeadingZero(timeRemains));
  return;
  // console.log(convertMs(2000));
}

// let days = 0;
// let hours = 0;
// let minutes = 0;

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

  return (timeRemains = { days, hours, minutes, seconds });
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(3, 0);
  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);
  timeRemains = { days, hours, minutes, seconds };

  return timeRemains;
}

