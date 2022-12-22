let burger = document.querySelector('.burger');
let burgerLine = document.querySelector('.burger__line');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');


burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  burger.classList.toggle('burger__line--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});
