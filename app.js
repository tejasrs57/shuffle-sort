var shuffleAndSortModule = (function () {
  var cards = [
    { number: 1, class: "first-card" },
    { number: 2, class: "second-card" },
    { number: 3, class: "third-card" },
    { number: 4, class: "fourth-card" },
    { number: 5, class: "fifth-card" },
    { number: 6, class: "sixth-card" },
    { number: 7, class: "seventh-card" },
    { number: 8, class: "eigth-card" },
    { number: 9, class: "ningth-card" },
  ];
  function sort(containerId) {
    cards.sort(function (first, second) {
      return first.number - second.number;
    });
    contructDOM(containerId);
  }

  function shuffle(containerId) {
    for (var i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    contructDOM(containerId);
  }

  function contructDOM(containerId) {
    var containerElement = document.getElementById(containerId);
    if (!containerElement) return;
    containerElement.innerHTML = "";
    for (var i = 0; i <= cards.length - 1; i++) {
      var cardElement = document.createElement("div");
      cardElement.className = "card text-white " + cards[i].class;
      cardElement.innerText = cards[i].number;
      containerElement.appendChild(cardElement);
    }
  }

  return {
    sort: sort,
    shuffle: shuffle,
    contructDOM: contructDOM,
  };
})();

window.addEventListener("DOMContentLoaded", function (event) {
  shuffleAndSortModule.contructDOM("cards-container");
  document
    .getElementById("shuffle")
    .addEventListener("click", function (event) {
      shuffleAndSortModule.shuffle("cards-container");
    });

  document.getElementById("sort").addEventListener("click", function (event) {
    shuffleAndSortModule.sort("cards-container");
  });
});
