// Navbar toggle for mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    navLinks.classList.toggle('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('active');
    }
  });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  formMsg.textContent = '';
  ['name', 'email', 'message'].forEach(field => {
    const input = document.getElementById(field);
    const error = input.nextElementSibling;
    if (!input.value.trim()) {
      error.textContent = 'This field is required';
      valid = false;
    } else if (field === 'email' && !/^[^@]+@[^@]+\.[^@]+$/.test(input.value.trim())) {
      error.textContent = 'Please enter a valid email';
      valid = false;
    } else {
      error.textContent = '';
    }
  });

  if (valid) {
    formMsg.style.color = '#2563eb';
    formMsg.textContent = 'Thank you! Your message has been sent.';
    contactForm.reset();
    setTimeout(() => { formMsg.textContent = ''; }, 4000);
  }
});
