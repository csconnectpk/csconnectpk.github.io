/**
 * CS CONNECT PAKISTAN
 * Interactions & Animations v2
 */

(function () {
  'use strict';

  // ── Preloader ──
  window.addEventListener('load', () => {
    const loader = document.querySelector('.preloader');
    const fill = document.querySelector('.preloader__fill');
    if (!loader || !fill) return;

    fill.style.width = '100%';

    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.classList.remove('loading');
    }, 600);
  });


  // ── Mobile Nav Toggle ──
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay = document.querySelector('.nav__overlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      overlay.classList.toggle('active');
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }


  // ── Scroll Reveal (IntersectionObserver) ──
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  // ── Active Nav Link Detection ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav__link, .nav__overlay-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();
    const isActive = linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html') ||
      (currentPage === 'index.html' && linkPage === 'index.html');

    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });


  // ── Stats Counter Animation ──
  const statNumbers = document.querySelectorAll('[data-count]');

  if (statNumbers.length > 0) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          animateCount(el, target, suffix);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(el => countObserver.observe(el));
  }

  function animateCount(el, target, suffix) {
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(update);
  }


  // ── Testimonials Column Scroll Pause on Hover ──
  const testimonialsColumns = document.querySelector('.testimonials-columns');

  if (testimonialsColumns) {
    const inners = testimonialsColumns.querySelectorAll('.testimonials-column__inner');

    testimonialsColumns.addEventListener('mouseenter', () => {
      inners.forEach(inner => { inner.style.animationPlayState = 'paused'; });
    });

    testimonialsColumns.addEventListener('mouseleave', () => {
      inners.forEach(inner => { inner.style.animationPlayState = 'running'; });
    });
  }


  // ── Animated Team Showcase ──
  const teamContainer = document.querySelector('.animated-team');

  if (teamContainer) {
    const members = [
      {
        name: 'Azan Waseem',
        role: 'Founder & Community Lead',
        bio: 'Founded CS Connect Pakistan and leads the community. Drives the vision of making CS education accessible for every student across Pakistan.',
        linkedin: '#'
      },
      {
        name: 'Maryam Ahmed',
        role: 'Design Lead',
        bio: 'Leads the design and creative direction of CS Connect. Ensures every touchpoint of the community looks and feels professional and welcoming.',
        linkedin: '#'
      },
      {
        name: 'Siraj Qazi',
        role: 'Mentor',
        bio: 'Guides students through their CS journey with hands-on mentorship. Helps community members navigate university choices and career decisions.',
        linkedin: '#'
      },
      {
        name: 'Khawaja Owais',
        role: 'Podcast Host & Co-Lead',
        bio: 'Hosts the CS Connect podcast, bringing real stories from professionals and students to the community through engaging conversations.',
        linkedin: '#'
      },
      {
        name: 'Talha Asghar',
        role: 'Mentor',
        bio: 'Supports students with technical guidance and career advice. Active in community sessions and workshops focused on practical skills.',
        linkedin: '#'
      },
      {
        name: 'Kashif Umair Liaqat',
        role: 'Mentor',
        bio: 'Senior software engineer bringing industry experience to the community. Mentors students on real-world development practices and career growth.',
        linkedin: '#'
      }
    ];

    let currentMember = 0;
    let autoPlayTimer = null;
    const AUTO_PLAY_INTERVAL = 5000;
    const images = teamContainer.querySelectorAll('.animated-team__image');
    const nameEl = teamContainer.querySelector('[data-team-name]');
    const roleEl = teamContainer.querySelector('[data-team-role]');
    const bioEl = teamContainer.querySelector('[data-team-bio]');
    const linkedinEl = teamContainer.querySelector('[data-team-linkedin]');
    const prevBtn = teamContainer.querySelector('[data-team-prev]');
    const nextBtn = teamContainer.querySelector('[data-team-next]');

    function updateTeamPositions() {
      images.forEach((img, i) => {
        if (i === currentMember) {
          img.setAttribute('data-pos', 'active');
        } else if (i === (currentMember + 1) % members.length) {
          img.setAttribute('data-pos', 'next');
        } else if (i === (currentMember - 1 + members.length) % members.length) {
          img.setAttribute('data-pos', 'prev');
        } else {
          img.setAttribute('data-pos', 'hidden');
        }
      });
    }

    function setTextWithBlur(el, text) {
      el.innerHTML = '';
      const words = text.split(' ');
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = word;
        el.appendChild(span);
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
        setTimeout(() => { span.classList.add('visible'); }, 60 * i);
      });
    }

    function goToMember(index) {
      currentMember = (index + members.length) % members.length;
      const member = members[currentMember];
      updateTeamPositions();
      setTextWithBlur(nameEl, member.name);
      roleEl.textContent = member.role;
      setTextWithBlur(bioEl, member.bio);
      if (linkedinEl) {
        linkedinEl.href = member.linkedin || '#';
      }
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        goToMember(currentMember + 1);
      }, AUTO_PLAY_INTERVAL);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => {
      goToMember(currentMember - 1);
      startAutoPlay();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      goToMember(currentMember + 1);
      startAutoPlay();
    });

    // Initialize first member and start auto-cycling
    goToMember(0);
    startAutoPlay();
  }



  // ── FAQ Accordion with Smooth Animation ──
  const faqContainer = document.querySelector('.faq');

  if (faqContainer) {
    const allDetails = faqContainer.querySelectorAll('details');

    allDetails.forEach(details => {
      // Wrap content after summary in .faq__answer for animation
      const summary = details.querySelector('summary');
      const children = Array.from(details.children).filter(c => c !== summary);
      const wrapper = document.createElement('div');
      wrapper.classList.add('faq__answer');
      children.forEach(c => wrapper.appendChild(c));
      details.appendChild(wrapper);

      summary.addEventListener('click', e => {
        e.preventDefault();
        const isOpen = details.hasAttribute('open');

        if (isOpen) {
          // Close this one
          closeDetails(details, wrapper);
        } else {
          // Close any other open details first
          allDetails.forEach(other => {
            if (other !== details && other.hasAttribute('open')) {
              const otherWrapper = other.querySelector('.faq__answer');
              closeDetails(other, otherWrapper);
            }
          });
          // Open this one
          openDetails(details, wrapper);
        }
      });
    });

    function openDetails(details, wrapper) {
      details.setAttribute('open', '');
      const height = wrapper.scrollHeight;
      wrapper.style.height = '0px';
      requestAnimationFrame(() => {
        wrapper.style.height = height + 'px';
      });
      wrapper.addEventListener('transitionend', function handler() {
        wrapper.style.height = '';
        wrapper.removeEventListener('transitionend', handler);
      });
    }

    function closeDetails(details, wrapper) {
      const height = wrapper.scrollHeight;
      wrapper.style.height = height + 'px';
      requestAnimationFrame(() => {
        wrapper.style.height = '0px';
      });
      wrapper.addEventListener('transitionend', function handler() {
        details.removeAttribute('open');
        wrapper.style.height = '';
        wrapper.removeEventListener('transitionend', handler);
      });
    }
  }


  // ── Shutter Text Effect ──
  document.querySelectorAll('[data-shutter]').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    el.classList.add('shutter-text');

    text.split('').forEach((char, i) => {
      const wrapper = document.createElement('span');
      wrapper.classList.add('shutter-char');
      wrapper.style.setProperty('--char-i', i);

      const main = document.createElement('span');
      main.classList.add('shutter-char__main');
      main.textContent = char === ' ' ? '\u00A0' : char;

      const sliceTop = document.createElement('span');
      sliceTop.classList.add('shutter-char__slice', 'shutter-char__slice--top');
      sliceTop.textContent = char === ' ' ? '\u00A0' : char;

      const sliceMid = document.createElement('span');
      sliceMid.classList.add('shutter-char__slice', 'shutter-char__slice--mid');
      sliceMid.textContent = char === ' ' ? '\u00A0' : char;

      const sliceBot = document.createElement('span');
      sliceBot.classList.add('shutter-char__slice', 'shutter-char__slice--bot');
      sliceBot.textContent = char === ' ' ? '\u00A0' : char;

      wrapper.appendChild(main);
      wrapper.appendChild(sliceTop);
      wrapper.appendChild(sliceMid);
      wrapper.appendChild(sliceBot);
      el.appendChild(wrapper);
    });
  });

})();
