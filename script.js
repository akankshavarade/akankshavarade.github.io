// Advanced Interactive Animations & Effects
(() => {
  'use strict';

  /* ── PARTICLE SYSTEM ──────────────────────── */
  const particleCanvas = document.createElement('canvas');
  particleCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
  document.body.appendChild(particleCanvas);
  const pCtx = particleCanvas.getContext('2d');
  let particles = [];

  function resizeParticleCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  }
  resizeParticleCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * particleCanvas.width;
      this.y = Math.random() * particleCanvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 2 + 0.5;
      this.color = Math.random() > 0.5 ? '0,245,255' : '124,58,237';
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > particleCanvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > particleCanvas.height) this.vy *= -1;
    }
    draw() {
      pCtx.beginPath();
      pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      pCtx.fillStyle = `rgba(${this.color},${this.opacity})`;
      pCtx.fill();
    }
  }

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  /* ── MAGNETIC CURSOR EFFECT ──────────────── */
  if (window.innerWidth > 768) {
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-resume, .project-card, .stat-pill').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ── TEXT REVEAL ANIMATION ──────────────── */
  const splitText = (element) => {
    const text = element.textContent;
    element.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.cssText = `display:inline-block;opacity:0;transform:translateY(20px);animation:charFadeIn 0.5s ease forwards;animation-delay:${i * 0.03}s;`;
      element.appendChild(span);
    });
  };

  const style = document.createElement('style');
  style.textContent = `
    @keyframes charFadeIn {
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  const textRevealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.revealed) {
        splitText(e.target);
        e.target.dataset.revealed = 'true';
        textRevealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.section-title').forEach(el => {
    if (el.textContent.length < 50) {
      textRevealObs.observe(el);
    }
  });

  /* ── FLOATING ELEMENTS ──────────────────── */
  const floatingElements = document.querySelectorAll('.skill-icon-card, .about-card, .project-badge');
  floatingElements.forEach((el, i) => {
    el.style.animation = `float ${3 + (i % 3)}s ease-in-out infinite`;
    el.style.animationDelay = `${i * 0.1}s`;
  });

  const floatStyle = document.createElement('style');
  floatStyle.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(floatStyle);

  /* ── GLITCH EFFECT ON HOVER ──────────────── */
  document.querySelectorAll('.hero-name, .nav-logo').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.animation = 'glitch 0.3s ease';
      setTimeout(() => { el.style.animation = ''; }, 300);
    });
  });

  const glitchStyle = document.createElement('style');
  glitchStyle.textContent = `
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
  `;
  document.head.appendChild(glitchStyle);

  /* ── RIPPLE EFFECT ON CLICK ──────────────── */
  document.querySelectorAll('.btn-primary, .btn-secondary, .btn-resume').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        top: ${y}px;
        left: ${x}px;
        background: rgba(255,255,255,0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple {
      to { transform: scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(rippleStyle);

  /* ── TILT EFFECT ON CARDS ──────────────── */
  if (window.innerWidth > 768) {
    document.querySelectorAll('.project-card, .about-card, .skill-cat-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ── RESIZE HANDLER ──────────────────── */
  window.addEventListener('resize', () => {
    resizeParticleCanvas();
  }, { passive: true });

})();
