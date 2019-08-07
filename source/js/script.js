var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var formBackground = document.querySelector('.listen-nav');

navMain.classList.remove('nav--nojs');
formBackground.classList.add('listen-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    formBackground.classList.remove('listen-nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    formBackground.classList.add('listen-nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
