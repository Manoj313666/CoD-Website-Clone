  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    if (navLinks.classList.contains('show')) {
      hamburger.src = 'assets/icons/close.svg';
    } else {
      hamburger.src = 'assets/icons/menu.svg';
    }
  });
