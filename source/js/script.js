var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var formBackground = document.querySelector('.listen-nav');

navMain.classList.remove('nav--nojs');
formBackground.classList.add('listen-nav--closed');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('nav__toggle--closed')) {
    navToggle.classList.remove('nav__toggle--closed');
    formBackground.classList.remove('listen-nav--closed');
    navToggle.classList.add('nav__toggle--opened');
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navToggle.classList.add('nav__toggle--closed');
    formBackground.classList.add('listen-nav--closed');
    navToggle.classList.remove('nav__toggle--opened');
    navMain.classList.remove('nav--opened');
    navMain.classList.add('nav--closed');
  }
});
