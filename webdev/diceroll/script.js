const diceMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let p1Dice = diceRoll();
  let p2Dice = diceRoll();

  document
    .querySelector("#p1Dice")
    .setAttribute("class", "fas fa-3x fa-dice-" + diceMap[p1Dice]);
  document
    .querySelector("#p2Dice")
    .setAttribute("class", "fas fa-3x fa-dice-" + diceMap[p2Dice]);

  console.log("Player 1 dice = " + p1Dice + " Player 2 dice = " + p2Dice);
});

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}
