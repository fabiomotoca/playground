/* CONSTS and VARS */

let sequence = [];
let userSequence = [];
let level = 0;

const colorList = ["green", "yellow", "red", "blue"];

const soundMap = {
  green: "sounds/green.mp3",
  yellow: "sounds/yellow.mp3",
  red: "sounds/red.mp3",
  blue: "sounds/blue.mp3",
  wrong: "sounds/wrong.mp3",
};

/* Listeners */

document.addEventListener("keydown", function (event) {
  if (level === 0 || level === -1) {
    if (event.key === "F1") {
      console.log("New Game!");
      nextLevel();
    }
  }
});

colorList.forEach((element) => {
  document.getElementById(element).addEventListener("click", handleClick);
});

function handleClick() {
  let selected = document.activeElement.id;
  userSequence.push(selected);
  playEffects(selected);
  checkProgress();
}

/* GAME */

function checkProgress() {
  console.log("************************************");
  console.log("Current Level: " + level);
  console.log("User Sequence: " + userSequence);
  console.log("Computer Sequence: " + sequence);
  console.log("************************************");
  userSequence.forEach((element, index) => {
    if (element === sequence[index]) {
      /* 
      Check if the current user answers is equal to the level,
      otherwise change to the next level.
      */
      if (userSequence.length == level && level != -1) {
        console.log("Amazing!!! Next level!");
        nextLevel();
      }
    } else {
      playEffects("wrong");
      console.log("Wrong! Start new game!");
      stopGame();
    }
  });
}

function nextLevel() {
  if (level === -1) {
    level = 0;
  }
  userSequence = [];
  level++;
  nextSequence();
}

function stopGame() {
  level = -1;
  sequence = [];
  updateProgress();
}

function nextSequence() {
  index = Math.floor(Math.random() * 4);
  let color = colorList[index];
  sequence.push(color);
  console.log(sequence);
  updateProgress();
  setTimeout(() => {
    playSequence(sequence);
  }, 500);
}

function playSequence(list) {
  delay = 500;

  list.forEach((element) => {
    delay += 500;
    setTimeout(() => {
      playEffects(element);
    }, delay);
  });
}

/* Functions for visual and audio effects */

function playEffects(element) {
  playVisual(element);
  playAudio(element);
}

function playAudio(element) {
  if (element != "wrong") {
    audio = new Audio(soundMap[element]);
  } else {
    audio = new Audio(soundMap["wrong"]);
  }

  audio.play();
}

function playVisual(element) {
  if (element != "wrong") {
    selected = document.getElementById(element);
    selected.classList.add("flash");
    setTimeout(() => {
      selected.classList.remove("flash");
    }, 200);
  } else {
    document.body.classList.add("gameover");
    setTimeout(() => {
      document.body.classList.remove("gameover");
    }, 500);
  }
}

function updateProgress() {
  if (level === -1) {
    progress = "Game Over! Press F1 to restart!";
  } else if (level === 1) {
    document.querySelector(".progress").innerHTML = "Good Luck!";
    progress = "Level 1";
  } else {
    setTimeout(() => {
      document.querySelector(".progress").innerHTML = "Next level!";
    }, 150);
    progress = "Level " + level;
  }

  setTimeout(() => {
    document.querySelector(".progress").innerHTML = progress;
  }, 750);
}
