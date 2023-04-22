// // Описаний в документації
// import flatpickr from 'flatpickr';
// // Додатковий імпорт стилів
// import 'flatpickr/dist/flatpickr.min.css';

// import Notiflix from 'notiflix';

// let ms = 0;
// let x = {};

// const inputDateTime = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('button[data-start]');
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);

//     const dateNew = selectedDates[0];
//     const dateNow = options.defaultDate;

//     ms = dateNew - dateNow;

//     if (ms > 0) {
//       startBtn.disabled = false;
//     } else {
//       alert('Choise date in further!');
//     }

//     console.log('');
//     console.log(dateNew);
//     console.log(dateNow);
//     console.log(ms);
//   },
// };
// const fp = flatpickr(inputDateTime, options); // flatpickr

// startBtn.addEventListener('click',  calculateTime);
// startBtn.disabled = true;

// function calculateTime() {
//     console.log(ms);
//     console.log(convertMs(ms));
//     console.log(convertMs(2000));
// }

// // let days = 0;
// // let hours = 0;
// // let minutes = 0;

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return (x = { days, hours, minutes, seconds });
// }

// function addLeadingZero(value) {
//   // padStart();
//   console.log('value');
// }
// convertMs(ms);
// addLeadingZero(convertMs(ms));
// const z = 5;
// function foo(value) {
//   console.log(value.toString.padStart(3, 4));
// }

// foo(z);
console.log('zzz');