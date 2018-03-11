var styleCopy = document.querySelector(".stylecopy");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function changeBackground() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  styleCopy.textContent = body.style.background + ";";
}

function randomColor(){
     return Math.floor(Math.random()*16777215).toString(16);
}

function randomGradient() {
  color1.value = "#" + randomColor();
  color2.value = "#" + randomColor();
  changeBackground();
}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click", randomGradient);
