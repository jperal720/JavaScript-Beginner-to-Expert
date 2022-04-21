'use strict';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
