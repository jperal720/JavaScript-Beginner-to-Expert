'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(curr => curr.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// console.log(document.body.querySelectorAll('.section'));
// console.log(document.getElementById('section--1'));

//* By using getElementsByTagName(), we get an updated list of elements
//* of the given parameter in the DOM.
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//Creating and Inserting elements
// .insertAdjacentHTML

const header = document.querySelector('.header');
//!At this point, when creating an element, the element is not in the DOM
//!Note: We have to add the element to the DOM, ourselves
const message = document.createElement('section');
message.classList.add('cookie-message');
message.textContent = `We used cookies for improved functionality and analytics`;
message.innerHTML = `We used cookies for improved functionality and analytics. 
  <button class =
  "btn btn--close-cookie">Got it!
  </button>`;

console.log(message);
// header.prepend(message);
header.append(message);
const clone = message.cloneNode(true);
header.prepend(clone);
message.style.opacity = 100;

document.querySelectorAll('.btn--close-cookie').forEach(curr =>
  curr.addEventListener('click', () => {
    console.log('remove');
    console.log(curr.parentElement);
    curr.parentElement.remove();
  })
);
