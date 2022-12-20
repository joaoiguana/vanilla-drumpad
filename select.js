const drumPads = document.querySelectorAll('.drum-pad');

const handleKeyDown = (e) => {
  const key = e.key.toUpperCase();
  const pad = document.querySelector(`[data-key="${key}"]`);
  if (pad) {
    pad.classList.add('active');
  }
}

const handleKeyUp = (e) => {
  const key = e.key.toUpperCase();
  const pad = document.querySelector(`[data-key="${key}"]`);
  if (pad) {
    pad.classList.remove('active');
  }
}

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
