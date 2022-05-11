const allCards = document.querySelectorAll(".card");
const playerPoints = document.querySelector(".playerOnePoints");
const winMessage = document.querySelector(".winning-message");
const timerText = document.querySelector(".timer");
let com1;
let com2;
let card1;
let card2;
let playerOneCounter = 0;
let sec = 30;
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

let timer1 = setInterval(function () {
  timerText.innerText = sec;
  sec--;
  if (sec <= -1) {
    clearInterval(timer1);
  }
}, 1000);

allCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.firstChild.classList.remove("visibility");
  });

  card.addEventListener("click", function (e) {
    if (!com1) {
      com1 = e.target.firstChild.innerText;
      card1 = e.target.firstChild;
    } else {
      com2 = e.target.firstChild.innerText;
      card2 = e.target.firstChild;
    }

    console.log(com1);
    console.log(com2);
    if (com1 && com2) {
      // if (e.target.firstChild.className !== "visibility") {
      //   e.target.removeEventListener("click");
      // }
      if (com1 === com2) {
        playerOneCounter++;
        playerPoints.innerText = playerOneCounter;
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
  });
});
let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     return array;
//   }
// };

// Fisher-Yates Shuffle Modern Algorithm
//lets the array be randomized
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(array);

// puts those that randomized array elements into each card box
for (let i = 0; i < allCards.length; i++) {
  allCards[i].firstChild.innerText = array[i];
}

function winCondition() {
  if (playerOneCounter === 6) {
    winMessage.classList.add("show");
    console.log("You HAVE WON");
  }
}

// timer();
