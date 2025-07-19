const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -30% 0px', // trigger only when 30% from bottom of viewport
  },
);

// observe all sections
sections.forEach((section) => observer.observe(section));

// immediately show any sections already visible on page load
window.addEventListener('load', () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible');
      observer.unobserve(section);
    }
  });
});
