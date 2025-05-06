const hearts = ['❤️', '💕', '💖', '💘'];
const flowers = ['🌸', '🌼', '🌷', '🌹'];

function createFloaty(container, symbols, className) {
  setInterval(() => {
    const elem = document.createElement('div');
    elem.className = className;
    elem.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    elem.style.left = Math.random() * 100 + 'vw';
    elem.style.top = '100vh';
    elem.style.fontSize = (Math.random() * 20 + 20) + 'px';
    elem.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(elem);
    setTimeout(() => elem.remove(), 7000);
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector('.hearts');
  const flowersContainer = document.querySelector('.flowers');
  const surpriseBtn = document.getElementById('surpriseBtn');
  const surpriseMessage = document.getElementById('surpriseMessage');

  if (heartsContainer && flowersContainer) {
    createFloaty(heartsContainer, hearts, 'heart');
    createFloaty(flowersContainer, flowers, 'flower');
  }

  surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.add('visible');
  });
});
