const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const chord = document.getElementById('chord');
const hatClosed = document.getElementById('hat-closed');
const hatOpen = document.getElementById('hat-open');
const crash = document.getElementById('crash');
const tomMid = document.getElementById('tom-mid');
const tomHigh = document.getElementById('tom-high');
const bass = document.getElementById('bass');

document.addEventListener('keydown', (e) => {
  if (e.key === "v") {
    kick.currentTime = 0;
    kick.play();
  } else if (e.key === "j") {
    snare.currentTime = 0;
    snare.play();
  } else if (e.key === "f") {
    chord.loop = false;
    chord.currentTime = 0;
    chord.play();
  } else if (e.key === "i") {
    hatClosed.currentTime = 0;
    hatClosed.play();
  } else if (e.key === "k") {
    hatOpen.currentTime = 0;
    hatOpen.play();
  } else if (e.key === "e") {
    crash.currentTime = 0;
    crash.play();
  } else if (e.key === "g") {
    tomMid.currentTime = 0;
    tomMid.play();
  } else if (e.key === "h") {
    tomHigh.currentTime = 0;
    tomHigh.play();
  } else if (e.key === "b") {
    bass.currentTime = 0;
    bass.play();
  }
});

chord.addEventListener("ended", (e) => {
  if (e.key === "a") {
    chord.currentTime = 0;
    chord.play();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === 'f') {
    chord.pause();
  }
});
