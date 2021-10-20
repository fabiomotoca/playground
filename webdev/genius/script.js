const colorMap = {
  1: "green",
  2: "yellow",
  3: "red",
  4: "blue",
};

const soundMap = {
  green: "sounds/green.mp3",
  yellow: "sounds/yellow.mp3",
  red: "sounds/red.mp3",
  blue: "sounds/blue.mp3",
};

let sequence = [];

document.addEventListener("keydown", function (event) {
  if (event.key === "F1") {
    console.log("Start the game!!!");
    nextSequence();
  } else {
    console.log(event.key);
  }
});

function nextSequence() {
  let colorNumber = Math.floor(Math.random() * 4 + 1);
  sequence.push(colorMap[colorNumber]);
  console.log(sequence);

  playSequence(sequence);
}

function playSequence(list) {
  delay = 250;

  list.forEach((element) => {
    delay += 500;
    setTimeout(() => {
      playEffect(element);
      audio = new Audio(soundMap[element]);
      audio.play();
    }, delay);
  });
}

function playEffect(element) {
  selected = document.querySelector("." + element);
  selected.classList.add("flash");
  setTimeout(() => {
    selected.classList.remove("flash");
  }, 200);
}
