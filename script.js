document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      toggleBtn.textContent = isDark ? 'LIGHT' : 'DARK';

      document.body.style.backgroundColor = '';
      document.querySelectorAll('section, main, .hero, header, footer').forEach(el => {
        el.style.backgroundColor = '';
        el.style.color = '';
      });
    });
  }

  // Wishlist Setup
  let wishlist = JSON.parse(localStorage.getItem('savana_wishlist')) || [];
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');

  wishlistBtns.forEach(btn => {
    const card = btn.closest('[data-id]');
    const productId = card ? card.dataset.id : null;

    if (productId && wishlist.includes(productId)) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');

      if (productId) {
        if (btn.classList.contains('active')) {
          wishlist.push(productId);
        } else {
          wishlist = wishlist.filter(id => id !== productId);
        }
        localStorage.setItem('savana_wishlist', JSON.stringify(wishlist));
      }
    });
  });

  // Newsletter Modal Elements & Open/Reset Logic
  const newsletterForm = document.getElementById('newsletter-form');
  const modalBody = document.getElementById('modal-body');
  const successMessage = document.getElementById('success-message');
  const modalOverlay = document.getElementById('Join');
  const openJoinBtns = document.querySelectorAll('a[href="#Join"], .open-join-btn');

  // Reset state and show modal when clicking "Join" links
  openJoinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalBody) modalBody.style.display = 'flex';
      if (successMessage) successMessage.style.display = 'none';
      if (newsletterForm) newsletterForm.reset();
      if (modalOverlay) modalOverlay.style.display = 'flex';
    });
  });

  // Handle Form Submission
  if (newsletterForm && modalBody && successMessage) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalBody.style.display = 'none';
      successMessage.style.display = 'block';
    });
  }

  // Modal Close Button 
  const closeBtn = document.querySelector('.close-btn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.style.display = 'none';
      history.replaceState(null, null, ' '); // Clears #Join from URL silently
    });
  }

  // Prevent Page Jumps for Empty Links
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
