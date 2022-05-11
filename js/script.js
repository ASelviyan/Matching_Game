const allCards = document.querySelectorAll(".card");
const playerPoints = document.querySelector(".playerOnePoints");
const winMessage = document.querySelector(".winning-message");
const timerText = document.querySelector(".timer");
const losingMessage = document.querySelector(".losing-message");
// const restartButton = document.querySelector(".restartButton");
let deck = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let com1;
let com2;
let card1;
let card2;
let playerOneCounter = 0;
let sec = 3;
gameState = true;

// function timer() {
//   let timerInterval = setInterval(function () {
//     timerText.innerText = sec;
//     sec--;
//   }, 1000);
//   if (sec < 0) {
//     clearInterval(timerInterval);
//   }
// }
randomizer(deck);

let timer1 = setInterval(function () {
  timerText.innerText = sec;
  sec--;
  if (sec <= -1) {
    clearInterval(timer1);
    losingMessage.classList.add("show");
  }
}, 1000);

allCards.forEach((card, i) => {
  card.addEventListener("click", function () {
    card.firstChild.classList.remove("visibility");
  });
  card.firstChild.id = i;
  card.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (!com1) {
    com1 = e.target.firstChild.innerText;
    card1 = e.target.firstChild;
  } else {
    com2 = e.target.firstChild.innerText;
    card2 = e.target.firstChild;
  }

  if (card1.id === card2.id) {
    return;
  }
  if (com1 && com2) {
    if (com1 === com2) {
      playerOneCounter++;
      playerPoints.innerText = playerOneCounter;
      card1.removeEventListener("click", handleClick);
      card2.removeEventListener("click", handleClick);
      winCondition();
      console.log(playerOneCounter);
      com1 = "";
      com2 = "";
    } else {
      com1 = "";
      com2 = "";
      setTimeout(() => {
        com1 = card1.classList.add("visibility");
        com2 = card2.classList.add("visibility");
      }, 200);
    }
  }
}

// Fisher-Yates Shuffle Modern Algorithm
//lets the array be randomized

function randomizer(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(deck);

// puts those that randomized array elements into each card box
for (let i = 0; i < allCards.length; i++) {
  allCards[i].firstChild.innerText = deck[i];
}

function winCondition() {
  if (playerOneCounter === 6) {
    winMessage.classList.add("show");
    console.log("You HAVE WON");
  }
}

function resetGame(array) {
  winMessage.classList.remove("show");
  losingMessage.classList.remove("show");
  randomizer(deck);
}
// timer();

document
  .querySelector("#restartButton1")
  .addEventListener("click", function () {
    resetGame(deck);
  });

document
  .querySelector("#restartButton2")
  .addEventListener("click", function () {
    resetGame(deck);
  });
