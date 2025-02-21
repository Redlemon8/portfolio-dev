const burgerMenu = document.getElementById('burger-menu');
const navUL = document.querySelector('#nav-bar ul');

burgerMenu.addEventListener('click', () => {
  navUL.classList.toggle('active');
});
