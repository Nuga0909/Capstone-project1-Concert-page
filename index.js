/* eslint-disable linebreak-style */
window.onload = function () {
  const hamburgerButton = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    console.log("test");
    mobileMenu.classList.toggle('active');
  });

  const mobileMenuLinks = document.querySelectorAll('.mobile-nav');

  mobileMenuLinks.forEach(element => {
    element.addEventListener('click', () => {
      hamburgerButton.classList.remove('active');
      mobileMenu.classList.remove('active');
    // NAVBAR_LOGO.classList.remove("active");
    });
  });
};