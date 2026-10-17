// Translation is optional; all Chinese content is available without JavaScript.
const translations = [...document.querySelectorAll('[data-en]')];
for (const element of translations) element.dataset.zh = element.textContent;
const languageButtons = [...document.querySelectorAll('[data-lang]')];
function setLanguage(language) {
  const english = language === 'en';
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  document.title = english ? 'Congquan Zhang · Robotics & Embodied AI' : '张淙泉 · 机器人算法与具身智能';
  for (const element of translations) element.textContent = english ? element.dataset.en : element.dataset.zh;
  for (const button of languageButtons) button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  document.querySelector('.sidebar').setAttribute('aria-label', english ? 'Profile' : '个人信息');
  document.querySelector('.section-nav').setAttribute('aria-label', english ? 'Page navigation' : '页面导航');
  document.querySelector('.chart').setAttribute('aria-label', english ? 'R²Flow 54.0%; strongest baseline 20.8%' : 'R²Flow 54.0%，最优对比基线 20.8%');
  try { localStorage.setItem('portfolio-language', language); } catch {}
}
for (const button of languageButtons) button.addEventListener('click', () => setLanguage(button.dataset.lang));
try { if (localStorage.getItem('portfolio-language') === 'en') setLanguage('en'); } catch {}
const sectionLinks = [...document.querySelectorAll('.section-nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of sectionLinks) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, {rootMargin: '-8% 0px -65% 0px'});
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
