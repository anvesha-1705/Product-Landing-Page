document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // Toggle class on body
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');

      // Update button text
      toggleBtn.textContent = isDark ? 'LIGHT' : 'DARK';

      // Clear inline styles so CSS rules take over cleanly!
      document.body.style.backgroundColor = '';
      
      document.querySelectorAll('section, main, .hero, header, footer').forEach(el => {
        el.style.backgroundColor = '';
        el.style.color = '';
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Load saved wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('savana_wishlist')) || [];

  const wishlistBtns = document.querySelectorAll('.wishlist-btn');

  // Initialize button states based on saved wishlist
  wishlistBtns.forEach(btn => {
    const card = btn.closest('[data-id]');
    const productId = card ? card.dataset.id : null;

    if (productId && wishlist.includes(productId)) {
      btn.classList.add('active');
    }

    // Click Event Listener
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');

      if (productId) {
        if (btn.classList.contains('active')) {
          wishlist.push(productId);
        } else {
          wishlist = wishlist.filter(id => id !== productId);
        }
        // Save updated array to localStorage
        localStorage.setItem('savana_wishlist', JSON.stringify(wishlist));
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById('newsletter-form');
  const modalBody = document.getElementById('modal-body');
  const successMessage = document.getElementById('success-message');

  if (newsletterForm && modalBody && successMessage) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop page reload

      // Hide the entire form & left card container
      modalBody.style.display = 'none';

      // Reveal the standalone cute success note
      successMessage.style.display = 'block';
    });
  }
});