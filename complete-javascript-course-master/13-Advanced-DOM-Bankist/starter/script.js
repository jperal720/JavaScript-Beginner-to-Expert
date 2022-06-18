'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

//*Events

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', e => {
  //*element.scrollIntoView() method only works in modern browsers

  section1.scrollIntoView({
    behavior: 'smooth',
  });
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

// const header = document.querySelector('.header');
// //!At this point, when creating an element, the element is not in the DOM
// //!Note: We have to add the element to the DOM, ourselves
// const message = document.createElement('section');
// message.classList.add('cookie-message');
// message.textContent = `We used cookies for improved functionality and analytics`;
// message.innerHTML = `We used cookies for improved functionality and analytics.
//   <button class =
//   "btn btn--close-cookie">Got it!
//   </button>`;

// console.log(message);
// // header.prepend(message);
// header.append(message);
// const clone = message.cloneNode(true);
// header.prepend(clone);
// message.style.opacity = 100;

// document.querySelectorAll('.btn--close-cookie').forEach(curr =>
//   curr.addEventListener('click', () => {
//     console.log('remove');
//     console.log(curr.parentElement);
//     curr.parentElement.remove();
//   })
// );

// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;
// clone.style.backgroundColor = `#37383d`;

// console.log(message.style.width);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + `px`;
// console.log(getComputedStyle(message).height);

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.designer);
// console.log(logo.className);

// //Non-standar
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('designer', 'Jonathan');
// console.log(logo.getAttribute('designer'));
// const urlMichael =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Michael_Jackson_Dangerous_World_Tour_1993.jpg/385px-Michael_Jackson_Dangerous_World_Tour_1993.jpg';
// logo.setAttribute('src', urlMichael);
// logo.style.height =
//   Number.parseFloat(getComputedStyle(logo).height, 10) + 200 + 'px';
// logo.style.height =
//   Number.parseFloat(getComputedStyle(logo).width, 10) + 400 + 'px';

// //Data attributes
// console.log(logo.dataset.versionNumber);

// //Classes - how to manipulate them on the DOM.
// //?Don't worry about the details; it is just done to refresh memory
// logo.classList.add('c', 'j');
// logo.classList.remove('d');
// logo.classList.toggle('c');
// logo.classList.contains('d');

// //Do not manipulate classes like this //! It will only override the already written ones;
// logo.className = 'jonathan';

const h1 = document.querySelector('h1');

const alertFunc = e => {
  alert(`Mouse has entered`);

  h1.removeEventListener('mouseenter', alertFunc);
};

h1.addEventListener('mouseenter', alertFunc);

setTimeout(() => h1.removeEventListener('mouseenter', alertFunc), 3000);

// h1.onmouseenter = e => {
//   alert('you gay');
// };
