/* =====================================================
   DELICATE REPAIR — Interactive Behaviour
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ── Elements ── */
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  const navItems  = document.querySelectorAll('.nav-link');
  const faqItems  = document.querySelectorAll('.faq-item');
  const sections  = document.querySelectorAll('section[id], header[id], footer[id]');

  /* ──────────────────────────────────────────────
     1. Mobile Menu Toggle
  ────────────────────────────────────────────── */
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ──────────────────────────────────────────────
     2. Navbar Scroll Effect
  ────────────────────────────────────────────── */
  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // initial check

  /* ──────────────────────────────────────────────
     3. Active Nav Link on Scroll
  ────────────────────────────────────────────── */
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  /* ──────────────────────────────────────────────
     4. FAQ Accordion
  ────────────────────────────────────────────── */
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('open');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ──────────────────────────────────────────────
     5. Fade-in on Scroll
  ────────────────────────────────────────────── */
  const fadeElements = document.querySelectorAll(
    '.section-title, .section-divider, .service-card, .about-name-text, .about-name-visual, ' +
    '.therapist-portrait, .therapist-text, .who-we-help, .learn-intro, .learn-reasons, ' +
    '.learn-approach, .learn-cta, .faq-item, .policy-block, .feature-quote'
  );

  fadeElements.forEach((el) => el.classList.add('fade-in'));

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));

  /* ──────────────────────────────────────────────
     6. Smooth Scroll (fallback for older browsers)
  ────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
