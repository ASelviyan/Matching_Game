const allCards = document.querySelectorAll(".card");
const playerPoints = document.querySelector(".playerOnePoints");
const winMessage = document.querySelector(".winning-message");
const timerText = document.querySelector(".timer");
const losingMessage = document.querySelector(".losing-message");
// const modeOne = document.querySelector(".playerOneButton");
// const modeTwo = document.querySelector(".playerTwoButton");
// const restartButton = document.querySelector(".restartButton");
let deck = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let com1;
let com2;
let card1;
let card2;
let playerOneCounter = 0;
let sec = 15;
gameState = true;

randomizer(deck);
insertRandomizedCards(allCards);
timer(sec);

// switch (button) {
//   case modeOne:
//     break;
//   case modeTwo:
//     break;
//   default:
//     break;
// }

// function disappear(){
//  setTimeout(() => {
//         com1 = card1.classList.add("visibility");
//         com2 = card2.classList.add("visibility");
//       }, 200);
//     }
// Fisher-Yates Shuffle Modern Algorithm
//lets the array be randomized

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
function insertRandomizedCards(allCardsP) {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].firstChild.innerText = deck[i];
  }
}

//Timer
function timer(seconds) {
  let timer1 = setInterval(function () {
    timerText.innerText = seconds;
    seconds--;
    if (seconds <= -1) {
      clearInterval(timer1);
      if (gameState === true) {
        losingMessage.classList.add("show");
      }
    }
  }, 1000);
}

// if the player gets all 6 match ups then show the winning screen
function winCondition() {
  if (playerOneCounter === 6) {
    winMessage.classList.add("show");
    gameState = false;
  }
}

function resetGame(array) {
  winMessage.classList.remove("show");
  losingMessage.classList.remove("show");
  randomizer(deck);
  insertRandomizedCards();
  allCards.forEach((card) => {
    card.firstChild.classList.add("visibility");
    playerOneCounter = 0;
    playerPoints.innerText = playerOneCounter;
    sec = 15;
    timer(sec);
  });
}
