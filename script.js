
const toggleButton = document.querySelector('.navbar__toggle');
const mobileMenu = document.querySelector('.navbar__mobile-menu');

toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});