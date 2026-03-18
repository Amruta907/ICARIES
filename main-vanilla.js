// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Countdown Timer
function initCountdown() {
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return;

  function updateCountdown() {
    const targetDate = new Date('2026-06-03T00:00:00').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
        <div class="countdown-box">
          <div class="countdown-number">${String(days).padStart(2, '0')}</div>
          <div class="countdown-item-label">Days</div>
        </div>
        <div class="countdown-box">
          <div class="countdown-number">${String(hours).padStart(2, '0')}</div>
          <div class="countdown-item-label">Hours</div>
        </div>
        <div class="countdown-box">
          <div class="countdown-number">${String(minutes).padStart(2, '0')}</div>
          <div class="countdown-item-label">Minutes</div>
        </div>
        <div class="countdown-box">
          <div class="countdown-number">${String(seconds).padStart(2, '0')}</div>
          <div class="countdown-item-label">Seconds</div>
        </div>
      `;
    } else {
      countdownElement.innerHTML = '<div class="countdown-box"><div class="countdown-number">0</div><div class="countdown-item-label">Event Started</div></div>';
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Generate stars for hero section
function generateStars() {
  const starsContainer = document.getElementById('starsContainer');
  if (!starsContainer) return;

  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const top = Math.random() * 60;
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.animationDelay = `${delay}s`;
    
    starsContainer.appendChild(star);
  }
}

// Smooth scroll with offset for nav links
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Check if the href is an anchor (starts with #)
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = 80; // Navbar height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  generateStars();
  setupNavigation();
});
