function rollDices() {
  const diceMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
  ]);

  const tasks = new Map([
      [1, "Do the dishes"],
      [2, "Make the lunch"],
      [3, "Take the dog(s) to a walk"],
      [4, "Take the trash out"],
      [5, "Wash the clothes"],
      [6, "Clean the bathroom"],
      [7, "Choose a movie in the cinema"],
      [8, "Chosse a movie to watch in Netflix, Amazon Prime or Apple TV"],
      [9, "Make the coffe"],
      [10, "Massage"]
  ])

  let p1Dice = Math.floor(Math.random() * 5) + 1;
  let p2Dice = Math.floor(Math.random() * 5) + 1;
  let randomTask = (Math.floor(Math.random() * tasks.size) + 1);

  const p1DiceSelector = document.querySelector("#p1-dice");
  const p2DiceSelector = document.querySelector("#p2-dice");

  p1DiceSelector.setAttribute(
    "class",
    "fa fa-dice-" + diceMap.get(p1Dice) + " fa-5x"
  );
  p2DiceSelector.setAttribute(
    "class",
    "fa fa-dice-" + diceMap.get(p2Dice) + " fa-5x"
  );

  console.log("P1 dice: " + p1Dice + " P2 dice: " + p2Dice);

  let winner = null;
  let loser = null;
  let task = null;
  let dice = null;

  if (p1Dice > p2Dice) {
    winner = "Player 1";
    loser = "Player 2";
    message = winner + " WINS!";
    task = loser + " " + tasks.get(randomTask) + " for " + winner;
    dice = "fas fa-trophy fa-2x gold";
  } else if (p2Dice > p1Dice) {
    winner = "Player 2";
    loser = "Player 1";
    message = winner + " WINS!";
    task = loser + " " + tasks.get(randomTask) + " for " + winner;
    dice = "fas fa-trophy fa-2x gold";
  } else {
    message = "DRAW!!!";
    task = "The task was = " + tasks.get(randomTask);
    dice = "fas fa-dice fa-2x";
  }

  const titleSelector = document.querySelector("#title");
  const titleDiceSelector = document.querySelector("#title-dice");
  const taskSelector = document.querySelector("#random-task");
  titleSelector.textContent = message;
  titleDiceSelector.setAttribute("class", dice);
  taskSelector.textContent = task;
}
