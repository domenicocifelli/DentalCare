/* ============================================
   DENTAL CARE — main.js
   ============================================ */

// ─── Navbar scroll & active link ───
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const hamburger = document.getElementById('hamburger');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 16) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ─── Hamburger toggle ───
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── Scroll reveal ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ─── Contact form ───
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Richiesta inviata con successo! Ti contatteremo presto.');
    form.reset();
  });
}

function showToast(message) {
  toast.querySelector('.toast-message').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Appointment button ───
document.querySelectorAll('[data-action="prenota"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
