const instructions = document.querySelector(".instructions");
const numberDisplay = document.querySelector(".number-display");
const button = document.querySelector("button");

const NUMBER_OF_NUMBERS = 8;

const numberAnswer = [];
const incorrectAnswers = Array.from({ length: NUMBER_OF_NUMBERS }, () => 1);

startGame();
checkGame();

function startGame() {
  for (let i = 0; i < NUMBER_OF_NUMBERS; i++) {
    const num = createNumber(i);
    numberDisplay.appendChild(num);
    numberAnswer.push(Math.floor(Math.random() * NUMBER_OF_NUMBERS));
  }
  console.log(numberAnswer);
}

function checkGame() {
  numberInput.addEventListener("change", checkNumber.bind(numberInput, idx));

  if (incorrectAnswers.indexOf(1) === -1) {
    console.log("WINNER!");
  }
}

function createNumber(idx) {
  numberInput = document.createElement("input");
  numberInput.type = "number";
  numberInput.step = 1;
  numberInput.max = 9;
  numberInput.min = 0;
  numberInput.classList.add("number-input");
  numberInput.style.width = (100 / NUMBER_OF_NUMBERS) * 0.5 + "%";
  return numberInput;
}

function checkNumber(index) {
  const correct = numberAnswer[index];
  const val = this.value;
  ["too-high", "too-low", "correct"].forEach((e) => this.classList.remove(e));
  if (val > correct) {
    this.classList.add("too-high");
    incorrectAnswers[index] = 1;
  } else if (val < correct) {
    this.classList.add("too-low");
    incorrectAnswers[index] = 1;
  } else {
    this.classList.add("correct");
    incorrectAnswers[index] = 0;
  }
}
