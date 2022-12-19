const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const chord = document.getElementById('chord');

document.addEventListener('keydown', (e) => {
  if (e.key === "v") {
    kick.currentTime = 0;
    kick.play();
  } else if (e.key === "j") {
    snare.currentTime = 0;
    snare.play();
  } else if (e.key === "f") {
    chord.loop = true;
    chord.currentTime = 0;
    chord.play();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === 'f') {
    chord.loop = false;
    chord.pause();
  }
});
