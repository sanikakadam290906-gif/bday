/**
 * 3-Screen Birthday Celebration Website
 * Plain Vanilla JS navigation and interaction
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnClickMe = document.getElementById('btn-click-me');
  const btnNext = document.getElementById('btn-next');

  const screen1 = document.getElementById('screen-1');
  const screen2 = document.getElementById('screen-2');
  const screen3 = document.getElementById('screen-3');

  /**
   * Smooth fade transition between screens
   * @param {HTMLElement} fromScreen 
   * @param {HTMLElement} toScreen 
   */
  function goToScreen(fromScreen, toScreen) {
    if (!fromScreen || !toScreen) return;

    fromScreen.classList.remove('active');
    fromScreen.setAttribute('aria-hidden', 'true');

    toScreen.classList.add('active');
    toScreen.setAttribute('aria-hidden', 'false');

    // Reset scroll positions if in portrait/scrollable view
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (toScreen.scrollTop) {
      toScreen.scrollTop = 0;
    }
  }

  // Interactivity: CLICK ME -> Screen 2
  if (btnClickMe) {
    btnClickMe.addEventListener('click', () => {
      goToScreen(screen1, screen2);
    });
  }

  // Interactivity: NEXT -> Screen 3
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      goToScreen(screen2, screen3);
    });
  }
});
