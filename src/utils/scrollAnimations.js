// utils/scrollAnimations.js

export const initScrollAnimations = () => {
  // Observer pour les animations de révélations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animation basée sur la position
        const rect = entry.target.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (rect.top < viewportHeight * 0.3) {
          entry.target.classList.add('animate-reveal-bottom');
        } else if (rect.left < window.innerWidth / 2) {
          entry.target.classList.add('animate-reveal-left');
        } else {
          entry.target.classList.add('animate-reveal-right');
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe "scroll-reveal"
  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
  });

  // Animation de fond au défilement
  const sections = document.querySelectorAll('.snap-section');
  const container = document.querySelector('.snap-container');
  
  if (container) {
    container.addEventListener('scroll', () => {
      const scrollPosition = container.scrollTop;
      const viewportHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / viewportHeight);
      
      // Ajouter/retirer les classes de flou
      sections.forEach((section, index) => {
        if (Math.abs(index - currentSection) > 0) {
          section.classList.add('blur-on-scroll');
          section.style.filter = 'blur(2px) opacity(0.7)';
        } else {
          section.classList.remove('blur-on-scroll');
          section.style.filter = 'none';
        }
      });
    });
  }

  // Animation des cartes en cascade
  const staggerAnimation = (elements) => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('stagger-item');
        element.style.animationDelay = `${index * 0.1}s`;
      }, 100);
    });
  };

  // Appliquer aux cartes des sections
  const cards = document.querySelectorAll('.stagger-card');
  staggerAnimation(cards);
};

// Défilement au clavier
export const initKeyboardScroll = () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
      e.preventDefault();
      
      const container = document.querySelector('.snap-container');
      if (!container) return;
      
      const sections = document.querySelectorAll('.snap-section');
      const scrollPosition = container.scrollTop;
      const viewportHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / viewportHeight);
      
      let nextSection;
      if (e.key === 'ArrowDown' || e.key === ' ') {
        nextSection = Math.min(sections.length - 1, currentSection + 1);
      } else {
        nextSection = Math.max(0, currentSection - 1);
      }
      
      container.scrollTo({
        top: nextSection * viewportHeight,
        behavior: 'smooth'
      });
    }
  });
};