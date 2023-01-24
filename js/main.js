new WOW().init();

const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.close');

cardButton.addEventListener('click', function(event) {
  modal.classList.add('is-open');
});
buttonClose.addEventListener('click', function(event) {
  modal.classList.remove('is-open');
});
