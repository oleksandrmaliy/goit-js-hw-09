import Notiflix from 'notiflix';

Notiflix.Notify.success('Sol lucet omnibus');
Notiflix.Notify.failure('Qui timide rogat docet negare');
Notiflix.Notify.warning('Memento te hominem esse');
Notiflix.Notify.info('Cogito ergo sum');

const firstDelay = document.querySelector('[name=delay]');
const delayStep = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
const submitBtn = document.querySelector('button[type=submit]');

// console.log(firstDelay);
// console.log(delayStep);
// console.log(amount);
// console.log(submitBtn);

submitBtn.addEventListener('click', createPromise);

function foo(event){
  event.preventDefault();
  console.log('zxc');
}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success('Sol lucet omnibus');// Fulfill
  } else {
    Notiflix.Notify.failure('Qui timide rogat docet negare');// Reject
  }
}
