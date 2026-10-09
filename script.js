// Progressive enhancement: all portfolio content remains readable without JavaScript.
const sectionLinks = [...document.querySelectorAll('nav a')];
const sectionObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      for (const link of sectionLinks) {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }
}, {rootMargin: '-10% 0px -60% 0px'});
document.querySelectorAll('#research, #experience, #skills').forEach(section => sectionObserver.observe(section));
