'use strict';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

overlay.addEventListener('click', function () {
  console.log('clicked on overaly');
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

btnCloseModal.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});
