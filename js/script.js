const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.firstChild.classList.toggle("visibility");
  });
});

let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

// for (let i = 0; i < array.length; i++) {
//   randomNum = Math.floor(Math.random() * array.length);
//   newArray.push(randomNum);
// }

// Fisher-Yates Shuffle Modern Algorithm
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     return array;
//   }
// };

for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(array);

for (let i = 0; i < allCards.length; i++) {
  allCards[i].firstChild.innerText = array[i];
}
