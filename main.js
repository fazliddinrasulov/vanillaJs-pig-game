var current,
  scores,
  activePlayer,
  dice = [],
  winner;
scores = [0, 0];
current = 0;
activePlayer = 1;
winner = true;

document.querySelector("#player-1-score").textContent = 0;
document.querySelector("#player-2-score").textContent = 0;
document.querySelector("#current-1-score").textContent = 0;
document.querySelector("#current-2-score").textContent = 0;

document.querySelector(".image-1").style.display = "none";
document.querySelector(".image-2").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (winner === true) {
    document.querySelector(".image-1").style.display = "block";
    document.querySelector(".image-2").style.display = "block";
    dice[0] = Math.floor(Math.random() * 7 + 1);
    dice[1] = Math.floor(Math.random() * 7 + 1);
    if (dice[0] !== 7 && dice[1] !== 7) {
      document.querySelector(".image-1").style.left = "41%";
      current += dice[0] + dice[1];
      document.querySelector(".image-1").src = dice[0] + ".png";
      document.querySelector(".image-2").src = dice[1] + ".png";
      document.querySelector(
        "#current-" + activePlayer + "-score"
      ).textContent = current;
    } else {
      current = 0;
      document.querySelector(
        "#current-" + activePlayer + "-score"
      ).textContent = current;
      document.querySelector(".image-1").src = "7.png";
      document.querySelector(".image-1").style.left = "46%";
      document.querySelector(".image-2").style.display = "none";
      activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
      setTimeout(() => {
        document.querySelector(".image-1").style.display = "none";
      }, 600);
      document.querySelector(".player1").classList.toggle("active");
      document.querySelector(".player2").classList.toggle("active");
    }
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer - 1] += current;
  current = 0;
  document.querySelector("#player-" + activePlayer + "-score").textContent =
    scores[activePlayer - 1];
  document.querySelector(
    "#current-" + activePlayer + "-score"
  ).textContent = current;
  if (scores[activePlayer - 1] >= 100) {
    document.querySelector(".player" + activePlayer).classList.remove("active");
    document.querySelector(".winner" + activePlayer).style.visibility =
      "visible";
    winner = false;
  }
  activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
  document.querySelector(".image-1").style.display = "none";
  document.querySelector(".image-2").style.display = "none";
  document.querySelector(".player1").classList.toggle("active");
  document.querySelector(".player2").classList.toggle("active");
});
document.querySelector(".btn-new").addEventListener("click", function () {
  document.querySelector(".image-1").style.display = "none";
  document.querySelector(".image-2").style.display = "none";
  document.querySelector(".player2").classList.remove("active");
  document.querySelector(".player1").classList.add("active");
  document.querySelector(".winner1").style.visibility = "hidden";
  document.querySelector(".winner2").style.visibility = "hidden";
  scores = [0, 0];
  current = 0;
  activePlayer = 1;
  winner = true;
  document.querySelector("#current-1-score").textContent = 0;
  document.querySelector("#current-2-score").textContent = 0;
  document.querySelector("#player-1-score").textContent = 0;
  document.querySelector("#player-2-score").textContent = 0;
});
