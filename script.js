const mainPage = document.getElementById("container");



function addDivs(num, element) {
  while (num--) {
    element.appendChild(document.createElement("div"));
  }
}

addDivs(256, mainPage);
