const allCards = document.querySelectorAll(".card");
let com1;
let com2;
let card1;
let card2;
let playerOneCounter = 0;

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

    console.log(card.firstChild.classList);
    console.log(com1);
    console.log(com2);
    if (com1 && com2) {
      if (com1 === com2) {
        playerOneCounter++;
        console.log("You got one point");
        com1 = "";
        com2 = "";
      } else {
        com1 = "";
        com2 = "";
        setTimeout(() => {
          com1 = card1.classList.add("visibility");
          com2 = card2.classList.add("visibility");
        }, 500);

        console.log("im here");
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

function winCondition() {}
