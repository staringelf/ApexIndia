/*Navbar*/
const navShowButton= document.querySelector('.nav-show');
const navCloseButton = document.querySelector('.nav-close');
const dropdownToggleButton = document.querySelector('.dropdown-toggle');
const dropdownLinks = document.querySelectorAll('.dropdown__link');
const nav = document.querySelector('.navbar');
const body = document.body;
const navLinks = document.querySelectorAll('.nav__link');

const handlers = {
  showNav: function () {
    nav.classList.toggle('visible');
    body.classList.add('unscroll');
  },

  closeNav: function () {
    nav.classList.remove('visible');
    body.classList.remove('unscroll');
  },

  toggleDropdown: function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('dropdown-btn--clicked');
    const dropdown = this.parentElement.querySelector('.dropdown');
    dropdown.classList.toggle('exist');
    dropdownLinks.forEach(link => link.classList.add('be'));
  }
}

navShowButton.addEventListener('click', handlers.showNav);
navCloseButton.addEventListener('click', handlers.closeNav);
dropdownToggleButton.addEventListener('click', handlers.toggleDropdown);