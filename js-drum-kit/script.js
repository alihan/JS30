function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const drum = document.querySelector(`g[data-key="${e.keyCode}"]`);
  if (!drum) return;
  if (!audio) return; // stop function if there is no audio
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add("playing");
  drum.classList.add("animation");
  setTimeout(function (e) {
    drum.classList.remove("animation"), 50;
  });
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip it if its not transform
  this.classList.remove("playing");
}

function removeAnimation(e) {
  console.log(e);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);


