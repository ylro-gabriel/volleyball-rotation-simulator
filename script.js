const button = document.getElementById("moveBtn");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const position1 = [
  { right: "57px" }, //1st press
  { right: "114px" }, //2nd press
  { right: "114px", bottom: "111px" }, //3rd press
  { right: "57px", bottom: "111px" }, //4th press
  { right: "0px", bottom: "111px" }, //5th press
  { right: "0px", bottom: "0px" },
];

const position2 = [
  { right: "57px" }, //1st press
  { right: "57px", bottom: "111px" }, //2nd press
  { right: "0px", bottom: "111px" }, //3rd press
  { right: "-57px", bottom: "111px" }, //4th press
  { right: "-57px", bottom: "0px" }, //5th press
  { right: "0px", bottom: "0px" }, //6th press
];

let clickCount = 0;
let clickCount2 = 0;

button.addEventListener("click", () => {
  const nextTarget = position1[clickCount];
  const nextTarget2 = position2[clickCount2];

  player1.style.right = nextTarget.right;
  player1.style.left = nextTarget.left;
  player1.style.top = nextTarget.top;
  player1.style.bottom = nextTarget.bottom;

  player2.style.right = nextTarget2.right;
  player2.style.left = nextTarget2.left;
  player2.style.top = nextTarget2.top;
  player2.style.bottom = nextTarget2.bottom;

  clickCount++;
  clickCount2++;

  if (clickCount === position1.length) {
    clickCount = 0;
  }

  if (clickCount2 === position2.length) {
    clickCount2 = 0;
  }
});
