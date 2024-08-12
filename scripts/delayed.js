// add delayed functionality here
window.addEventListener('scroll', () => {
  const stickyElement = document.querySelector('.header-wrapper');

  if (window.scrollY > 0) {
    stickyElement.style.background = 'white';
  } else {
    stickyElement.style.background = 'transparent';
  }
});
