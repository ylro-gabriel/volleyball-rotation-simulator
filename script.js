const button = document.getElementById("moveBtn");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const player5 = document.getElementById("player5");
const player6 = document.getElementById("player6");

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

const position3 = [
  { right: "0px", bottom: "111px" }, //1st press
  { right: "-57px", bottom: "111px" }, //2nd press
  { right: "-114px", bottom: "111px" }, //3rd press
  { right: "-114px", bottom: "0px" }, //4th press
  { right: "-57px", bottom: "0px" }, //5th press
  { right: "0px", bottom: "0px" }, //6th press
];

const position4 = [
  { right: "-57px" }, //1st press
  { right: "-114px" }, //2nd press
  { right: "-114px", bottom: "-111px" }, //3rd press
  { right: "-57px", bottom: "-111px" }, //4th press
  { right: "0px", bottom: "-111px" }, //5th press
  { right: "0px", bottom: "0px" }, //6th press
];

const position5 = [
  { right: "-57px" }, //1st press
  { right: "-57px", bottom: "-111px" }, //2nd press
  { right: "0px", bottom: "-111px" }, //3rd press
  { right: "57px", bottom: "-111px" }, //4th press
  { right: "57px", bottom: "0px" }, //5th press
  { right: "0px", bottom: "0px" }, //6th press
];

const position6 = [
  { right: "0px", bottom: "-111px" }, //1st press
  { right: "57px", bottom: "-111px" }, //2nd press
  { right: "114px", bottom: "-111px" }, //3rd press
  { right: "114px", bottom: "0px" }, //4th press
  { right: "57px", bottom: "0px" }, //5th press
  { right: "0px", bottom: "0px" }, //6th press
];

let clickCount = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let clickCount6 = 0;

button.addEventListener("click", () => {
  const nextTarget = position1[clickCount];
  const nextTarget2 = position2[clickCount2];
  const nextTarget3 = position3[clickCount3];
  const nextTarget4 = position4[clickCount4];
  const nextTarget5 = position5[clickCount5];
  const nextTarget6 = position6[clickCount6];

  player1.style.right = nextTarget.right;
  player1.style.bottom = nextTarget.bottom;

  player2.style.right = nextTarget2.right;
  player2.style.bottom = nextTarget2.bottom;

  player3.style.right = nextTarget3.right;
  player3.style.bottom = nextTarget3.bottom;

  player4.style.right = nextTarget4.right;
  player4.style.bottom = nextTarget4.bottom;

  player5.style.right = nextTarget5.right;
  player5.style.bottom = nextTarget5.bottom;

  player6.style.right = nextTarget6.right;
  player6.style.bottom = nextTarget6.bottom;

  clickCount++;
  clickCount2++;
  clickCount3++;
  clickCount4++;
  clickCount5++;
  clickCount6++;

  if (clickCount === position1.length) {
    clickCount = 0;
  }

  if (clickCount2 === position2.length) {
    clickCount2 = 0;
  }

  if (clickCount3 === position3.length) {
    clickCount3 = 0;
  }

  if (clickCount4 === position4.length) {
    clickCount4 = 0;
  }

  if (clickCount5 === position5.length) {
    clickCount5 = 0;
  }

  if (clickCount6 === position6.length) {
    clickCount6 = 0;
  }
});

function changeColor(event) {
  event.target.style.backgroundColor = "blue";
}

player1.addEventListener("click", changeColor);
player2.addEventListener("click", changeColor);
player3.addEventListener("click", changeColor);
player4.addEventListener("click", changeColor);
player5.addEventListener("click", changeColor);
player6.addEventListener("click", changeColor);
