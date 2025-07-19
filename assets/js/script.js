// toggle mobile menu
const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('closed');
});
