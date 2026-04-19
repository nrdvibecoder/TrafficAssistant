// theme.js — scroll reveal only (light theme fixed)
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 70);
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
})();
