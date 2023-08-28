const navIcon = document.querySelector('.nav__icon i');
const navMenu = document.querySelector('.nav__menu');
const closeBar = document.querySelector('.close__bar');

const toggleMenu = () => {
  navMenu.classList.toggle('active');
  closeBar.classList.toggle('active');
};

navIcon.addEventListener('click', toggleMenu);
closeBar.addEventListener('click', toggleMenu);
