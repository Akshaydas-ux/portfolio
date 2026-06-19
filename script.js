const reveals = document.querySelectorAll('.fade-up');

function revealSections() {
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealSections);

revealSections();
