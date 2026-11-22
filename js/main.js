/* ============================================================
   WEBSMITH STUDIO — OFFICIAL WEBSITE
   Main JavaScript — Architecture, Centralised Data & Interactions
   ============================================================ */

'use strict';

/* ---- 1. CENTRAL CONFIGURATION (Single Source of Truth) ---- */
const CONFIG = {
  whatsappNumber: '263779999248',
  whatsappDisplay: '+263 77 999 9248',
  emailAddress: 'websmith.studio.dev@gmail.com',
  defaultWhatsAppMessage:
    "Hello Websmith Studio,\nI'd like to discuss a website\nfor my business.",
  socialLinks: {
    instagram: 'https://www.instagram.com/websmith.studio.dev',
    facebook: 'https://www.facebook.com/websmith.studio.dev',
    tiktok: 'https://www.tiktok.com/@websmith.studio.dev',
  },
  formEndpoint: null,
  formTimeoutMs: 10000,
};

function buildWhatsAppUrl(messageText) {
  const cleanDigits = (CONFIG.whatsappNumber || '').replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(messageText || CONFIG.defaultWhatsAppMessage);
  return cleanDigits
    ? `https://wa.me/${cleanDigits}?text=${encodedMsg}`
    : `https://wa.me/?text=${encodedMsg}`;
}

function buildMailtoUrl(subjectText, bodyText) {
  const subject = encodeURIComponent(subjectText || 'Project Enquiry — Websmith Studio');
  const body = encodeURIComponent(bodyText || CONFIG.defaultWhatsAppMessage);
  return `mailto:${CONFIG.emailAddress}?subject=${subject}&body=${body}`;
}

function buildGmailComposeUrl(subjectText, bodyText) {
  const to = encodeURIComponent(CONFIG.emailAddress);
  const su = encodeURIComponent(subjectText || 'Project Enquiry — Websmith Studio');
  const body = encodeURIComponent(bodyText || CONFIG.defaultWhatsAppMessage);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
}

/* ---- 2. VERCEL ANALYTICS EVENT HELPER ---- */
function trackEvent(eventName, meta = {}) {
  try {
    if (typeof window.va === 'function') {
      window.va('event', { name: eventName, data: meta });
    }
  } catch (_) {
    // Graceful no-op if blocked by client content blocker
  }
}

/* ============================================================
   3. PORTFOLIO CASE STUDIES — Single Source of Truth
      (3 Live Sites from the BrynBrands & Sekurutau Ecosystem,
       each with 3 high-resolution section screenshots + mobile view)
   ============================================================ */
const PORTFOLIO_PROJECTS = [
  {
    id:            'portfolio-1',
    archCode:      'CASE STUDY 01 // CORPORATE & INVESTMENT HOLDING PORTAL',
    title:         'BrynBrands Group — Pan-African Corporate & Investment Portal',
    subtitle:      'Flagship multi-sector holding portal engineered for BrynBrands Group (Private) Limited across Zimbabwe, SADC and international markets.',
    category:      'Corporate & Multi-Sector Holding Portal',
    projectType:   'New website',
    budgetDefault: 'US$600+',
    packageTier:   'Websmith Premium · Flagship Ecosystem (US$600–US$1,000+)',
    direction:     'Obsidian Sovereign Gold, Editorial Serif & Executive Telemetry',
    palette:       ['#0B0B0D', '#D4AF37', '#E6E4E0', '#26262B'],
    typography:    'Cormorant Garamond + Inter · 12-Col Executive Grid',
    deliverables: [
      '6 Strategic Operating Sector Pillars',
      '2014–2026 Interactive Leadership Timeline',
      'Dual Dark / Light Theme Architecture',
      'Company & Sector Deep-Dive Modals',
      'Corporate Compliance & Governance Suite',
      'Unified Cross-Site Ecosystem Navigation',
    ],
    problem:
      'BrynBrands Group required a flagship digital headquarters capable of presenting its diversified pan-African operations across Trade & Commerce, Infrastructure Development, Mining & Resources, Agriculture, Logistics, and Manufacturing & Creative industries — while anchoring its cultural sub-sites under one cohesive brand roof.',
    approach:
      'We engineered a high-contrast Obsidian and Sovereign Gold executive interface featuring split-screen editorial typography, interactive sector cards with deep-dive modals, an animated 2014–2026 corporate journey timeline, and instant navigation into the Sekurutau Sculpture Gallery and World Music platforms.',
    result:
      'Delivers an authoritative corporate flagship with JSON-LD Organization schema, fast zero-dependency performance, responsive mobile navigation, and seamless cross-ecosystem conversion pathways.',
    screens: [
      {
        tab:     '01 · Executive Hero',
        img:     'assets/portfolio/brynbrands-corporate-1.png',
        eyebrow: 'Screen 01 // Above-the-Fold Corporate Identity',
        heading: 'A Pan-African Solutions & Investment Group',
        badge:   'Est. 2014 · Zimbabwe & SADC',
        desc:    'Split-screen architectural hero pairing authoritative Cormorant Garamond typography with atmospheric mountain and city imagery, floating sector nodes, and the group motto "Providing Solutions... Pachedu!!!".',
        cards: [
          { tag: 'Brand Identity', title: 'Autographed BrynBrands Oval Emblem', meta: 'High-contrast header with direct links to Solutions, Industries, Gallery & Music' },
          { tag: 'Dual Theme UI', title: 'Adaptive Dark & Light Executive Modes', meta: 'Instant theme toggle persisted across the ecosystem' },
        ],
      },
      {
        tab:     '02 · 6 Solution Pillars',
        img:     'assets/portfolio/brynbrands-corporate-2.png',
        eyebrow: 'Screen 02 // Core Operating Capabilities',
        heading: 'Six Strategic Solution Pillars',
        badge:   'Multi-Sector Architecture',
        desc:    'Structured 3×2 bento grid presenting Trade & Commerce (01), Infrastructure Development (02), Mining & Resources (03), Agriculture & Agri-Processing (04), Logistics & Supply Chain (05), and Manufacturing & Creative (06).',
        cards: [
          { tag: 'Interactive Modals', title: 'Deep-Dive Sector Dossiers', meta: 'Clicking any pillar reveals operational scope, key metrics & regional footprint' },
          { tag: 'Consumer Brands', title: 'Home to Mvura Bottled Water & Creative Ventures', meta: 'Integrates industrial manufacturing with cultural leadership' },
        ],
      },
      {
        tab:     '03 · Sector Matrix',
        img:     'assets/portfolio/brynbrands-corporate-3.png',
        eyebrow: 'Screen 03 // Stakeholder & Industry Focus',
        heading: 'Market Focus, Governance & 2026 Timeline',
        badge:   '8 Industry Verticals',
        desc:    'High-contrast glass matrix mapping Government & Public Sector, Mining (Gold, Chrome, Lithium, PGMs), Agriculture, Energy & Utilities, Transport, Manufacturing, Financial Services, and Creative Industries over historic leadership photography.',
        cards: [
          { tag: 'Leadership Legacy', title: 'Interactive 2014–2026 Milestone Timeline', meta: 'Chronicles group expansion, diplomatic engagements & pan-African trade' },
          { tag: 'Direct Consultation', title: 'Corporate & Institutional Enquiry Flow', meta: 'Structured partnership and stakeholder contact channels' },
        ],
      },
    ],
  },
  {
    id:            'portfolio-2',
    archCode:      'CASE STUDY 02 // FINE ART & SCULPTURE EXHIBITION GALLERY',
    title:         'Sekurutau Gallery — Fine Art Stone Sculpture Exhibition & Acquisition',
    subtitle:      'Museum-grade digital gallery showcasing over three decades of serpentine, black springstone and opal stone sculptures by Dr. Hon. Bryn Taurai Mteki (Est. 1992).',
    category:      'Fine Art & Exhibition Storefront',
    projectType:   'New website',
    budgetDefault: 'US$350–US$500',
    packageTier:   'Websmith Business / Premium (US$350–US$1,000+)',
    direction:     'Basalt Obsidian, Terracotta Ember & Museum Editorial Pacing',
    palette:       ['#0D0C0B', '#D95F18', '#5E6F52', '#F3EFEA'],
    typography:    'Playfair Display + Syne + Space Mono · Museum Exhibition Grid',
    deliverables: [
      'Filterable Sculpture Collection (Available / Sold / Commission)',
      'Material, Dimension & Weight Provenance Ledgers',
      'Collector Acquisition & Commission Modal',
      'Monumental Public Commissions Showcase ("Chippi")',
      'Fullscreen Presentation Slideshow Mode',
      'Custom Magnetic Gallery Cursor & Scroll Choreography',
    ],
    problem:
      'Internationally collected sculptor Dr. Hon. Bryn Taurai Mteki (Sekurutau) needed a digital exhibition space worthy of his stone sculptures — one that communicates the tactile weight of serpentine, springstone, lepidolite and butter jade while enabling international collectors and curators to inquire about available works or commission new monuments.',
    approach:
      'We crafted a dark basalt museum gallery interface with dramatic Playfair Display typography ("Stone speaks through spirit"), real-time availability filters (All Works, Available, Sold, Commission), detailed sculpture provenance cards, and an integrated collector acquisition workflow.',
    result:
      'Transforms an extensive 33+ year sculptural archive into an interactive digital gallery that elevates collector trust and streamlines private acquisition and public commission enquiries.',
    screens: [
      {
        tab:     '01 · Editorial Hero',
        img:     'assets/portfolio/sekurutau-gallery-1.png',
        eyebrow: 'Screen 01 // Museum Exhibition Opening',
        heading: '"Stone Speaks Through Spirit" — Est. 1992',
        badge:   '33+ Years of Sculpture',
        desc:    'Dramatic editorial opening pairing kinetic word-reveal typography in Playfair Display with the featured 2024 serpentine sculpture "The Ancestor" and custom magnetic cursor choreography.',
        cards: [
          { tag: 'Artistic Lineage', title: 'Second-Generation Master Sculptor', meta: 'Trained under his father Richard Mteki and nephew of master sculptor Boira Mteki' },
          { tag: 'Cross-Ecosystem', title: 'Seamless Header Switch to Main Site & Music', meta: 'Unified navigation across the BrynBrands & Sekurutau ecosystem' },
        ],
      },
      {
        tab:     '02 · Selected Works',
        img:     'assets/portfolio/sekurutau-gallery-2.png',
        eyebrow: 'Screen 02 // Filterable Collector Catalogue',
        heading: '02 · Selected Works & Live Availability Filter',
        badge:   'Available · Sold · Commission',
        desc:    'Interactive sculpture grid allowing collectors to filter works by status (Available, Sold, Commission) and inspect stone material (Serpentine, Black Springstone, Opal Stone, Lepidolite, Butter Jade), exact dimensions, weight in kg, and studio provenance.',
        cards: [
          { tag: 'Provenance Ledger', title: 'Whispers of the Ancestors · Spirit of Ubuntu', meta: 'Displays exact cm dimensions, stone weight (55 kg – 120 kg) & Geneva/studio provenance' },
          { tag: 'Collector Modal', title: '1-Click Acquisition & Private Viewing Request', meta: 'Pre-populates the selected sculpture title into the collector enquiry modal' },
        ],
      },
      {
        tab:     '03 · Commissions',
        img:     'assets/portfolio/sekurutau-gallery-3.png',
        eyebrow: 'Screen 03 // Monumental Public Works',
        heading: '03 · Public Commissions & International Recognition',
        badge:   'National & Global Monuments',
        desc:    'Dedicated showcase for historic public commissions including the iconic 1995 national sculpture "Chippi" and diplomatic presentations to global leaders, paired with a fullscreen gallery slideshow mode.',
        cards: [
          { tag: 'National Commission', title: '"Chippi" (\'95) — Continental Landmark', meta: 'Commissioned to represent Zimbabwe on the continental and international stage' },
          { tag: 'Exhibition Archive', title: 'Four Continents of Private & Museum Collections', meta: 'Chronicles international exhibitions from 1992 to 2026' },
        ],
      },
    ],
  },
  {
    id:            'portfolio-3',
    archCode:      'CASE STUDY 03 // MUSIC STREAMING & DISCOGRAPHY PLATFORM',
    title:         'Sekurutau World Music — Interactive Audio Deck & 10-Album Archive',
    subtitle:      'Dedicated music platform for the October 2026 comeback album "Sahwira Mukuru" (CD BTM. 011), featuring a custom HTML5 mbira audio player and 10-album catalogue.',
    category:      'Music Streaming, Discography & Bookings',
    projectType:   'New website',
    budgetDefault: 'US$350–US$500',
    packageTier:   'Websmith Business / Premium (US$350–US$1,000+)',
    direction:     'Studio Obsidian, Warm Mbira Brass & Tactile Audio Hardware UI',
    palette:       ['#0E0B08', '#D9A74A', '#8C5320', '#F5EFE6'],
    typography:    'Playfair Display + Syne + Space Mono + Inter · Audio Deck Layout',
    deliverables: [
      'Custom HTML5 Audio Engine (6 Verified MP3 Tracks)',
      'Synchronized Spinning Vinyl & CD Disc Artwork',
      'Scrubbable Byte-Range Progress Bar & Volume Deck',
      'Artist Liner Notes & Production Credits Modals',
      'Complete 10-Album BTM Discography Archive (2000–2026)',
      'Streaming Links (Spotify, Apple, YouTube, Deezer) & Bookings',
    ],
    problem:
      'To launch his October 2026 comeback album "Sahwira Mukuru" (CD BTM. 011), Sekurutau needed an official music subsite where fans, promoters and festival directors could stream all 6 masterwork tracks directly in the browser, read heartfelt Shona/English song meanings and studio credits, explore his 10-album legacy since 2000, and book live performances.',
    approach:
      'We built a tactile dark-luxury audio platform powered by a centralised `MUSIC_DATA` store and custom HTML5 audio engine — complete with a spinning vinyl/CD disc that synchronizes with playback state, track-by-track cultural commentary, modal popups for authentic CD inlay liner notes, and HTTP byte-range seeking support.',
    result:
      'Delivers a zero-friction listening and booking hub that celebrates African Roots and Mbira heritage while driving global streaming and direct concert bookings.',
    screens: [
      {
        tab:     '01 · Album Hero',
        img:     'assets/portfolio/sekurutau-music-1.png',
        eyebrow: 'Screen 01 // October 2026 Album Launch Stage',
        heading: 'Sahwira Mukuru (CD BTM. 011) — Official Release Hero',
        badge:   '6 Masterwork Tracks',
        desc:    'Atmospheric album launch stage showcasing authentic CD inlay artwork with a peeking vinyl disc, catalog metadata (CD BTM. 011 · Sekurutau World Music), and instant jump actions to the audio player and 10-album archive.',
        cards: [
          { tag: 'Cultural Narrative', title: 'Friendship, Faith & Ancestral Identity', meta: 'Honours masahwira makuru and pays tribute to his late mother Tabeth Elizabeth Chikwenya' },
          { tag: 'Direct Action', title: '1-Click Jump to Audio Deck & Discography', meta: 'Designed for immediate listener engagement on mobile and desktop' },
        ],
      },
      {
        tab:     '02 · Audio Player',
        img:     'assets/portfolio/sekurutau-music-2.png',
        eyebrow: 'Screen 02 // Custom HTML5 Audio Engine',
        heading: 'Sahwira Mukuru Interactive Player & Tracklist',
        badge:   'Live HTML5 Audio Deck',
        desc:    'Custom-engineered audio player featuring synchronized spinning CD disc artwork, scrubbable timeline, loop/volume controls, and an interactive 6-track playlist (Sahwira Mukuru 07:24, Amai Hwee 04:00, Rugare Rwauya 03:26, Musikavanhu 03:44, Svaa Makudo 04:02, Rovambira 04:05).',
        cards: [
          { tag: 'Studio Credits', title: 'Recorded at Music for Development Studios', meta: 'Features 3 mbiras (Tsuro, Gore, Samson), brass trombone, acoustic & lead guitars, congas & backing harmonies' },
          { tag: 'Interactive Modals', title: 'Full Artist Liner Notes & Production Credits', meta: 'Dedicated popups displaying Sekurutau\'s signed inlay message and musician roster' },
        ],
      },
      {
        tab:     '03 · 10-Album Archive',
        img:     'assets/portfolio/sekurutau-music-3.png',
        eyebrow: 'Screen 03 // Three Decades of Sonic Legacy',
        heading: 'BTM Release Archive (2000–2026) & Live Bookings',
        badge:   '10 Official Albums',
        desc:    'Comprehensive discography grid spanning from his 2000 platinum debut "Kurauone" (BTM 01) through "Vadzoka" (BTM 08, featuring Selmar Mtukudzi), "Makarekare" (BTM 09), to the 2026 comeback "Sahwira Mukuru" (BTM 011), paired with global streaming links and booking hotlines.',
        cards: [
          { tag: 'Discography Ledger', title: 'Catalog IDs BTM 01 through BTM 011', meta: 'Chronicles 26 years of African Roots and Contemporary Mbira releases' },
          { tag: 'Global Distribution', title: 'YouTube Music, Spotify, Apple Music & Deezer', meta: 'Includes direct live booking lines (+263 78 680 7038 / +263 77 310 0474)' },
        ],
      },
    ],
  },
];

/* ============================================================
   4. UTILITIES
   ============================================================ */
function throttle(fn, ms) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn.apply(this, args);
    }
  };
}

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToSection(targetSelector) {
  const target = $(targetSelector);
  if (!target) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 74;
  const top = target.getBoundingClientRect().top + window.scrollY - navH;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}

/* ============================================================
   5. CONFIGURATION, CONTACT & ANALYTICS SYNC
   ============================================================ */
(function initConfigSync() {
  const waUrl = buildWhatsAppUrl(CONFIG.defaultWhatsAppMessage);

  const contactWa = $('#contact-whatsapp');
  if (contactWa) contactWa.setAttribute('href', waUrl);

  const footerWa = $('#footer-whatsapp');
  if (footerWa) footerWa.setAttribute('href', waUrl);

  const contactEmail = $('#contact-email');
  if (contactEmail) {
    contactEmail.setAttribute(
      'href',
      buildMailtoUrl('Website Project Enquiry — Websmith Studio', CONFIG.defaultWhatsAppMessage)
    );
  }

  const footerEmail = $('#footer-email');
  if (footerEmail) {
    footerEmail.setAttribute(
      'href',
      buildMailtoUrl('Website Project Enquiry — Websmith Studio', CONFIG.defaultWhatsAppMessage)
    );
  }

  const yearEl = $('#current-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Declarative Analytics Tracking via [data-track]
  document.addEventListener('click', (e) => {
    const tracked = e.target.closest('[data-track]');
    if (!tracked) return;
    trackEvent(tracked.dataset.track, {
      label: (tracked.textContent || '').trim().slice(0, 60),
      href: tracked.getAttribute('href') || '',
    });
  });
})();

/* ============================================================
   6. NAVIGATION & DIALOG FOCUS TRAP
   ============================================================ */
function trapFocusInContainer(e, container) {
  if (e.key !== 'Tab' || !container) return;
  const focusables = $$(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    container
  ).filter(el => !el.hasAttribute('hidden') && el.offsetParent !== null);

  if (!focusables.length) return;
  const first = focusables[0];
  const last  = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

(function initNav() {
  const nav         = $('#nav');
  const toggle      = $('#nav-toggle');
  const mobileNav   = $('#nav-mobile');
  const overlay     = $('#nav-overlay');
  const closeBtn    = $('#nav-close');
  const mobileLinks = $$('.nav__mobile-link');
  const mobileCta   = $('.nav__mobile-cta');

  if (!nav) return;

  function openMenu() {
    if (!mobileNav || !overlay || !toggle) return;
    mobileNav.classList.add('is-open');
    overlay.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => closeBtn?.focus());
  }

  function closeMenu() {
    if (!mobileNav || !overlay || !toggle) return;
    mobileNav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', () => {
    const isOpen = mobileNav?.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', () => {
    closeMenu();
    toggle?.focus();
  });
  overlay?.addEventListener('click', closeMenu);

  [...mobileLinks, mobileCta].forEach(el => {
    el?.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (!mobileNav?.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeMenu();
      toggle?.focus();
      return;
    }
    trapFocusInContainer(e, mobileNav);
  });
})();

/* ============================================================
   7. ARCHITECTURAL LANDING INTRO ("THE FORGE UNVEILING"),
      HERO STAGE CHOREOGRAPHY & SCROLL REVEAL
   ============================================================ */
(function initLandingIntroAndScrollReveal() {
  const loader        = $('#intro-loader');
  const progressBar   = $('#intro-progress-bar');
  const progressPct   = $('#intro-progress-pct');
  const heroRevealEls = $$('.hero .reveal-fade, .hero .reveal-up, .hero .reveal-right');
  const nonHeroEls    = $$('.reveal-fade, .reveal-up, .reveal-right').filter(
    el => !el.closest('.hero')
  );
  const counters      = $$('[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;

    if (prefersReducedMotion()) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1400;
    const start = performance.now();

    function update(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // Observe non-hero sections on scroll
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    nonHeroEls.forEach(el => el.classList.add('is-revealed'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08,
    });

    nonHeroEls.forEach(el => observer.observe(el));
  }

  let heroUnveiled = false;

  function unveilHeroStage(immediate = false) {
    if (heroUnveiled) return;
    heroUnveiled = true;

    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');

    if (immediate || prefersReducedMotion()) {
      if (loader) loader.classList.add('is-done');
      heroRevealEls.forEach(el => el.classList.add('is-revealed'));
      counters.forEach(c => animateCounter(c));
      return;
    }

    if (loader) {
      loader.classList.add('is-seam-lit');
      setTimeout(() => {
        loader.classList.add('is-exiting');

        // Stagger Hero elements as shutters part open
        heroRevealEls.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('is-revealed');
          }, 90 + i * 75);
        });

        setTimeout(() => {
          counters.forEach(c => animateCounter(c));
        }, 320);
      }, 160);

      setTimeout(() => {
        loader.classList.add('is-done');
      }, 1250);
    } else {
      heroRevealEls.forEach(el => el.classList.add('is-revealed'));
      counters.forEach(c => animateCounter(c));
    }
  }

  if (!loader || prefersReducedMotion()) {
    unveilHeroStage(true);
    return;
  }

  // Telemetry progress counter (000% -> 100% over 1420ms with cubic ease-in-out)
  const INTRO_DURATION = 1420;
  const startTime = performance.now();

  function stepTelemetry(now) {
    if (heroUnveiled) return;
    const elapsed = now - startTime;
    const t = Math.min(elapsed / INTRO_DURATION, 1);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${eased.toFixed(4)})`;
    }
    if (progressPct) {
      const pct = Math.round(eased * 100);
      progressPct.textContent = `${String(pct).padStart(3, '0')}%`;
    }

    if (t < 1) {
      requestAnimationFrame(stepTelemetry);
    } else {
      unveilHeroStage(false);
    }
  }

  requestAnimationFrame(stepTelemetry);

  // Allow instant click or keypress skip on intro stage
  loader.addEventListener('click', () => {
    if (progressBar) progressBar.style.transform = 'scaleX(1)';
    if (progressPct) progressPct.textContent = '100%';
    unveilHeroStage(false);
  }, { once: true });

  window.addEventListener('keydown', function onIntroKey(e) {
    if (heroUnveiled) {
      window.removeEventListener('keydown', onIntroKey);
      return;
    }
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      window.removeEventListener('keydown', onIntroKey);
      unveilHeroStage(false);
    }
  });
})();

/* ============================================================
   8. PORTFOLIO FILTER, VIEWPORT SWITCHER, INTERACTIVE UI STAGES
      & ARCHITECTURE SPECIFICATION MODAL
   ============================================================ */
(function initPortfolioFilter() {
  const grid       = $('#portfolio-grid');
  const filters    = $$('.portfolio__filter');
  const items      = $$('.portfolio__item');
  const deviceBtns = $$('.portfolio__device-btn');

  if (filters.length && items.length) {
    function filter(category) {
      if (grid) {
        grid.classList.toggle('is-filtered', category !== 'all');
      }
      items.forEach(item => {
        const match = category === 'all' || item.dataset.category === category;
        if (match) {
          item.classList.remove('is-hidden');
          requestAnimationFrame(() => {
            item.classList.add('is-revealed', 'is-inview');
          });
        } else {
          item.classList.add('is-hidden');
        }
      });
      trackEvent('portfolio_filter', { category });
      window.dispatchEvent(new CustomEvent('websmith:layoutchange'));
    }

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('is-active'));
        btn.classList.add('is-active');
        filter(btn.dataset.filter);
      });
    });
  }

  // Live Desktop / Mobile Viewport Switcher
  if (grid && deviceBtns.length) {
    deviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.device || 'desktop';
        grid.dataset.viewport = mode;
        deviceBtns.forEach(b => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        trackEvent('portfolio_viewport_switch', { viewport: mode });
        window.dispatchEvent(new CustomEvent('websmith:layoutchange'));
      });
    });
  }

  // Interactive 3-Screenshot Switcher on Each Portfolio Card (Top Tabs + Filmstrip Thumbnails)
  items.forEach(item => {
    const desktopImg = $('.portfolio__shot-img--desktop', item);
    const shotTabs   = $$('.portfolio__shot-tab', item);
    const filmThumbs = $$('.portfolio__film-thumb', item);

    function activateShot(src, caption) {
      if (!desktopImg || !src) return;
      if (desktopImg.getAttribute('src') === src) return;

      desktopImg.classList.add('is-swapping');
      setTimeout(() => {
        desktopImg.setAttribute('src', src);
        if (caption) desktopImg.setAttribute('alt', caption);
        desktopImg.classList.remove('is-swapping');
      }, 140);

      shotTabs.forEach(t => {
        t.classList.toggle('is-active', t.dataset.shotSrc === src);
      });
      filmThumbs.forEach(f => {
        f.classList.toggle('is-active', f.dataset.shotSrc === src);
      });

      trackEvent('portfolio_screenshot_switch', { project: item.id, src });
    }

    shotTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        activateShot(tab.dataset.shotSrc, tab.dataset.shotCaption);
      });
    });

    filmThumbs.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        activateShot(thumb.dataset.shotSrc, thumb.getAttribute('title'));
      });
    });
  });

  if (!items.length || prefersReducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-inview'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
        }
      });
    }, { rootMargin: '80px 0px', threshold: 0.08 });

    items.forEach(item => io.observe(item));
  }

  // Pointer specular highlight on liquid-glass card surfaces
  items.forEach(item => {
    let cachedRect = null;
    item.addEventListener('pointerenter', () => {
      cachedRect = item.getBoundingClientRect();
    }, { passive: true });

    item.addEventListener('pointermove', (e) => {
      const rect = cachedRect || item.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      item.style.setProperty('--spot-x', `${x.toFixed(1)}%`);
      item.style.setProperty('--spot-y', `${y.toFixed(1)}%`);
    }, { passive: true });
  });
})();

(function initPortfolioModal() {
  const modal          = $('#project-modal');
  const backdrop       = $('#modal-backdrop');
  const closeBtn       = $('#modal-close');
  const closeSecBtn    = $('#modal-close-secondary');
  const prevBtn        = $('#modal-prev');
  const nextBtn        = $('#modal-next');
  const contactBtn     = $('#modal-contact-btn');
  const catEl          = $('#modal-cat');
  const titleEl        = $('#modal-title');
  const subtitleEl     = $('#modal-subtitle');
  const pkgEl          = $('#modal-pkg');
  const swatchesEl     = $('#modal-swatches');
  const directionEl    = $('#modal-direction');
  const typographyEl   = $('#modal-typography');
  const problemEl      = $('#modal-problem');
  const approachEl     = $('#modal-approach');
  const resultEl       = $('#modal-result');
  const deliverablesEl = $('#modal-deliverables');

  // 3-Screenshot Showcase Gallery inside Case Study Modal
  const protoCodeEl    = $('#modal-proto-code');
  const protoTabsEl    = $('#modal-proto-tabs');
  const protoImgEl     = $('#modal-proto-img');
  const protoEyebrowEl = $('#modal-proto-eyebrow');
  const protoHeadingEl = $('#modal-proto-heading');
  const protoBadgeEl   = $('#modal-proto-badge');
  const protoDescEl    = $('#modal-proto-desc');
  const protoCardsEl   = $('#modal-proto-cards');

  if (!modal) return;

  let currentProjectIndex = 0;
  let lastFocusedEl = null;

  function getVisibleProjects() {
    const visibleIds = $$('.portfolio__item:not(.is-hidden)').map(el => el.id);
    const list = PORTFOLIO_PROJECTS.filter(p => visibleIds.includes(p.id));
    return list.length ? list : PORTFOLIO_PROJECTS;
  }

  function renderPrototypeScreen(project, screenIndex) {
    if (!project || !Array.isArray(project.screens) || !project.screens[screenIndex]) return;
    const sc = project.screens[screenIndex];

    if (protoImgEl && sc.img) {
      protoImgEl.src = sc.img;
      protoImgEl.alt = `${project.title} — ${sc.heading || sc.tab}`;
    }
    if (protoEyebrowEl) protoEyebrowEl.textContent = sc.eyebrow || '';
    if (protoHeadingEl) protoHeadingEl.textContent = sc.heading || '';
    if (protoBadgeEl)   protoBadgeEl.textContent   = sc.badge || '';
    if (protoDescEl)    protoDescEl.textContent    = sc.desc || '';

    if (protoCardsEl) {
      protoCardsEl.textContent = '';
      if (Array.isArray(sc.cards)) {
        sc.cards.forEach(c => {
          const card = document.createElement('div');
          card.className = 'modal__proto-card';

          const tag = document.createElement('span');
          tag.className = 'modal__proto-card-tag';
          tag.textContent = c.tag || '';

          const title = document.createElement('strong');
          title.className = 'modal__proto-card-title';
          title.textContent = c.title || '';

          const meta = document.createElement('span');
          meta.className = 'modal__proto-card-meta';
          meta.textContent = c.meta || '';

          card.appendChild(tag);
          card.appendChild(title);
          card.appendChild(meta);
          protoCardsEl.appendChild(card);
        });
      }
    }

    if (protoTabsEl) {
      $$('.modal__proto-tab', protoTabsEl).forEach((btn, idx) => {
        const active = idx === screenIndex;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    }
  }

  function renderProject(project) {
    if (!project) return;
    if (catEl)        catEl.textContent        = `${project.category} — Live Case Study`;
    if (titleEl)      titleEl.textContent      = project.title;
    if (subtitleEl)   subtitleEl.textContent   = project.subtitle || '';
    if (pkgEl)        pkgEl.textContent        = project.packageTier || '';
    if (directionEl)  directionEl.textContent  = project.direction || '';
    if (typographyEl) typographyEl.textContent = project.typography || '';
    if (problemEl)    problemEl.textContent    = project.problem;
    if (approachEl)   approachEl.textContent   = project.approach;
    if (resultEl)     resultEl.textContent     = project.result;
    if (protoCodeEl)  protoCodeEl.textContent  = project.archCode || 'CASE STUDY // MULTI-SCREEN CAPTURE';

    if (protoTabsEl) {
      protoTabsEl.textContent = '';
      if (Array.isArray(project.screens)) {
        project.screens.forEach((sc, idx) => {
          const tabBtn = document.createElement('button');
          tabBtn.type = 'button';
          tabBtn.className = `modal__proto-tab${idx === 0 ? ' is-active' : ''}`;
          tabBtn.setAttribute('role', 'tab');
          tabBtn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
          tabBtn.textContent = sc.tab;
          tabBtn.addEventListener('click', () => renderPrototypeScreen(project, idx));
          protoTabsEl.appendChild(tabBtn);
        });
        renderPrototypeScreen(project, 0);
      }
    }

    if (swatchesEl) {
      swatchesEl.textContent = '';
      if (Array.isArray(project.palette)) {
        project.palette.forEach(hex => {
          const swatch = document.createElement('span');
          swatch.className = 'modal__swatch';
          swatch.style.background = hex;
          swatch.title = hex;
          swatchesEl.appendChild(swatch);
        });
      }
    }

    if (deliverablesEl) {
      deliverablesEl.textContent = '';
      if (Array.isArray(project.deliverables)) {
        project.deliverables.forEach(label => {
          const tag = document.createElement('span');
          tag.className = 'modal__deliverable-tag';
          tag.textContent = label;
          deliverablesEl.appendChild(tag);
        });
      }
    }

    if (contactBtn) {
      contactBtn.dataset.projectTitle  = project.title;
      contactBtn.dataset.projectType   = project.projectType || 'New website';
      contactBtn.dataset.projectBudget = project.budgetDefault || 'US$350–US$500';
    }
  }

  function openModalById(projectId) {
    const visible = getVisibleProjects();
    const idx = visible.findIndex(p => p.id === projectId);
    currentProjectIndex = idx >= 0 ? idx : 0;

    const project = visible[currentProjectIndex];
    renderProject(project);
    lastFocusedEl = document.activeElement;

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    trackEvent('architecture_modal_open', { id: project?.id, title: project?.title });

    requestAnimationFrame(() => {
      modal.classList.add('is-open');
      closeBtn?.focus();
    });
  }

  function stepProject(delta) {
    const visible = getVisibleProjects();
    if (!visible.length) return;
    currentProjectIndex = (currentProjectIndex + delta + visible.length) % visible.length;
    renderProject(visible[currentProjectIndex]);
  }

  function closeModal() {
    if (modal.hasAttribute('hidden')) return;
    modal.classList.remove('is-open');
    setTimeout(() => {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
      if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
        lastFocusedEl.focus();
      }
    }, 250);
  }

  $$('.portfolio__item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (
        e.target.closest('.portfolio__similar-cta') ||
        e.target.closest('.portfolio__live-link') ||
        e.target.closest('.portfolio__shot-tab') ||
        e.target.closest('.portfolio__film-thumb')
      ) {
        return;
      }
      openModalById(item.id);
    });

    const viewBtn = $('.portfolio__view-btn', item);
    viewBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      openModalById(item.id);
    });

    const caseTrigger = $('.portfolio__case-trigger', item);
    caseTrigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      openModalById(item.id);
    });
  });

  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  closeSecBtn?.addEventListener('click', closeModal);
  prevBtn?.addEventListener('click', () => stepProject(-1));
  nextBtn?.addEventListener('click', () => stepProject(1));

  contactBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const projectTitle  = contactBtn.dataset.projectTitle || 'this website architecture';
    const projectType   = contactBtn.dataset.projectType || 'New website';
    const projectBudget = contactBtn.dataset.projectBudget || 'US$350–US$500';
    closeModal();
    prefillEnquiry(
      projectType,
      projectBudget,
      `Hello Websmith Studio, I'd like to commission a website built around the ${projectTitle}. `
    );
    setTimeout(() => scrollToSection('#contact'), 260);
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key === 'ArrowLeft')  stepProject(-1);
    if (e.key === 'ArrowRight') stepProject(1);
    trapFocusInContainer(e, modal);
  });
})();

/* ============================================================
   9. PACKAGE & SERVICE CTAs — Pre-populate Contact Form
   ============================================================ */
function prefillEnquiry(projectTypeValue, budgetValue, customGreeting) {
  const typeSelect   = $('#field-project-type');
  const budgetSelect = $('#field-budget');
  const messageField = $('#field-message');
  const form         = $('#contact-form');
  const success      = $('#form-success');

  if (form && form.style.display === 'none') {
    form.style.display = '';
    success?.setAttribute('hidden', '');
  }

  if (typeSelect && projectTypeValue) {
    typeSelect.value = projectTypeValue;
  }
  if (budgetSelect && budgetValue) {
    budgetSelect.value = budgetValue;
  }

  if (messageField && customGreeting) {
    const current = messageField.value.trim();
    const isAutoGreeting = !current || /^Hello Websmith Studio,/i.test(current);
    if (isAutoGreeting) {
      messageField.value = customGreeting;
    }
  }
}

(function initPackageAndServiceCTAs() {
  // Package CTAs
  $$('.pkg-card__cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkgName   = btn.dataset.pkgName;
      const pkgBudget = btn.dataset.pkgBudget || 'US$350–US$500';
      if (!pkgName) return;
      trackEvent('package_select', { package: pkgName, budget: pkgBudget });
      prefillEnquiry(
        'New website',
        pkgBudget,
        `Hello Websmith Studio, I'm interested in the ${pkgName} package (${pkgBudget}). `
      );
    });
  });

  // Service & Maintenance Enquiry Links
  $$('[data-enquire-type]').forEach(link => {
    link.addEventListener('click', () => {
      const pType   = link.dataset.enquireType || 'New website';
      const pBudget = link.dataset.enquireBudget || '';
      const pName   = link.dataset.enquireName || 'a website project';
      trackEvent('service_enquire_select', { type: pType, name: pName, budget: pBudget });
      prefillEnquiry(
        pType,
        pBudget,
        `Hello Websmith Studio, I'm interested in ${pName}. `
      );
    });
  });
})();

/* ============================================================
   10. FUNCTIONAL FAQ ACCORDION
   ============================================================ */
(function initFaqAccordion() {
  const triggers = $$('.faq__trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) {
        if (!isExpanded) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      }
      window.dispatchEvent(new CustomEvent('websmith:layoutchange'));
    });
  });
})();

/* ============================================================
   11. CONTACT FORM — Validation, Honeypot & WhatsApp/Email Dispatch
   ============================================================ */
(function initContactForm() {
  const form              = $('#contact-form');
  const success           = $('#form-success');
  const briefPreview      = $('#form-brief-preview');
  const waDispatchBtn     = $('#form-wa-dispatch');
  const mailtoDispatchBtn = $('#form-mailto-dispatch');
  const gmailDispatchBtn  = $('#form-gmail-dispatch');
  const copyBtn           = $('#form-copy-btn');
  const resetBtn          = $('#form-reset-btn');
  const honeypot          = $('#field-website');

  if (!form) return;

  const fields = {
    name: {
      el: $('#field-name'),
      error: $('#error-name'),
      validate: v => v.trim().length >= 2 ? '' : 'Please enter your name.',
    },
    business: {
      el: $('#field-business'),
      error: $('#error-business'),
      validate: v => v.trim().length >= 1 ? '' : 'Please enter your business name.',
    },
    email: {
      el: $('#field-email'),
      error: $('#error-email'),
      validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
    },
    whatsapp: {
      el: $('#field-whatsapp'),
      error: $('#error-whatsapp'),
      validate: v => v.replace(/[^0-9]/g, '').length >= 7 ? '' : 'Please enter a valid WhatsApp number.',
    },
    projectType: {
      el: $('#field-project-type'),
      error: $('#error-projectType'),
      validate: v => v.trim() !== '' ? '' : 'Please select a project type.',
    },
    budget: {
      el: $('#field-budget'),
      error: $('#error-budget'),
      validate: v => v.trim() !== '' ? '' : 'Please select an approximate budget.',
    },
    message: {
      el: $('#field-message'),
      error: $('#error-message'),
      validate: v => v.trim().length >= 10 ? '' : 'Please describe your project (at least 10 characters).',
    },
  };

  function showError(fieldKey, message) {
    const { el, error } = fields[fieldKey];
    if (!el || !error) return;
    el.classList.add('is-error');
    el.setAttribute('aria-invalid', 'true');
    error.textContent = message;
    error.classList.add('is-visible');
  }

  function clearError(fieldKey) {
    const { el, error } = fields[fieldKey];
    if (!el || !error) return;
    el.classList.remove('is-error');
    el.removeAttribute('aria-invalid');
    error.textContent = '';
    error.classList.remove('is-visible');
  }

  function validateAll() {
    let valid = true;
    Object.entries(fields).forEach(([key, field]) => {
      if (!field.el) return;
      const msg = field.validate(field.el.value);
      if (msg) {
        showError(key, msg);
        valid = false;
      } else {
        clearError(key);
      }
    });
    return valid;
  }

  Object.entries(fields).forEach(([key, field]) => {
    if (!field.el) return;
    field.el.addEventListener('blur', () => {
      const msg = field.validate(field.el.value);
      if (msg) showError(key, msg);
      else clearError(key);
    });
    field.el.addEventListener('input', () => {
      if (field.el.classList.contains('is-error')) {
        const msg = field.validate(field.el.value);
        if (!msg) clearError(key);
      }
    });
    field.el.addEventListener('change', () => {
      if (field.el.classList.contains('is-error')) {
        const msg = field.validate(field.el.value);
        if (!msg) clearError(key);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (honeypot && honeypot.value.trim() !== '') return;

    if (!validateAll()) {
      const firstError = Object.values(fields).find(f => f.el?.classList.contains('is-error'));
      firstError?.el?.focus();
      return;
    }

    const businessName = fields.business.el.value.trim();
    const projectType  = fields.projectType.el.value;
    const budget       = fields.budget.el.value;

    const summaryLines = [
      'Hello Websmith Studio,',
      "I'd like to discuss a website for my business.",
      '',
      '--- PROJECT ENQUIRY ---',
      `Name: ${fields.name.el.value.trim()}`,
      `Business Name: ${businessName}`,
      `Email: ${fields.email.el.value.trim()}`,
      `WhatsApp Number: ${fields.whatsapp.el.value.trim()}`,
      `Project Type: ${projectType}`,
      `Approximate Budget: ${budget}`,
      '',
      'Project Description:',
      fields.message.el.value.trim(),
    ].join('\n');

    const emailSubject = `Project Enquiry: ${businessName} (${projectType})`;
    const waUrl        = buildWhatsAppUrl(summaryLines);
    const mailtoUrl    = buildMailtoUrl(emailSubject, summaryLines);
    const gmailUrl     = buildGmailComposeUrl(emailSubject, summaryLines);

    if (briefPreview) briefPreview.textContent = summaryLines;
    if (waDispatchBtn) waDispatchBtn.setAttribute('href', waUrl);
    if (mailtoDispatchBtn) mailtoDispatchBtn.setAttribute('href', mailtoUrl);
    if (gmailDispatchBtn) gmailDispatchBtn.setAttribute('href', gmailUrl);

    trackEvent('enquiry_form_prepared', {
      projectType,
      budget,
    });

    form.style.display = 'none';
    if (success) {
      success.removeAttribute('hidden');
      success.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
    }

    // Automatically open WhatsApp with the customer's formatted enquiry in a new tab
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (_) {
      // Fallback: user can click #form-wa-dispatch, #form-mailto-dispatch, or #form-gmail-dispatch directly
    }
  });

  copyBtn?.addEventListener('click', () => {
    const text = briefPreview ? briefPreview.textContent : '';
    if (text && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Brief Copied ✓';
        trackEvent('enquiry_brief_copied');
        setTimeout(() => {
          copyBtn.textContent = orig;
        }, 2200);
      });
    }
  });

  resetBtn?.addEventListener('click', () => {
    success?.setAttribute('hidden', '');
    form.style.display = '';
    $('#field-message')?.focus();
  });
})();

/* ============================================================
   12. SMOOTH SCROLL (for anchor links)
   ============================================================ */
(function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    scrollToSection(href);
    history.pushState(null, '', href);
  });
})();

/* ============================================================
   13. TYPEWRITER TAGLINE (VISIBILITY-AWARE)
   ============================================================ */
(function initTypewriter() {
  const el = document.querySelector('.typewriter');
  if (!el) return;

  const phrases = [
    'Custom website design shaped around your business.',
    'Responsive development built for real people.',
    'Digital storefronts that communicate your value.',
    'Thoughtful digital experiences made to grow.',
  ];

  if (prefersReducedMotion()) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let pauseMs   = 0;

  function tick() {
    if (document.hidden) {
      setTimeout(tick, 1000);
      return;
    }

    const phrase = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = phrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) {
        deleting = true;
        pauseMs  = 2200;
      } else {
        pauseMs = 50;
      }
    } else {
      el.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        pauseMs = 400;
      } else {
        pauseMs = 26;
      }
    }

    setTimeout(tick, pauseMs);
  }

  setTimeout(tick, 1200);
})();

/* ============================================================
   14. TECH STRIP — Infinite-Scroll Clone
   ============================================================ */
(function initTechStrip() {
  const track = document.getElementById('tech-strip-track');
  if (!track) return;

  const items = Array.from(track.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
})();

/* ============================================================
   15. ABOUT WEBSMITH CAROUSEL
   ============================================================ */
(function initAboutCarousel() {
  const carousel = document.getElementById('testimonials-carousel');
  const controls = $('.testimonials__controls');
  const slides   = $$('.testimonials__slide');
  const dots     = $$('.testimonials__dot');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;
  const DELAY = 6500;

  function goTo(idx) {
    slides[current]?.classList.remove('is-active');
    dots[current]?.classList.remove('is-active');
    dots[current]?.removeAttribute('aria-current');

    current = (idx + slides.length) % slides.length;

    slides[current]?.classList.add('is-active');
    dots[current]?.classList.add('is-active');
    dots[current]?.setAttribute('aria-current', 'true');
  }

  function next() { goTo(current + 1); }

  function startAuto() {
    clearInterval(timer);
    if (!prefersReducedMotion() && !document.hidden) {
      timer = setInterval(next, DELAY);
    }
  }

  function stopAuto() {
    clearInterval(timer);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.idx, 10));
      startAuto();
    });
  });

  controls?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const delta = e.key === 'ArrowRight' ? 1 : -1;
      goTo(current + delta);
      dots[current]?.focus();
      startAuto();
    }
  });

  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopAuto() : startAuto();
  });

  carousel?.addEventListener('mouseenter', stopAuto);
  carousel?.addEventListener('mouseleave', startAuto);
  startAuto();
})();

/* ============================================================
   16. UNIFIED FLUID SCROLL CHOREOGRAPHY ENGINE
   ============================================================ */
(function initFluidScrollChoreography() {
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  const lerp  = (start, end, factor) => start + (end - start) * factor;

  const nav            = $('#nav');
  const navLinks       = $$('.nav__link');
  const progressBar    = $('#scroll-progress');
  const allSections    = $$('section[id]');
  const portfolioItems = $$('.portfolio__item');

  const varCache = new WeakMap();
  function setVar(el, prop, val) {
    if (!el) return;
    let map = varCache.get(el);
    if (!map) {
      map = Object.create(null);
      varCache.set(el, map);
    }
    if (map[prop] !== val) {
      map[prop] = val;
      el.style.setProperty(prop, val);
    }
  }

  if (prefersReducedMotion()) {
    const onReducedScroll = throttle(() => {
      const sy = window.scrollY || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (nav) nav.classList.toggle('scrolled', sy > 40);
      if (progressBar) setVar(progressBar, '--page-progress', clamp(sy / maxScroll, 0, 1).toFixed(4));

      let current = '';
      allSections.forEach(sec => {
        if (sy >= sec.offsetTop - 140) current = sec.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }, 60);

    window.addEventListener('scroll', onReducedScroll, { passive: true });
    onReducedScroll();
    return;
  }

  // Ambient Cross-Section Aura Layer
  const auraWrap = document.createElement('div');
  auraWrap.className = 'scroll-aura';
  auraWrap.setAttribute('aria-hidden', 'true');
  const auraOrb = document.createElement('div');
  auraOrb.className = 'scroll-aura__orb';
  auraWrap.appendChild(auraOrb);
  document.body.prepend(auraWrap);

  const isCoarsePointer = Boolean(
    window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches
  );

  // Value Proposition Lead Scrubbed Word Illumination
  const aboutLead = $('.about__lead');
  const scrubWords = [];
  if (aboutLead && !isCoarsePointer) {
    const rawWords = aboutLead.textContent.trim().split(/\s+/);
    aboutLead.textContent = '';
    rawWords.forEach((word, idx) => {
      const span = document.createElement('span');
      span.className = 'scrub-word';
      span.textContent = word;
      aboutLead.appendChild(span);
      scrubWords.push(span);
      if (idx < rawWords.length - 1) {
        aboutLead.appendChild(document.createTextNode(' '));
      }
    });
  }

  const heroSec      = $('#home');
  const aboutSec     = $('#value');
  const aboutPillars = $('.about__pillars');
  const processSteps = $$('.process__step');
  const techTrack    = $('#tech-strip-track');
  const techStripSec = $('.tech-strip');

  const sectionAuras = [
    { el: heroSec,        color: 'rgba(201, 169, 110, 0.075)', x: -120, y: -80, top: 0, height: 0 },
    { el: aboutSec,       color: 'rgba(201, 169, 110, 0.06)',  x: 160,  y: -40, top: 0, height: 0 },
    { el: $('#work'),     color: 'rgba(79, 110, 247, 0.06)',   x: 120,  y: 50,  top: 0, height: 0 },
    { el: $('#services'), color: 'rgba(120, 145, 235, 0.05)',  x: -140, y: 60,  top: 0, height: 0 },
    { el: $('#process'),  color: 'rgba(201, 169, 110, 0.06)',  x: -160, y: 40,  top: 0, height: 0 },
    { el: $('#pricing'),  color: 'rgba(201, 169, 110, 0.08)',  x: 0,    y: -50, top: 0, height: 0 },
    { el: $('#about'),    color: 'rgba(201, 169, 110, 0.07)',  x: 0,    y: 0,   top: 0, height: 0 },
    { el: $('#contact'),  color: 'rgba(52, 199, 106, 0.045)',  x: -100, y: 80,  top: 0, height: 0 },
  ].filter(item => item.el);

  const geoCache = {
    vh: window.innerHeight || 1,
    maxScroll: 1,
    about: null,
    aboutLead: null,
    aboutPillars: null,
    sections: [],
    processSteps: [],
    portfolioItems: [],
  };

  function boxOf(el, scrollY) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { el, top: r.top + scrollY, height: Math.max(1, r.height) };
  }

  function measureGeometryCache() {
    const sy = window.scrollY || 0;
    geoCache.vh = window.innerHeight || 1;
    geoCache.maxScroll = Math.max(1, document.documentElement.scrollHeight - geoCache.vh);

    geoCache.about        = boxOf(aboutSec, sy);
    geoCache.aboutLead    = boxOf(aboutLead, sy);
    geoCache.aboutPillars = boxOf(aboutPillars, sy);

    geoCache.sections       = allSections.map(s => ({ id: s.id, ...boxOf(s, sy) }));
    geoCache.processSteps   = processSteps.map(p => boxOf(p, sy));
    geoCache.portfolioItems = portfolioItems
      .filter(item => !item.classList.contains('is-hidden'))
      .map(item => boxOf(item, sy));

    sectionAuras.forEach(item => {
      const b = boxOf(item.el, sy);
      if (b) {
        item.top = b.top;
        item.height = b.height;
      }
    });
  }

  let marqueeX = 0;
  let marqueeHalfWidth = 0;
  let marqueeHovered = false;
  let techStripVisible = true;

  function measureMarquee() {
    if (!techTrack) return;
    marqueeHalfWidth = techTrack.scrollWidth / 2;
  }

  let targetScrollY = window.scrollY || 0;
  let smoothScrollY = targetScrollY;
  let lastSmoothY   = smoothScrollY - 1;
  let scrollVel     = 0;
  let rafId         = null;
  let lastNavScrolled = null;
  let lastActiveSecId = '';

  function requestTick() {
    if (rafId === null && !document.hidden) {
      rafId = requestAnimationFrame(tick);
    }
  }

  if (techTrack) {
    techTrack.classList.add('is-js-marquee');
    techTrack.addEventListener('mouseenter', () => { marqueeHovered = true; });
    techTrack.addEventListener('mouseleave', () => { marqueeHovered = false; });

    if ('IntersectionObserver' in window && techStripSec) {
      const stripIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          techStripVisible = entry.isIntersecting;
          if (techStripVisible) requestTick();
        });
      }, { rootMargin: '120px 0px' });
      stripIo.observe(techStripSec);
    }
  }

  const onResizeOrLayout = throttle(() => {
    measureMarquee();
    measureGeometryCache();
    lastSmoothY = smoothScrollY - 1;
    requestTick();
  }, 150);

  window.addEventListener('resize', onResizeOrLayout, { passive: true });
  window.addEventListener('load', onResizeOrLayout, { once: true });
  window.addEventListener('websmith:layoutchange', onResizeOrLayout);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) requestTick();
  });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY || 0;
    requestTick();
  }, { passive: true });

  function tick() {
    rafId = null;
    if (document.hidden) return;

    const vh = geoCache.vh;
    smoothScrollY = isCoarsePointer ? targetScrollY : lerp(smoothScrollY, targetScrollY, 0.12);
    const rawDelta = smoothScrollY - lastSmoothY;
    lastSmoothY = smoothScrollY;
    scrollVel = isCoarsePointer ? rawDelta : lerp(scrollVel, rawDelta, 0.18);

    const isSettling = isCoarsePointer
      ? Math.abs(rawDelta) > 0.01
      : (Math.abs(targetScrollY - smoothScrollY) > 0.04 || Math.abs(scrollVel) > 0.04);

    if (techTrack && techStripVisible && marqueeHalfWidth > 0) {
      const baseSpeed = marqueeHovered ? 0.12 : 0.65;
      const velocityBoost = clamp(scrollVel * 0.22, -4.5, 4.5);
      marqueeX -= (baseSpeed + velocityBoost);

      if (marqueeX <= -marqueeHalfWidth) {
        marqueeX += marqueeHalfWidth;
      } else if (marqueeX > 0) {
        marqueeX -= marqueeHalfWidth;
      }

      const skewDeg = clamp(scrollVel * -0.18, -7, 7);
      setVar(techTrack, '--marquee-x', `${marqueeX.toFixed(2)}px`);
      setVar(techTrack, '--marquee-skew', `${skewDeg.toFixed(2)}deg`);
    }

    if (isSettling) {
      if (progressBar) {
        const pageProg = clamp(smoothScrollY / geoCache.maxScroll, 0, 1);
        setVar(progressBar, '--page-progress', pageProg.toFixed(4));
      }

      const isScrolled = targetScrollY > 40;
      if (nav && isScrolled !== lastNavScrolled) {
        lastNavScrolled = isScrolled;
        nav.classList.toggle('scrolled', isScrolled);
      }

      let currentSecId = '';
      for (let i = 0; i < geoCache.sections.length; i++) {
        const sec = geoCache.sections[i];
        if (targetScrollY >= sec.top - 140) {
          currentSecId = sec.id;
        }
      }
      if (currentSecId !== lastActiveSecId) {
        lastActiveSecId = currentSecId;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${currentSecId}`);
        });
      }

      // Value Proposition: Word Illumination + 3D Card + Pillar Filament
      if (geoCache.about) {
        const top = geoCache.about.top - smoothScrollY;
        const bottom = top + geoCache.about.height;
        if (bottom > -80 && top < vh + 80) {
          const progress = clamp((vh - top) / (vh + geoCache.about.height), 0, 1);
          setVar(aboutSec, '--about-progress', progress.toFixed(3));

          if (scrubWords.length && geoCache.aboutLead) {
            const leadTop = geoCache.aboutLead.top - smoothScrollY;
            const leadScrub = clamp((vh * 0.78 - leadTop) / (vh * 0.42), 0, 1);
            const litCount = leadScrub * scrubWords.length;

            for (let w = 0; w < scrubWords.length; w++) {
              const wordEl = scrubWords[w];
              const wordProgress = clamp(litCount - w, 0, 1);
              const opacity = (0.28 + wordProgress * 0.72).toFixed(2);
              setVar(wordEl, '--word-lit', opacity);
              wordEl.classList.toggle('is-lit', wordProgress > 0.75);
            }
          }

          if (geoCache.aboutPillars) {
            const pilTop = geoCache.aboutPillars.top - smoothScrollY;
            const draw = clamp((vh * 0.82 - pilTop) / geoCache.aboutPillars.height, 0, 1);
            setVar(aboutPillars, '--pillars-draw', draw.toFixed(3));
          }
        }
      }

      // Process Section: Real-Time Timeline Draw
      for (let i = 0; i < geoCache.processSteps.length; i++) {
        const step = geoCache.processSteps[i];
        const top = step.top - smoothScrollY;
        const bottom = top + step.height;
        if (bottom > -60 && top < vh + 60) {
          const stepFill = clamp((vh * 0.68 - top) / step.height, 0, 1);
          setVar(step.el, '--connector-fill', stepFill.toFixed(3));
          step.el.classList.toggle('is-step-lit', stepFill > 0.08);
        }
      }

      // Portfolio Items: Stage Parallax & Focus Choreography
      for (let i = 0; i < geoCache.portfolioItems.length; i++) {
        const item = geoCache.portfolioItems[i];
        const top = item.top - smoothScrollY;
        const bottom = top + item.height;
        if (bottom > -80 && top < vh + 80) {
          const progress = clamp((vh - top) / (vh + item.height), 0, 1);
          const focus = clamp(1 - Math.abs(progress - 0.5) * 1.6, 0, 1);
          setVar(item.el, '--scroll-progress', progress.toFixed(3));
          setVar(item.el, '--scroll-focus', focus.toFixed(3));
        }
      }

      // Ambient Cross-Section Aura Handoff
      let activeAura = sectionAuras[0];
      let bestDist = Infinity;
      for (let i = 0; i < sectionAuras.length; i++) {
        const item = sectionAuras[i];
        const center = (item.top - smoothScrollY) + item.height * 0.5;
        const dist = Math.abs(center - vh * 0.5);
        if (dist < bestDist) {
          bestDist = dist;
          activeAura = item;
        }
      }

      if (activeAura) {
        setVar(auraOrb, '--aura-color', activeAura.color);
        setVar(auraOrb, '--aura-x', `${activeAura.x}px`);
        setVar(auraOrb, '--aura-y', `${activeAura.y}px`);
      }
    }

    if (isSettling || (techTrack && techStripVisible)) {
      rafId = requestAnimationFrame(tick);
    }
  }

  measureMarquee();
  measureGeometryCache();
  requestTick();
})();
