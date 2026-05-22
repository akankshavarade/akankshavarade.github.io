// ═══════════════════════════════════════════════════════════════
// AI ENGINEER PORTFOLIO - ENHANCED VISUAL EFFECTS
// Matrix Rain, Advanced Scrolling, 3D Tilt, Magnetic Effects
// ═══════════════════════════════════════════════════════════════

(() => {
  'use strict';

  /* ── MATRIX RAIN EFFECT ──────────────────────── */
  const matrixCanvas = document.createElement('canvas');
  matrixCanvas.id = 'matrixCanvas';
  matrixCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.08;';
  document.body.appendChild(matrixCanvas);

  const mCtx = matrixCanvas.getContext('2d');
  let matrixColumns = [];
  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  function resizeMatrix() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    const columnCount = Math.floor(matrixCanvas.width / 20);
    matrixColumns = Array(columnCount).fill(1);
  }
  resizeMatrix();

  function drawMatrix() {
    mCtx.fillStyle = 'rgba(10, 10, 15, 0.08)';
    mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    mCtx.fillStyle = '#00d9ff';
    mCtx.font = '14px monospace';

    matrixColumns.forEach((y, index) => {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const x = index * 20;
      mCtx.fillText(char, x, y * 20);

      if (y * 20 > matrixCanvas.height && Math.random() > 0.975) {
        matrixColumns[index] = 0;
      }
      matrixColumns[index]++;
    });
  }

  setInterval(drawMatrix, 50);

  /* ── PARTICLE BURST ON CLICK ──────────────────── */
  function createParticleBurst(x, y) {
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 50 + Math.random() * 50;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        --tx: ${tx}px;
        --ty: ${ty}px;
      `;
      
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 800);
    }
  }

  document.querySelectorAll('.btn-primary, .btn-secondary, .btn-resume').forEach(btn => {
    btn.addEventListener('click', (e) => {
      createParticleBurst(e.clientX, e.clientY);
    });
  });

  /* ── 3D CARD TILT EFFECT ──────────────────── */
  function init3DTilt() {
    const cards = document.querySelectorAll('.project-card, .about-card, .skill-cat-card, .edu-card');
    
    cards.forEach(card => {
      card.classList.add('card-3d');
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.setProperty('--rotateX', `${rotateX}deg`);
        card.style.setProperty('--rotateY', `${rotateY}deg`);
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
      });
    });
  }

  /* ── MAGNETIC BUTTON EFFECT ──────────────────── */
  function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-resume, .nav-resume');
    
    buttons.forEach(btn => {
      btn.classList.add('btn-magnetic');
      
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  /* ── GLITCH TEXT EFFECT ──────────────────── */
  function initGlitchText() {
    const glitchElements = document.querySelectorAll('.hero-name, .section-title');
    
    glitchElements.forEach(el => {
      el.classList.add('glitch-text');
      el.setAttribute('data-text', el.textContent);
    });
  }

  /* ── HOLOGRAPHIC CARD EFFECT ──────────────────── */
  function initHoloCards() {
    const cards = document.querySelectorAll('.stat-pill, .skill-icon-card');
    cards.forEach(card => card.classList.add('holo-card'));
  }

  /* ── DATA STREAM LINES ──────────────────── */
  function createDataStreams() {
    const streamContainer = document.createElement('div');
    streamContainer.className = 'data-stream';
    document.body.appendChild(streamContainer);

    for (let i = 0; i < 15; i++) {
      const line = document.createElement('div');
      line.className = 'data-stream-line';
      line.style.left = `${Math.random() * 100}%`;
      line.style.animationDelay = `${Math.random() * 3}s`;
      line.style.animationDuration = `${2 + Math.random() * 2}s`;
      streamContainer.appendChild(line);
    }
  }

  /* ── ORBIT RINGS AROUND PROFILE ──────────────────── */
  function createOrbitRings() {
    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
    if (!heroImageWrapper) return;

    const ring1 = document.createElement('div');
    ring1.className = 'orbit-ring orbit-ring-1';
    
    const dot1 = document.createElement('div');
    dot1.className = 'orbit-dot orbit-dot-1';
    ring1.appendChild(dot1);
    
    heroImageWrapper.appendChild(ring1);

    const ring2 = document.createElement('div');
    ring2.className = 'orbit-ring orbit-ring-2';
    
    const dot2 = document.createElement('div');
    dot2.className = 'orbit-dot orbit-dot-2';
    ring2.appendChild(dot2);
    
    heroImageWrapper.appendChild(ring2);
  }

  /* ── ENHANCED SMOOTH SCROLL ──────────────────── */
  function initEnhancedScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 70;
          
          const startPosition = window.pageYOffset;
          const distance = offsetTop - startPosition;
          const duration = 1000;
          let start = null;
          
          function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }
          
          function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
          }
          
          requestAnimationFrame(animation);
        }
      });
    });
  }

  /* ── PARALLAX SCROLL FOR SECTIONS ──────────────────── */
  function initParallaxSections() {
    const parallaxElements = document.querySelectorAll('.section-header, .about-card, .skill-icon-card');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const elementVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (elementVisible) {
          const speed = 0.05 + (index % 3) * 0.02;
          const yPos = -(scrolled - elementTop) * speed;
          el.style.transform = `translateY(${yPos}px)`;
        }
      });
    }, { passive: true });
  }

  /* ── MOUSE TRAIL EFFECT ──────────────────── */
  function initMouseTrail() {
    // Mouse trail removed as requested
  }

  /* ── SCROLL VELOCITY INDICATOR ──────────────────── */
  function initScrollVelocity() {
    let lastScrollTop = 0;
    let velocity = 0;
    const indicator = document.createElement('div');
    indicator.style.cssText = `
      position: fixed;
      top: 70px;
      right: 20px;
      width: 4px;
      height: 0;
      background: linear-gradient(to bottom, var(--primary), var(--secondary));
      border-radius: 2px;
      z-index: 1001;
      transition: height 0.2s ease, opacity 0.3s ease;
      opacity: 0;
      box-shadow: 0 0 10px var(--primary);
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      velocity = Math.abs(scrollTop - lastScrollTop);
      lastScrollTop = scrollTop;
      
      if (velocity > 0) {
        indicator.style.opacity = '1';
        indicator.style.height = Math.min(velocity * 2, 100) + 'px';
      } else {
        indicator.style.opacity = '0';
      }
    }, { passive: true });
  }

  /* ── SECTION TRANSITION EFFECTS ──────────────────── */
  function initSectionTransitions() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'sectionFadeIn 0.8s ease forwards';
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes sectionFadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── SCROLL PROGRESS BAR ──────────────────── */
  function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      z-index: 10001;
      transition: width 0.1s ease;
      box-shadow: 0 0 10px var(--primary);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  /* ── ANIMATED COUNTER FOR STATS ──────────────────── */
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          const target = parseInt(entry.target.textContent);
          const suffix = entry.target.textContent.replace(target, '');
          let current = 0;
          const increment = target / 60;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target + suffix;
              clearInterval(timer);
            } else {
              entry.target.textContent = Math.floor(current) + suffix;
            }
          }, 30);
          
          entry.target.dataset.counted = 'true';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  /* ── SCANLINE EFFECT (removed) ──────────────────── */

  /* ── INITIALIZE ALL EFFECTS ──────────────────── */
  function initAllEffects() {
    setTimeout(() => {
      init3DTilt();
      initMagneticButtons();
      initGlitchText();
      initHoloCards();
      createDataStreams();
      createOrbitRings();
      initEnhancedScroll();
      initParallaxSections();
      initScrollVelocity();
      initSectionTransitions();
      createScrollProgress();
      animateCounters();
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllEffects);
  } else {
    initAllEffects();
  }

  window.addEventListener('resize', () => {
    resizeMatrix();
  }, { passive: true });

})();
