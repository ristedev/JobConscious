const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -25% 0px',
  },
);

fadeIns.forEach((el) => observer.observe(el));

window.addEventListener('load', () => {
  fadeIns.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add('visible');
      observer.unobserve(el);
    }
  });
});
