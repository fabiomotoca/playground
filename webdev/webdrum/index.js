const soundMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
}

const buttonList = document.querySelectorAll(".drum").forEach(function () {
  this.addEventListener("click", handleClick);
});

function handleClick() {
  let selected = document.activeElement.innerHTML;
  playDrum(selected);
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(event.key);
  playDrum(event.key);
});

function playDrum(sound) {
  let audio = new Audio(soundMap[sound]);
  audio.play();
}
