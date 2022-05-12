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
let sec = 15;
gameState = true;

randomizer(deck);
insertRandomizedCards(allCards);
timer(sec);

//selects every div
allCards.forEach((card, i) => {
  //puts an eventlistener to each card that listens for a click
  //when clicked it makes the inner text visible to the user
  card.addEventListener("click", function () {
    card.firstChild.classList.remove("visibility");
  });
  //add an id to each card to differentiate them
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
      // disappear();
    }
  }
}

// function disappear(){
//  setTimeout(() => {
//         com1 = card1.classList.add("visibility");
//         com2 = card2.classList.add("visibility");
//       }, 200);
//     }
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
      losingMessage.classList.add("show");
    }
  }, 1000);
}

// if the player gets all 6 match ups then show the winning screen
function winCondition() {
  if (playerOneCounter === 6) {
    winMessage.classList.add("show");
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
