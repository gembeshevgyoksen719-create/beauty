/* =========================================
   УМНАЯ ШАПКА
   - Прозрачная сверху
   - При скролле вниз — прячется
   - При скролле вверх — выезжает с фоном
========================================= */
(function () {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const SCROLL_THRESHOLD = 80;   // через сколько пикселей от верха включать фон
  const DIRECTION_THRESHOLD = 5; // игнорим микро-дрожание скролла

  function updateHeader() {
    const y = window.scrollY;
    const diff = y - lastScrollY;

    // Фон и уменьшенный паддинг, если ушли от верха
    if (y > SCROLL_THRESHOLD) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    // Прячем/показываем по направлению скролла
    if (Math.abs(diff) > DIRECTION_THRESHOLD) {
      if (diff > 0 && y > SCROLL_THRESHOLD) {
        // скроллим вниз — прячем
        header.classList.add('is-hidden');
      } else {
        // скроллим вверх — показываем
        header.classList.remove('is-hidden');
      }
      lastScrollY = y;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
})();