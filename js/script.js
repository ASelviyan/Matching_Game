const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.firstChild.classList.toggle("visibility");
  });
});
