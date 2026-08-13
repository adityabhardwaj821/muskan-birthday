let popped = 0;


/* CHANGE PAGE */

function nextPage(number) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });

  document
    .getElementById("page" + number)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* POP BALLOON */

function pop(balloon, word) {

  if (balloon.classList.contains("popped")) {
    return;
  }

  balloon.classList.add("popped");

  popped++;

  document.getElementById("words").innerHTML +=
    `<span style="margin:10px">${word}</span>`;

  createConfetti();

  if (popped === 4) {

    setTimeout(() => {

      document.getElementById(
        "nextBalloon"
      ).style.display = "inline-block";

    }, 500);

  }
}


/* BLOW CANDLE */

function blowCandle() {

  document.getElementById(
    "bigFlame"
  ).style.display = "none";

  createConfetti();

  setTimeout(() => {

    nextPage(4);

  }, 1000);
}


/* CONFETTI */

function createConfetti() {

  const emojis = [
    "❤️",
    "💕",
    "✨",
    "🌸",
    "🎉",
    "💗",
    "🎀"
  ];

  for (let i = 0; i < 30; i++) {

    const item =
      document.createElement("div");

    item.className = "confetti";

    item.innerText =
      emojis[
        Math.floor(
          Math.random() * emojis.length
        )
      ];

    item.style.left =
      Math.random() * 100 + "%";

    item.style.fontSize =
      (12 + Math.random() * 20) + "px";

    item.style.animationDuration =
      (2 + Math.random() * 2) + "s";

    document.body.appendChild(item);

    setTimeout(() => {

      item.remove();

    }, 4500);
  }
}


/* FINAL CELEBRATION */

function celebrate() {

  createConfetti();
  createConfetti();
  createConfetti();

}