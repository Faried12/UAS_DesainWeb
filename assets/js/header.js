const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    header.classList.add('active');
  } else {
    // Scroll ke atas
    header.classList.remove('active');
  }
  lastScrollTop = scrollTop;
});