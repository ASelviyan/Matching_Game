const allCards = document.querySelectorAll(".card");
let com1;
let com2;

allCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.firstChild.classList.toggle("visibility");
  });

  card.addEventListener("click", function (e) {
    if (!com1) {
      com1 = e.target.firstChild.innerText;
    } else {
      com2 = e.target.firstChild.innerText;
    }
    console.log(com1);
    console.log(com2);
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
