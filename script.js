const mainPage = document.getElementById("container");

let color = "rgb(89, 165, 216)";

let isMousePressed;
document.addEventListener("mousedown", function() {isMousePressed = true;});
document.addEventListener("mouseup", function() {isMousePressed = false;})

//color squares
let numDivs = 0;

function addDivs(num) {
  numDivs = num;
  mainPage.replaceChildren();

  while (num--) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.borderWidth = "0px";
    div.addEventListener("mousedown", function() {
      div.style.backgroundColor = color;
    });
    div.addEventListener("mouseover", function() {
      if (isMousePressed) div.style.backgroundColor = color;
    });

    let percentage = 100/Math.sqrt(numDivs);
    let widthLength = percentage.toString() + "%";
    console.log(widthLength);
    div.style.width = widthLength;
    div.style.length = widthLength;

    mainPage.appendChild(div);
  }
}

addDivs(256);


//clear button
const mainThing = document.getElementById("main-thing");
const buttons = document.getElementById("buttons");

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";

buttons.appendChild(clearButton);

clearButton.addEventListener("click", function () {
  const boxes = document.querySelectorAll(".color-box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "white";
  }
});


//num of squares button
const numButton = document.createElement("button");
numButton.textContent = "Change number";

buttons.appendChild(numButton);

numButton.addEventListener("click", function () {
  let userNum = prompt("Enter number of rows/columns:");

  while (!(userNum > 0) || !(userNum <= 100)) {
    userNum = prompt("Invalid number. Enter number of rows/columns (max 100):");
  }
  addDivs(userNum * userNum, mainPage);
});


//color button
const colorButton = document.getElementById("color-button");
const colorInput = document.getElementById("color-input");

colorButton.addEventListener("click", function () {
  color = colorInput.value;
});
colorInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    color = colorInput.value;
  }

});