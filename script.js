'use strict';
//Selected elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
//Functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Displaying the modal window and the overlay
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

//Hiding the modal window and the overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Close the modal when it's visible and we press "esc"
document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closeModal();
  }
});
