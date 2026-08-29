document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const footer = document.querySelector('footer, .main-footer, .footer');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');

      // 1. Update button text
      toggleBtn.textContent = isDark ? 'LIGHT' : 'DARK';

      // 2. Target ALL main section containers blocking the body background
      const sections = document.querySelectorAll('section, main, .hero, .hero-container, .main-content, header');
      
      sections.forEach(sec => {
        sec.style.backgroundColor = isDark ? '#0f172a' : '#fce7f3';
        sec.style.color = isDark ? '#ffffff' : '#111827';
      });

      // 3. Switch Body Background
      document.body.style.backgroundColor = isDark ? '#0f172a' : '#fce7f3';

      // 4. Switch Footer Background & Text
      if (footer) {
        footer.style.backgroundColor = isDark ? '#020617' : '#fbcfe8';
        footer.querySelectorAll('*').forEach(child => {
          child.style.color = isDark ? '#ffffff' : '#111827';
        });
      }
    });
  }
});