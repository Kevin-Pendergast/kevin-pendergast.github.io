const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemsEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');           
    hamburgerEl.classList.toggle('hamburger--open');
});

navItemsEls.forEach(navItemEl => {
    navItemEl.addEventListener('click', () => {
        navEl.classList.remove('nav--open');
        hamburgerEl.classList.remove('hamburger--open');
    });
});