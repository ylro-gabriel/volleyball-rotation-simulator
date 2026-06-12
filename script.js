const button = document.getElementById("moveBtn");
const player1 = document.getElementById("player1");

const positions = [
  { right: "57px" }, //1st press
  { right: "114px" }, //2nd press
  { right: "114px", bottom: "111px" }, //3rd press
  { right: "57px", bottom: "111px" }, //4th press
  { right: "0px", bottom: "111px" }, //5th press
  { right: "0px", bottom: "0px" },
];

let clickCount = 0;

button.addEventListener("click", () => {
  const nextTarget = positions[clickCount];

  player1.style.right = nextTarget.right;
  player1.style.left = nextTarget.left;
  player1.style.top = nextTarget.top;
  player1.style.bottom = nextTarget.bottom;

  clickCount++;

  if (clickCount === positions.length) {
    clickCount = 0;
  }
});
